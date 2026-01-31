
"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "../data/slides";
import { IntroSlide } from "./slides/IntroSlide";
import { ProfileSlide } from "./slides/ProfileSlide";
import { AgendaSlide } from "./slides/AgendaSlide";
import { QuizSlide } from "./slides/QuizSlide";
import { ContentSlide } from "./slides/ContentSlide";
import { ComparisonSlide } from "./slides/ComparisonSlide";
import { StatsSlide } from "./slides/StatsSlide";
import { SkillsSlide } from "./slides/SkillsSlide";
import { QuoteSlide } from "./slides/QuoteSlide";
import { QRSlide } from "./slides/QRSlide";
import { ClosingSlide } from "./slides/ClosingSlide";
import { ChevronRight, ChevronLeft, Maximize, Minimize, Command } from "lucide-react";

export default function Presentation() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                prevSlide();
            } else if (e.key === "f") {
                toggleFullscreen();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    const currentSlide = slides[currentIndex];

    const renderSlide = () => {
        switch (currentSlide.type) {
            case "intro": return <IntroSlide data={currentSlide} />;
            case "profile": return <ProfileSlide data={currentSlide} />;
            case "agenda": return <AgendaSlide data={currentSlide} />;
            case "quiz": return <QuizSlide data={currentSlide} />;
            case "content": return <ContentSlide data={currentSlide} />;
            case "comparison": return <ComparisonSlide data={currentSlide} />;
            case "stats": return <StatsSlide data={currentSlide} />;
            case "skills": return <SkillsSlide data={currentSlide} />;
            case "quote": return <QuoteSlide data={currentSlide} />;
            case "qr": return <QRSlide data={currentSlide} />;
            case "closing": return <ClosingSlide data={currentSlide} />;
            default: return <div className="flex h-screen items-center justify-center text-4xl text-red-500">Slide Type: {currentSlide.type}</div>;
        }
    };

    return (
        <div className="relative w-full h-screen bg-[#0A192F] text-white overflow-hidden font-sans">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                >
                    {renderSlide()}
                </motion.div>
            </AnimatePresence>

            {/* Floating Controls Overlay */}
            <div className="fixed bottom-10 left-12 right-12 flex justify-between items-center z-[100] pointer-events-none">
                <div className="pointer-events-auto flex items-center gap-4 group">
                    <div className="glass-card bg-navy/80 px-6 py-3 border-white/5 flex items-center gap-4 transition-all hover:border-cyan-bright/50">
                        <span className="text-cyan-bright font-black text-sm tracking-tighter">AI.WEBINAR</span>
                        <div className="w-[1px] h-6 bg-white/20" />
                        <span className="text-white/60 font-mono text-xs tracking-widest">{currentIndex + 1} / {slides.length}</span>
                    </div>
                </div>

                <div className="pointer-events-auto flex items-center gap-3">
                    <ControlButton onClick={prevSlide} disabled={currentIndex === 0}>
                        <ChevronLeft size={24} />
                    </ControlButton>

                    <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-bright to-purple-hot"
                            animate={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
                            transition={{ type: "spring", stiffness: 50 }}
                        />
                    </div>

                    <ControlButton onClick={nextSlide} disabled={currentIndex === slides.length - 1}>
                        <ChevronRight size={24} />
                    </ControlButton>

                    <div className="w-4" />

                    <ControlButton onClick={toggleFullscreen} highlight>
                        {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
                    </ControlButton>
                </div>
            </div>

            <div className="fixed top-10 right-12 z-[100] glass-card px-4 py-2 border-white/5 flex items-center gap-3 text-white/40 text-xs font-mono tracking-widest uppercase">
                <Command size={14} />
                <span>Use arrows to navigate</span>
            </div>
        </div>
    );
}

function ControlButton({ children, onClick, disabled = false, highlight = false }: any) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`p-4 glass-card border-white/5 transition-all duration-300 pointer-events-auto
        ${disabled ? 'opacity-20 cursor-not-allowed' : 'hover:scale-110 active:scale-95 hover:border-cyan-bright/50 hover:bg-white/10'}
        ${highlight ? 'text-cyan-bright border-cyan-bright/20' : 'text-white'}
      `}
        >
            {children}
        </button>
    );
}
