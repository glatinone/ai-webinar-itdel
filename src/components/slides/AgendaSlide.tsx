
"use client";

import { motion } from "framer-motion";
import { SlideData } from "../../data/slides";
import { SlideLayout } from "../SlideLayout";

interface AgendaSlideProps {
    data: SlideData;
}

export function AgendaSlide({ data }: AgendaSlideProps) {
    const content = data.content;

    return (
        <SlideLayout className="!p-8 md:!p-16 flex items-center justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-6xl font-black text-center mb-16 relative z-10 text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                >
                    {data.title}
                </motion.h2>

                <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Connecting Line (pseudo) */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent -translate-y-1/2 z-0 hidden md:block"></div>

                    {content.steps.map((step: string, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            className="relative z-10 flex flex-col items-center group cursor-pointer"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-navy-900 border-4 border-cyan-500 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:bg-cyan-900 group-hover:scale-110 transition-all duration-300">
                                <span className="text-2xl md:text-3xl font-bold text-white">{index + 1}</span>
                            </div>
                            <div className="text-center bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 w-full hover:bg-white/10 transition-colors">
                                <p className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-cyan-400">{step}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}
