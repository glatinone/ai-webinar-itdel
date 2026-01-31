
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: "#0A192F",
                    light: "#112240",
                    lighter: "#233554",
                },
                cyan: {
                    bright: "#64FFDA", // A richer, premium teal/cyan
                    glow: "#00D9FF",
                },
                blue: {
                    deep: "#1E3A8A",
                },
                purple: {
                    hot: "#BD34FE", // More neon purple
                },
                gold: {
                    DEFAULT: "#FFD700",
                }
            },
            fontFamily: {
                heading: ["var(--font-poppins)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
                mono: ["monospace"],
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "pulse-glow": "pulse-glow 3s ease-in-out infinite",
                "spin-slow": "spin 20s linear infinite",
                "shimmer": "shimmer 2s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.5" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "0% 0%" },
                    "100%": { backgroundPosition: "-200% 0%" },
                }
            },
            backgroundImage: {
                "gradient-luxury": "linear-gradient(to right, #64FFDA, #BD34FE)",
                "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
            }
        },
    },
    plugins: [],
};
export default config;
