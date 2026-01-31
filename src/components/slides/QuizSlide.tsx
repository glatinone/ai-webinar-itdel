
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { SlideData } from "../../data/slides";
import { SlideLayout } from "../SlideLayout";
import { CircleCheckBig, CircleX, HelpCircle } from "lucide-react";

interface QuizSlideProps {
    data: SlideData;
}

export function QuizSlide({ data }: QuizSlideProps) {
    const { question, options, explanation } = data.content;
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleOptionClick = (optionId: string, isCorrect: boolean) => {
        if (selectedOption) return; // Prevent multiple clicks

        setSelectedOption(optionId);
        if (isCorrect) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#06B6D4', '#A855F7', '#F59E0B']
            });
        }
        setTimeout(() => setShowExplanation(true), 1000);
    };

    return (
        <SlideLayout className="!p-8 md:!p-16 flex flex-col justify-center items-center">
            <div className="w-full max-w-4xl mx-auto text-center">

                {/* Question Card */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-navy-800/80 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-6 md:p-10 mb-8 md:mb-12 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                >
                    <div className="flex justify-center mb-4 md:mb-6">
                        <div className="bg-cyan-900/40 p-3 md:p-4 rounded-full animate-bounce">
                            <HelpCircle size={40} className="text-cyan-400" />
                        </div>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200 leading-snug">
                        {question}
                    </h2>
                </motion.div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {options.map((option: any, index: number) => {
                        const isSelected = selectedOption === option.id;
                        const isCorrect = option.correct;
                        let cardClass = "bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/50";

                        if (selectedOption) {
                            if (isSelected && isCorrect) cardClass = "bg-green-500/20 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]";
                            else if (isSelected && !isCorrect) cardClass = "bg-red-500/20 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]";
                            else if (isCorrect) cardClass = "bg-green-500/10 border-green-500/50 opacity-60"; // Show correct answer if wrong selected
                            else cardClass = "opacity-40";
                        }

                        return (
                            <motion.button
                                key={option.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                disabled={!!selectedOption}
                                onClick={() => handleOptionClick(option.id, option.correct)}
                                className={`relative p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 transform text-left group flex items-center gap-4 ${cardClass}`}
                            >
                                <span className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-base md:text-lg border ${selectedOption && isSelected ? (isCorrect ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white') : 'bg-navy-900 border-gray-600 text-gray-400 group-hover:border-cyan-400 group-hover:text-cyan-400'}`}>
                                    {option.id}
                                </span>
                                <span className="text-lg md:text-xl font-medium text-gray-100 leading-snug">{option.text}</span>

                                {selectedOption == option.id && (
                                    <div className="ml-auto">
                                        {isCorrect ? <CircleCheckBig className="text-green-400 w-6 h-6 md:w-8 md:h-8" /> : <CircleX className="text-red-400 w-6 h-6 md:w-8 md:h-8" />}
                                    </div>
                                )}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Explanation Reveal */}
                <AnimatePresence>
                    {showExplanation && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-8 overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-blue-900/80 to-purple-900/80 p-6 rounded-2xl border-l-4 border-cyan-400 shadow-lg text-left">
                                <h4 className="text-cyan-300 font-bold text-lg mb-2 uppercase tracking-wider flex items-center gap-2">
                                    <Sparkles size={18} /> Insight
                                </h4>
                                <p className="text-xl text-white leading-relaxed">
                                    {explanation}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </SlideLayout>
    );
}

function Sparkles({ size }: { size: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
    )
}
