
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SlideData } from "../../data/slides";
import { SlideLayout } from "../SlideLayout";
import {
    Instagram,
    Linkedin,
    Globe,
    ShieldCheck,
    Terminal,
    Award,
    Briefcase,
    ExternalLink,
    ChevronRight
} from "lucide-react";

export function ProfileSlide({ data }: { data: SlideData }) {
    const content = data.content;

    return (
        <SlideLayout logoPosition="top">
            <div className="flex h-full items-center justify-center p-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl relative z-10 h-full max-h-[90vh]">

                    {/* Left Column: Profile Card */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4 flex flex-col h-full"
                    >
                        <div className="glass-card p-6 h-full flex flex-col items-center text-center relative overflow-hidden group">
                            {/* Avatar Halo */}
                            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-cyan-bright/20 to-transparent"></div>

                            <div className="relative w-40 h-40 mb-4 mt-2">
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-bright/50 animate-spin-slow"></div>
                                <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
                                    <Image
                                        src={content.image}
                                        alt={content.name}
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-1">{content.name}</h2>
                            <p className="text-cyan-bright font-mono text-xs mb-4">{content.role}</p>

                            <div className="w-full h-[1px] bg-white/10 mb-4"></div>

                            <div className="flex flex-col gap-3 w-full px-4 mb-6">
                                {content.socials.map((social: any, i: number) => (
                                    <SocialLink key={i} {...social} />
                                ))}
                            </div>

                            <div className="mt-auto w-full text-left bg-navy-light/50 p-4 rounded-xl border border-white/5">
                                <h4 className="flex items-center gap-2 text-gold font-bold mb-3 text-sm uppercase tracking-wider">
                                    <ShieldCheck size={16} /> Specialization
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {content.specialization.map((spec: string, i: number) => (
                                        <span key={i} className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-300 border border-white/5">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Details */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-8 flex flex-col gap-4 h-full overflow-y-auto pr-2 custom-scrollbar"
                    >
                        {/* About Section */}
                        <div className="glass-card p-6 flex-shrink-0">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                                <Terminal className="text-purple-hot" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Professional Overview</span>
                            </h3>
                            <p className="text-base text-gray-300 leading-relaxed font-light border-l-4 border-cyan-bright pl-4">
                                "{content.tagline}"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                            {/* Experience */}
                            <div className="glass-card p-6 flex flex-col h-full">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-cyan-bright">
                                    <Briefcase size={18} /> Work Experience
                                </h3>
                                <div className="space-y-5">
                                    {content.experience.map((exp: any, i: number) => (
                                        <div key={i} className="relative pl-5 border-l border-white/10 pb-1 last:pb-0">
                                            <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-cyan-bright"></div>
                                            <h4 className="font-bold text-white text-base">{exp.company}</h4>
                                            <div className="flex flex-col mb-1">
                                                <span className="text-purple-hot font-medium text-xs">{exp.role}</span>
                                                <span className="text-[10px] text-gray-400 font-mono">{exp.year}</span>
                                            </div>
                                            <p className="text-xs text-gray-400 leading-relaxed">{exp.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="glass-card p-6 flex flex-col h-full">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gold">
                                    <Award size={18} /> Certifications
                                </h3>
                                <div className="space-y-2">
                                    {content.certifications.map((cert: string, i: number) => (
                                        <div key={i} className="flex items-start gap-3 p-2 bg-white/5 rounded-lg border border-white/5 hover:border-gold/30 transition-colors group">
                                            <div className="mt-0.5 min-w-[16px]">
                                                <ShieldCheck size={14} className="text-gray-500 group-hover:text-gold transition-colors" />
                                            </div>
                                            <span className="text-xs text-gray-200 group-hover:text-white transition-colors">{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
}

function SocialLink({ platform, url, label }: any) {
    let icon = <Globe size={16} />;
    if (platform === 'instagram') icon = <Instagram size={16} />;
    if (platform === 'linkedin') icon = <Linkedin size={16} />;

    return (
        <a
            href={`https://${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all group border border-transparent hover:border-white/10"
        >
            <div className="flex-shrink-0 text-gray-400 group-hover:text-cyan-bright transition-colors">
                {icon}
            </div>
            <span className="text-xs text-gray-300 group-hover:text-white transition-colors truncate font-mono">
                {label}
            </span>
            <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-gray-500" />
        </a>
    )
}
