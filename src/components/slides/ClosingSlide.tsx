"use client";

import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import { SlideData } from "../../data/slides";
import { SlideLayout } from "../SlideLayout";
import { MessageCircle, Heart, Download, Linkedin, Instagram } from "lucide-react";

interface ClosingSlideProps {
    data: SlideData;
}

export function ClosingSlide({ data }: ClosingSlideProps) {
    const content = data.content;

    return (
        <SlideLayout className="!p-8 md:!p-16 flex items-center justify-center">
            <div className="w-full max-w-7xl mx-auto flex flex-col h-full justify-between items-center py-4">

                {/* 1. Header Section (Top) */}
                <div className="flex flex-col items-center text-center space-y-6">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                        <Heart size={64} className="text-red-500 fill-red-500/20 animate-pulse" />
                    </motion.div>

                    <div className="space-y-4 max-w-4xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 tracking-tight leading-tight"
                        >
                            "{content.quote}"
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl md:text-2xl text-gray-400 font-light"
                        >
                            {content.subtext}
                        </motion.p>
                    </div>
                </div>

                {/* 2. Main Interactions (Bottom) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-12 px-6">

                    {/* Left Card: Materials (Clean & Focused) */}
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="glass-card p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 border-white/10 hover:border-cyan-bright/30 transition-colors group bg-navy-800/40"
                    >
                        <div className="bg-white p-3 rounded-2xl shadow-lg shrink-0 group-hover:scale-105 transition-transform duration-500">
                            <QRCode
                                value={content.driveLink || ""}
                                size={140}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                viewBox={`0 0 256 256`}
                            />
                        </div>
                        <div className="flex flex-col text-center md:text-left gap-2">
                            <div className="flex items-center justify-center md:justify-start gap-3 text-cyan-bright mb-1">
                                <Download size={24} />
                                <span className="font-bold tracking-wider text-sm uppercase">Free Resources</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white leading-none">Download Materi</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Dapatkan slide presentasi & link tools yang dibahas hari ini.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Card: Q&A & Connect (Actionable) */}
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="glass-card p-8 rounded-3xl flex flex-col justify-between border-white/10 hover:border-purple-hot/30 transition-colors bg-navy-800/40 space-y-6"
                    >
                        {/* Live Session Status */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-hot animate-pulse-slow">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Live Q&A Session</h3>
                                <p className="text-sm text-purple-300">Open Mic & Chat Zoom</p>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="w-full h-[1px] bg-white/5" />

                        {/* Personal Connect Info */}
                        <div className="space-y-3">
                            <p className="text-gray-400 text-sm">Punya pertanyaan lanjutan? DM saya:</p>
                            <div className="flex flex-col gap-3">
                                <a href="https://instagram.com/kiel.at" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/link cursor-pointer">
                                    <Instagram size={20} className="text-pink-500 group-hover/link:scale-110 transition-transform" />
                                    <span className="text-white font-medium">@kiel.at</span>
                                </a>
                                <a href="https://linkedin.com/in/kiel-tampubolon" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/link cursor-pointer">
                                    <Linkedin size={20} className="text-blue-400 group-hover/link:scale-110 transition-transform" />
                                    <span className="text-white font-medium">Kiel Tampubolon</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </SlideLayout>
    );
}
