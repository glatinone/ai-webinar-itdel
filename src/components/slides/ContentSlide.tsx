
"use client";

import { motion } from "framer-motion";
import { SlideData } from "../../data/slides";
import { SlideLayout } from "../SlideLayout";
import { Shield, Settings, BarChart, CheckCircle2, Stethoscope, Clapperboard, Factory, GraduationCap, Zap } from "lucide-react";

interface ContentSlideProps {
    data: SlideData;
}

export function ContentSlide({ data }: ContentSlideProps) {
    const content = data.content;

    const isDense = content.cards && content.cards.length > 3;

    return (
        <SlideLayout logoPosition="bottom">
            <div className="flex flex-col items-center justify-center p-4 h-full w-full">
                {data.title && (
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`${isDense ? 'text-3xl md:text-3xl mb-6' : 'text-4xl md:text-5xl mb-8 md:mb-12'} font-black text-center text-white tracking-tight`}
                    >
                        {data.title}
                    </motion.h2>
                )}

                {/* 3 Pillars Layout - CARDS */}
                {content.cards && (
                    <div className={`grid grid-cols-1 md:grid-cols-3 ${isDense ? 'gap-4 max-w-[95vw]' : 'gap-6 max-w-7xl'} w-full`}>
                        {content.cards.map((card: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`glass-card ${isDense ? 'p-4 rounded-xl' : 'p-6 md:p-8 rounded-3xl'} hover:bg-white/5 transition-all duration-300 group flex flex-col h-full border-white/5`}
                            >
                                <div className={`${isDense ? 'w-10 h-10 mb-3 rounded-lg' : 'w-14 h-14 mb-4 rounded-2xl'} bg-navy-lighter flex items-center justify-center shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                                    {/* Icon Mapping */}
                                    {card.icon === "Shield" && <Shield size={isDense ? 20 : 28} className="text-cyan-bright" />}
                                    {card.icon === "Settings" && <Settings size={isDense ? 20 : 28} className="text-purple-hot" />}
                                    {card.icon === "BarChart" && <BarChart size={isDense ? 20 : 28} className="text-gold" />}
                                    {card.icon === "Stethoscope" && <Stethoscope size={isDense ? 20 : 28} className="text-red-400" />}
                                    {card.icon === "Clapperboard" && <Clapperboard size={isDense ? 20 : 28} className="text-pink-500" />}
                                    {card.icon === "Factory" && <Factory size={isDense ? 20 : 28} className="text-orange-400" />}
                                    {card.icon === "GraduationCap" && <GraduationCap size={isDense ? 20 : 28} className="text-green-400" />}
                                    {card.icon === "Zap" && <Zap size={isDense ? 20 : 28} className="text-yellow-400" />}
                                </div>

                                <h3 className={`${isDense ? 'text-lg mb-2' : 'text-2xl mb-3'} font-bold text-white group-hover:text-cyan-bright transition-colors`}>{card.title}</h3>
                                <p className={`${isDense ? 'text-sm mb-3 leading-snug' : 'mb-6 font-light leading-relaxed'} text-gray-300`}>{card.desc}</p>

                                {/* Examples List */}
                                {card.examples && (
                                    <div className={`mt-auto ${isDense ? 'pt-2' : 'pt-4'} border-t border-white/10`}>
                                        <ul className={`space-y-1`}>
                                            {card.examples.map((ex: string, i: number) => (
                                                <li key={i} className={`flex items-start gap-2 ${isDense ? 'text-xs' : 'text-sm'} text-gray-400`}>
                                                    <CheckCircle2 size={isDense ? 12 : 14} className="mt-0.5 text-cyan-bright/70 flex-shrink-0" />
                                                    <span>{ex}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Career Split List Layout (Previous code kept for compatibility) */}
                {content.layout === "split-list" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="glass-card p-8 rounded-3xl"
                        >
                            <h3 className="text-3xl font-bold text-cyan-bright mb-6 border-b border-white/10 pb-4">{content.left.title}</h3>
                            <ul className="space-y-4">
                                {content.left.items.map((item: any, idx: number) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-4 text-gray-200"
                                    >
                                        <span className="w-2 h-2 mt-2.5 bg-purple-hot rounded-full animate-pulse flex-shrink-0"></span>
                                        <div className="flex flex-col">
                                            <span className="text-xl font-bold text-white">{item.role || item}</span>
                                            {item.desc && (
                                                <span className="text-sm text-gray-400 mt-1 leading-snug">
                                                    {item.desc}
                                                </span>
                                            )}
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="glass-card p-8 rounded-3xl"
                        >
                            <h3 className="text-3xl font-bold text-purple-hot mb-6 border-b border-white/10 pb-4">{content.right.title}</h3>
                            <div className="space-y-6">
                                {content.right.items.map((skill: any, idx: number) => (
                                    <div key={idx} className="relative">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-lg font-medium text-gray-300">{skill.label}</span>
                                        </div>
                                        <div className="h-2 w-full bg-navy-lighter rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + idx * 0.1, duration: 1 }}
                                                className="h-full bg-gradient-to-r from-purple-hot to-cyan-bright"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Steps Layout (Previous code kept) */}
                {content.layout === "steps" && (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl">
                        {content.steps.map((step: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="glass-card p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="text-6xl font-black text-white/5 mb-4 absolute right-4 top-4 group-hover:text-cyan-bright/10 transition-colors">0{idx + 1}</div>
                                <h3 className="text-xl font-bold text-cyan-bright mb-2 mt-8 relative z-10">{step.title}</h3>
                                {step.items ? (
                                    <ul className="space-y-3 mt-4 relative z-10">
                                        {step.items.map((item: any, i: number) => (
                                            <li key={i} className="text-sm text-gray-300">
                                                <strong className="text-cyan-bright/80 block text-[10px] uppercase tracking-wider mb-0.5">{item.label}</strong>
                                                <span className="leading-tight block">{item.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm text-gray-400 relative z-10">{step.desc}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </SlideLayout>
    );
}
