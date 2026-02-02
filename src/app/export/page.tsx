"use client";

import { useState } from "react";
import { slides } from "../../data/slides";
import { IntroSlide } from "../../components/slides/IntroSlide";
import { ProfileSlide } from "../../components/slides/ProfileSlide";
import { AgendaSlide } from "../../components/slides/AgendaSlide";
import { QuizSlide } from "../../components/slides/QuizSlide";
import { ContentSlide } from "../../components/slides/ContentSlide";
import { ComparisonSlide } from "../../components/slides/ComparisonSlide";
import { StatsSlide } from "../../components/slides/StatsSlide";
import { SkillsSlide } from "../../components/slides/SkillsSlide";
import { QuoteSlide } from "../../components/slides/QuoteSlide";
import { ClosingSlide } from "../../components/slides/ClosingSlide";
import PptxGenJS from "pptxgenjs";
import * as htmlToImage from "html-to-image";

export default function ExportPage() {
    const [isExporting, setIsExporting] = useState(false);

    const renderSlide = (slide: any) => {
        switch (slide.type) {
            case "intro": return <IntroSlide data={slide} />;
            case "profile": return <ProfileSlide data={slide} />;
            case "agenda": return <AgendaSlide data={slide} />;
            case "quiz": return <QuizSlide data={slide} />;
            case "content": return <ContentSlide data={slide} />;
            case "comparison": return <ComparisonSlide data={slide} />;
            case "stats": return <StatsSlide data={slide} />;
            case "skills": return <SkillsSlide data={slide} />;
            case "quote": return <QuoteSlide data={slide} />;
            case "closing": return <ClosingSlide data={slide} />;
            default: return null;
        }
    };

    const handleExportPPTX = async () => {
        setIsExporting(true);
        try {
            const pres = new PptxGenJS();
            pres.layout = "LAYOUT_16x9";

            /* Process slides 1 to 15 (which is all current slides) */
            const slidesToExport = slides.filter(s => s.id >= 1 && s.id <= 15);

            for (const slide of slidesToExport) {
                const elementId = `slide-${slide.id}`;
                const element = document.getElementById(elementId);

                if (element) {
                    // Slight delay to ensure rendering
                    await new Promise(resolve => setTimeout(resolve, 100));

                    const dataUrl = await htmlToImage.toPng(element, {
                        quality: 0.95,
                        pixelRatio: 1.5, // Better quality
                        width: 1920,
                        height: 1080,
                        style: {
                            transform: 'scale(1)', // Force scale to 1 to avoid zoom issues
                        }
                    });

                    const pptxSlide = pres.addSlide();
                    pptxSlide.addImage({
                        data: dataUrl,
                        x: 0,
                        y: 0,
                        w: "100%",
                        h: "100%"
                    });

                }
            }

            await pres.writeFile({ fileName: "AI_Webinar_Presentation.pptx" });
        } catch (error) {
            console.error("Export failed:", error);
            alert("Failed to export PPTX. See console for details.");
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="bg-black min-h-screen">
            <style jsx global>{`
                @page {
                    size: 1920px 1080px; /* Force 16:9 aspect ratio for PDF */
                    margin: 0;
                }
                @media print {
                    body {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .no-print {
                        display: none;
                    }
                }
            `}</style>

            <div className="no-print fixed top-5 right-5 z-[9999] flex flex-col gap-2 items-end">
                <div className="flex gap-2">
                    <button
                        onClick={handleExportPPTX}
                        disabled={isExporting}
                        className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-all flex items-center gap-2 ${isExporting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isExporting ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Exporting...
                            </>
                        ) : (
                            "Export PPTX"
                        )}
                    </button>
                    <button
                        onClick={() => window.print()}
                        className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded shadow-lg transition-all"
                    >
                        Save as PDF
                    </button>
                </div>

                <div className="mt-2 text-white bg-black/80 p-2 rounded text-xs max-w-xs border border-white/20 text-right">
                    <p className="font-bold mb-1 text-cyan-400">PDF Instructions:</p>
                    <p>1. Set Layout to <strong>Landscape</strong></p>
                    <p>2. Set Paper Size to <strong>A4</strong> or Custom</p>
                    <p>3. Enable <strong>Background Graphics</strong></p>
                </div>
            </div>

            <div className="flex flex-col">
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        id={`slide-${slide.id}`}
                        className="w-[1920px] h-[1080px] relative overflow-hidden break-after-page mx-auto bg-navy border-b-2 border-dashed border-gray-800 print:border-none print:w-full print:h-screen"
                    >
                        {renderSlide(slide)}
                    </div>
                ))}
            </div>
        </div>
    );
}
