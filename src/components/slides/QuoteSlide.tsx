"use client";

import { motion } from "framer-motion";
import { SlideData } from "../../data/slides";
import { SlideLayout } from "../SlideLayout";
import { Scale, Lightbulb } from "lucide-react";

interface QuoteSlideProps {
    data: SlideData;
}

export function QuoteSlide({ data }: QuoteSlideProps) {
    const content = data.content;
    const hasTips = content.tips && content.tips.length > 0;

    return (
        <SlideLayout className="!p-8 md:!p-16 flex flex-col items-center justify-center">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center h-full justify-center">

                {/* Dynamic Title */}
                <h2 className={`font-black text-white drop-shadow-2xl tracking-tighter uppercase relative text-center
                    ${hasTips ? "text-4xl md:text-5xl mb-12" : "text-6xl md:text-8xl mb-20"}
                `}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
                        {data.title || "REAL TALK"}
                    </span>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        className="absolute -bottom-2 md:-bottom-4 left-0 h-2 md:h-4 bg-red-600 skew-x-12 opacity-50"
                    ></motion.div>
                </h2>

                {hasTips ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full items-start">
                        {/* LEFT: Reality Check (Quotes) */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl md:text-2xl font-bold text-white/80 mb-2 border-b border-white/10 pb-2">
                                Reality Check
                            </h3>
                            {content.quotes.map((quote: string, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.2 }}
                                    className={`p-6 rounded-2xl border-l-4 shadow-lg backdrop-blur-sm bg-navy-800/80
                                        ${idx === 0 ? "border-red-500" : "border-amber-500"}
                                    `}
                                >
                                    <p className="text-lg md:text-xl font-medium text-white/90">
                                        "{quote}"
                                    </p>
                                </motion.div>
                            ))}
                            {/* Visual Icon for Balance */}
                            <div className="flex justify-center mt-4 text-white/10">
                                <Scale size={80} />
                            </div>
                        </div>

                        {/* RIGHT: Tips & Tricks */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl md:text-2xl font-bold text-cyan-bright mb-2 border-b border-white/10 pb-2 flex items-center gap-3">
                                <Lightbulb className="text-yellow-400" />
                                Student Survival Kit
                            </h3>
                            <div className="space-y-4">
                                {content.tips.map((tip: any, idx: number) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 + (idx * 0.1) }}
                                        className="group relative pl-6 border-l border-white/20 hover:border-cyan-bright transition-colors"
                                    >
                                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-navy-lighter border border-white/40 group-hover:bg-cyan-bright group-hover:border-cyan-bright transition-all" />
                                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-bright transition-colors">
                                            {tip.title}
                                        </h4>
                                        <p className="text-sm text-gray-400 leading-relaxed mt-1">
                                            {tip.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Original Center Layout for Quotes Only */
                    <div className="flex flex-col gap-12 w-full max-w-4xl relative">
                        {content.quotes.map((quote: string, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ scale: 0.8, opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                                animate={{ scale: 1, opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.5, type: "spring" }}
                                className={`p-8 md:p-10 rounded-3xl border-l-8 shadow-2xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group 
                                    ${idx === 0 ? "bg-navy-800/80 border-red-500" :
                                        idx === 1 ? "bg-navy-800/80 border-blue-500" :
                                            "bg-navy-800/80 border-green-500"
                                    }`}
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Scale size={100} />
                                </div>
                                <p className={`text-2xl md:text-3xl font-bold ${idx === 0 ? "text-red-200" : idx === 1 ? "text-blue-200" : "text-green-200"
                                    }`}>
                                    "{quote}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                )}

            </div>
        </SlideLayout>
    );
}
