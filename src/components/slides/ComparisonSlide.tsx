
"use client";

import { motion } from "framer-motion";
import { SlideData } from "../../data/slides";
import { SlideLayout } from "../SlideLayout";
import { XCircle, CheckCircle, Zap } from "lucide-react";

interface ComparisonSlideProps {
    data: SlideData;
}

export function ComparisonSlide({ data }: ComparisonSlideProps) {
    const content = data.content;

    return (
        <SlideLayout className="!p-0 relative overflow-hidden">
            <div className="absolute inset-0 flex flex-col md:flex-row">
                {/* Left Side (Old Mindset) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-navy to-red-950/30 p-12 text-center relative border-b md:border-b-0 md:border-r border-white/5"
                >
                    <div className="absolute top-8 left-8 text-white/20 font-black text-6xl md:text-8xl select-none z-0">
                        MYTH
                    </div>

                    <div className="z-10 relative">
                        <div className="mb-8 p-6 bg-red-500/10 rounded-full inline-block backdrop-blur-sm border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                            <XCircle size={64} className="text-red-500" />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-400 mb-4 line-through decoration-red-500/50 decoration-4">
                            {content.left.text}
                        </h3>
                        <p className="text-lg text-red-300/50 font-mono tracking-widest uppercase">
                            {content.left.subtext || "The Fear"}
                        </p>
                    </div>
                </motion.div>

                {/* Right Side (New Mindset) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1 flex flex-col items-center justify-center bg-gradient-to-bl from-navy to-cyan-950/30 p-12 text-center relative"
                >
                    <div className="absolute top-8 right-8 text-white/20 font-black text-6xl md:text-8xl select-none z-0">
                        FACT
                    </div>

                    <div className="z-10 relative">
                        <div className="mb-8 p-6 bg-cyan-500/10 rounded-full inline-block backdrop-blur-sm border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                            <CheckCircle size={64} className="text-cyan-bright" />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            AI <span className="text-cyan-bright">=</span> Multiplier
                        </h3>
                        <p className="text-lg text-cyan-bright/50 font-mono tracking-widest uppercase">
                            {content.right.subtext || "The Reality"}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Conclusion (The Formula) */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-16 md:bottom-24 left-0 right-0 z-30 flex justify-center px-4"
            >
                <div className="glass-card bg-navy-light/90 border border-gold/30 px-8 md:px-12 py-6 rounded-2xl shadow-[0_0_50px_rgba(255,215,0,0.15)] flex items-center gap-6 relative overflow-hidden group">
                    {/* Glowing effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

                    <div className="p-3 bg-gold/10 rounded-lg text-gold border border-gold/20">
                        <Zap size={28} fill="currentColor" />
                    </div>

                    <div className="text-xl md:text-3xl font-bold text-white">
                        <span className="text-gray-400 font-light">Human</span> + <span className="text-cyan-bright">AI</span> = <span className="text-gold text-2xl md:text-4xl">10x Impact</span>
                    </div>
                </div>
            </motion.div>
        </SlideLayout>
    );
}
