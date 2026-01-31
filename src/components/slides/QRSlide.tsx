
"use client";

import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import { SlideData } from "../../data/slides";
import { SlideLayout } from "../SlideLayout";
import { Link, Download, Users, Briefcase, Zap } from "lucide-react";

interface QRSlideProps {
    data: SlideData;
}

export function QRSlide({ data }: QRSlideProps) {
    const content = data.content;
    const icons = [Link, Zap, Briefcase, Users];

    return (
        <SlideLayout className="!p-8 md:!p-16 flex items-center justify-center">
            <div className="w-full h-full max-w-7xl flex flex-col items-center justify-center relative">
                <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">
                    {data.title}
                </h2>

                <div className="relative">
                    {/* Center QR Code */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, bounce: 0.5 }}
                        className="bg-white p-4 rounded-3xl shadow-[0_0_100px_rgba(6,182,212,0.5)] z-20 relative"
                    >
                        <QRCode value={content.link} size={256} />
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-cyan-400 font-mono animate-pulse">
                            Scan for Materials
                        </div>
                    </motion.div>

                    {/* Orbiting Quadrants */}
                    {content.quadrants.map((item: string, idx: number) => {
                        const Icon = icons[idx % icons.length];
                        // Calculations for positioning around the center
                        const angle = (idx * 90) * (Math.PI / 180);
                        const radius = 280; // Adjust for spacing

                        // We use Framer Motion variants to animate them in from center
                        const variants = {
                            hidden: { x: 0, y: 0, opacity: 0, scale: 0 },
                            visible: {
                                x: Math.cos(angle - Math.PI / 4) * radius,  // Offset slightly for visual balance (optional)
                                y: Math.sin(angle - Math.PI / 4) * radius,
                                opacity: 1,
                                scale: 1
                            }
                        };

                        // Simplified static positioning for responsiveness - actually just grid for mobile, absolute for desktop
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + idx * 0.2 }}
                                className={`absolute hidden md:flex flex-col items-center justify-center w-48 h-48 bg-navy-800/80 backdrop-blur border border-white/10 rounded-full shadow-lg hover:scale-110 hover:bg-cyan-900/50 transition-all duration-300 z-10`}
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: `translate(-50%, -50%) translate(${Math.cos((idx * 90 - 45) * Math.PI / 180) * 300}px, ${Math.sin((idx * 90 - 45) * Math.PI / 180) * 300}px)`
                                }}
                            >
                                <Icon size={32} className="text-cyan-400 mb-2" />
                                <span className="text-center font-bold text-white px-4">{item}</span>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile View List */}
                <div className="mt-20 grid grid-cols-2 gap-4 md:hidden w-full">
                    {content.quadrants.map((item: string, idx: number) => (
                        <div key={idx} className="bg-navy-800/50 p-4 rounded-xl text-center border border-white/5 text-sm">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
}
