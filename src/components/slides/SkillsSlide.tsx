
"use client";

import { motion } from "framer-motion";
import { SlideData } from "../../data/slides";
import { SlideLayout } from "../SlideLayout";
import { Brain, Puzzle, Sparkles, RefreshCw } from "lucide-react";

interface SkillsSlideProps {
    data: SlideData;
}

export function SkillsSlide({ data }: SkillsSlideProps) {
    const content = data.content;

    const icons = [Puzzle, Brain, Sparkles, RefreshCw];

    return (
        <SlideLayout className="!p-8 md:!p-16 flex items-center justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-5xl md:text-7xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 pb-4">
                    {data.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {content.skills.map((skill: any, idx: number) => {
                        const Icon = icons[idx % icons.length];
                        return (
                            <motion.div
                                key={idx}
                                initial={{ rotateY: 90, opacity: 0 }}
                                animate={{ rotateY: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.2, type: "spring" }}
                                className="bg-navy-800/60 border border-white/5 p-8 rounded-3xl hover:bg-white/5 hover:scale-105 transition-all duration-300 group flex flex-col items-center text-center h-full"
                            >
                                <div className="bg-gradient-to-br from-cyan-500 to-purple-600 p-5 rounded-2xl mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                                    <Icon size={40} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-100 mb-4">{skill.title}</h3>
                                <p className="text-gray-400 text-lg">{skill.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block px-8 py-4 bg-white/5 rounded-full border border-cyan-500/30 text-cyan-300 text-xl font-mono">
                        {content.footer}
                    </div>
                </motion.div>
            </div>
        </SlideLayout>
    );
}
