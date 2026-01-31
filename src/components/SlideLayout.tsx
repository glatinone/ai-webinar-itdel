
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface SlideLayoutProps {
    children: ReactNode;
    className?: string;
    showLogos?: boolean;
    logoPosition?: "top" | "bottom";
}

export function SlideLayout({ children, className = "", showLogos = false, logoPosition = "bottom" }: SlideLayoutProps) {
    return (
        <div className={`relative w-full h-screen flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden bg-navy ${className}`}>
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 cyber-grid opacity-30"></div>
                {/* Animated Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-bright/10 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-hot/10 rounded-full blur-[100px] animate-pulse-glow delay-1000"></div>
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay"></div>
            </div>

            {/* Logos (Top Position) */}
            {showLogos && logoPosition === "top" && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-6 left-8 z-50"
                >
                    <div className="flex items-center gap-6 p-2 rounded-xl bg-navy-light/30 backdrop-blur-sm border border-white/5">
                        <LogoContainer src="/Del_Institute_of_Technology_Logo.png" alt="IT Del" />
                        <div className="w-[1px] h-8 bg-white/20"></div>
                        <LogoContainer src="/id academy logo.jpg" alt="ID Academy" />
                        <div className="w-[1px] h-8 bg-white/20"></div>
                        <LogoContainer src="/pandi logo.png" alt="Pandi" />
                    </div>
                </motion.div>
            )}

            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-7xl h-full flex flex-col justify-center">
                {children}
            </div>

            {/* Logos (Bottom Position) */}
            {showLogos && logoPosition === "bottom" && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-6 left-0 right-0 z-50 flex justify-center"
                >
                    <div className="glass-card px-8 py-3 flex items-center gap-8 bg-navy-light/80 border border-white/5">
                        <LogoContainer src="/Del_Institute_of_Technology_Logo.png" alt="IT Del" />
                        <div className="w-[1px] h-8 bg-white/10"></div>
                        <LogoContainer src="/id academy logo.jpg" alt="ID Academy" />
                        <div className="w-[1px] h-8 bg-white/10"></div>
                        <LogoContainer src="/pandi logo.png" alt="Pandi" />
                    </div>
                </motion.div>
            )}
        </div>
    );
}

function LogoContainer({ src, alt }: { src: string, alt: string }) {
    return (
        <div className="relative h-12 w-32 grayscale-0 hover:grayscale-0 transition-all duration-500 opacity-100 filter drop-shadow-lg">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="128px"
            />
        </div>
    );
}
