"use client";

import { motion } from "framer-motion";
import { SlideData } from "../../data/slides";
import { SlideLayout } from "../SlideLayout";
import { Search, Zap, AlertTriangle, MessageSquare, ArrowRight } from "lucide-react";

interface StatsSlideProps {
    data: SlideData;
}

export function StatsSlide({ data }: StatsSlideProps) {
    const content = data.content;
    const isStory = content.type === "story";

    return (
        <SlideLayout className="!p-8 md:!p-12 flex items-center justify-center">
            <div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-center">

                {/* Header */}
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight uppercase"
                    >
                        {data.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-cyan-bright font-light"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                {isStory ? (
                    /* Story Layout: Before vs After */
                    <div className="flex flex-col gap-10">
                        {/* Comparison Region */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 relative">

                            {/* Problem Card (Left) */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="group relative p-8 rounded-3xl bg-red-900/10 border border-red-500/30 hover:bg-red-900/20 transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-red-500">
                                    {content.problem.icon === "Search" && <Search size={100} />}
                                    {content.problem.icon === "AlertTriangle" && <AlertTriangle size={100} />}
                                </div>

                                <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 border border-red-500/20">
                                    Before AI
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10">
                                    {content.problem.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed relative z-10">
                                    {content.problem.desc}
                                </p>
                            </motion.div>

                            {/* Arrow Indicator (Center) */}
                            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                <div className="bg-navy-lighter p-2 rounded-full border border-white/10 shadow-xl">
                                    <ArrowRight className="text-white" size={24} />
                                </div>
                            </div>

                            {/* Solution Card (Right) */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="group relative p-8 rounded-3xl bg-green-900/10 border border-green-500/30 hover:bg-green-900/20 transition-all duration-300"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-green-500">
                                    {content.solution.icon === "Zap" && <Zap size={100} />}
                                    {content.solution.icon === "MessageSquare" && <MessageSquare size={100} />}
                                </div>

                                <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-4 border border-green-500/20">
                                    With AI
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 relative z-10">
                                    {content.solution.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed relative z-10">
                                    {content.solution.desc}
                                </p>
                            </motion.div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {content.stats.map((stat: any, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 + (idx * 0.1) }}
                                    className="p-4 md:p-6 bg-white/5 rounded-2xl text-center border border-white/5 hover:border-cyan-bright/30 transition-colors"
                                >
                                    <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-public mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Learning Action Item */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="text-center"
                        >
                            <span className="inline-block border-b border-dashed border-gray-500 pb-1 text-gray-400 font-mono text-sm">
                                {content.learning}
                            </span>
                        </motion.div>

                    </div>
                ) : (
                    /* Fallback to simple stats grid if needed (though we migrated data) */
                    <div className="text-center text-red-500">Data format update needed for this slide.</div>
                )}
            </div>
        </SlideLayout>
    );
}
