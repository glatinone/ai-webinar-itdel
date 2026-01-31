
"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import Image from "next/image";
import { SlideData } from "../../data/slides";
import { SlideLayout } from "../SlideLayout";
import { Calendar, Clock, User, Mic2 } from "lucide-react";

export function IntroSlide({ data }: { data: SlideData }) {
    const content = data.content;

    useEffect(() => {
        // Elegant explosion on start
        const duration = 2 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ["#64FFDA", "#BD34FE"]
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ["#64FFDA", "#BD34FE"]
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }, []);

    return (
        <SlideLayout showLogos={true} logoPosition="top">
            <div className="flex flex-col lg:flex-row items-center justify-between h-full w-full gap-8 px-4 lg:px-0">

                {/* Left Side: Text Information */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1 text-left z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="inline-block px-4 py-1 rounded-full border border-cyan-bright/50 bg-cyan-bright/10 text-cyan-bright font-mono text-sm mb-6"
                    >
                        🔴 {content.badge}
                    </motion.div>

                    <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-xl">
                        Implementasi AI <br />
                        <span className="text-luxury-gradient">di Industri Global</span>
                    </h1>

                    <p className="text-xl lg:text-2xl text-gray-300 font-light mb-8 max-w-xl">
                        {data.subtitle}
                    </p>

                    {/* Event Details Box */}
                    <div className="bg-navy-light/60 backdrop-blur border border-white/10 rounded-2xl p-6 space-y-4 max-w-md">
                        <div className="flex items-center gap-3 text-white">
                            <Calendar className="text-purple-hot" />
                            <span className="font-semibold">{content.date.split('|')[0]}</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                            <Clock className="text-cyan-bright" />
                            <span className="font-semibold">10:00 WIB - Selesai</span>
                        </div>
                        <div className="h-[1px] bg-white/10 my-2"></div>
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-1 bg-white/10 rounded-full">
                                <User size={16} />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">Speaker</div>
                                <div className="font-bold text-lg">Yehezkiel Tampubolon</div>
                                <div className="text-sm text-cyan-bright">Security Engineer & Trainer</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Flyer Poster */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center lg:justify-end relative z-10"
                >
                    <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-xl overflow-hidden glass-card neon-border group shadow-[0_0_50px_rgba(100,255,218,0.2)]">
                        <Image
                            src="/webinar-flyer.png"
                            alt="Webinar Flyer"
                            fill
                            className="object-contain bg-black/20"
                            priority
                        />
                    </div>

                    {/* Decimal decoration behind */}
                    <div className="absolute top-[-20px] right-[-20px] text-[120px] font-black text-white/[0.03] -z-10 leading-none">
                        01
                    </div>
                </motion.div>
            </div>
        </SlideLayout>
    );
}
