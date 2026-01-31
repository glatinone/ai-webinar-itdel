
import { LucideIcon, Brain, Shield, Rocket, Users, Target, Zap, Globe, Code, ChevronRight, CheckCircle, XCircle } from "lucide-react";

export type SlideType = "intro" | "profile" | "agenda" | "quiz" | "content" | "comparison" | "stats" | "skills" | "career" | "quote" | "qr" | "closing";

export interface SlideData {
    id: number;
    type: SlideType;
    title?: string;
    subtitle?: string;
    content?: any;
}

export const slides: SlideData[] = [
    {
        id: 1,
        type: "intro",
        title: "Implementasi AI di Industri dan Bisnis Global",
        subtitle: "Studi Kasus dan Prospek Karir",
        content: {
            date: "Sabtu, 31 Januari 2026 | 10:00 WIB",
            badge: "LIVE WEBINAR SERIES",
        }
    },
    {
        id: 2,
        type: "profile",
        title: "Speaker Profile",
        content: {
            name: "Yehezkiel Tampubolon",
            role: "Security Engineer | Trainer .id Academy",
            tagline: "Dedicated Security Engineer and certified trainer with extensive experience in protecting critical infrastructure. Specializing in advanced threat intelligence, automated security operations, and practical AI implementation. Passionate about bridging the gap between complex security concepts and actionable business solutions.",
            image: "/uploaded_media_1_1769743548744.jpg",
            socials: [
                { platform: "instagram", url: "instagram.com/kiel.at", label: "@kiel.at" },
                { platform: "linkedin", url: "linkedin.com/in/kiel-tampubolon", label: "/in/kiel-tampubolon" },
                { platform: "website", url: "kielltampubolon.netlify.app", label: "kielltampubolon.netlify.app" },
            ],
            experience: [
                { role: "Trainer", company: ".id Academy by Pandi", year: "2023 - Present", desc: "Mentored 400+ students in Cybersecurity & AI certification programs." },
                { role: "Security Engineer", company: "Constellar Singapore", year: "July 2024 - Present", desc: "Handling security infrastructure, XDR/MDR deployment, and threat hunting." },
                { role: "Mentor", company: "PT Kinema Systrans", year: "2023 - 2024", desc: "Led AI implementation workshops and security awareness campaigns." }
            ],
            certifications: [
                "RHCSA - Red Hat Certified System Administrator",
                "CEHv12 - EC-Council Certified Ethical Hacker",
                "CTIA - Certified Threat Intelligence Analyst",
                "Cisco CyberOps Associate",
                "Digital Forensic Essentials"
            ],
            specialization: [
                "Cybersecurity & Threat Intel",
                "Penetration Testing (Web/Android)",
                "AI Implementation Ops",
                "System Administration (Linux)"
            ]
        }
    },
    {
        id: 3,
        type: "agenda",
        title: "Today's Journey",
        content: {
            steps: [
                "Ice Breaker Quiz",
                "AI in Global Industry",
                "Mindset Shift",
                "Real Case Studies",
                "Skills Required",
                "Career Opportunities",
                "Action Steps",
                "Q&A"
            ]
        }
    },
    {
        id: 4,
        type: "quiz",
        title: "Ice Breaker",
        content: {
            question: "Menurut kamu, AI lebih banyak...",
            options: [
                { id: "A", text: "Membantu (Creates opportunities)", correct: false },
                { id: "B", text: "Mengancam (Replaces developers)", correct: false },
                { id: "C", text: "Seimbang (Depends on usage)", correct: true },
                { id: "D", text: "Belum Tahu (Need to learn)", correct: false },
            ],
            explanation: "AI is a tool. Its impact depends entirely on how we use it to augment our capabilities."
        }
    },
    {
        id: 5,
        type: "content",
        title: "AI di Industri Global",
        content: {
            cards: [
                {
                    title: "Security & Defense",
                    icon: "Shield",
                    desc: "Pertahanan siber adaptif & deteksi fraud.",
                    examples: ["AI Threat Hunting (CrowdStrike)", "Fraud Detection Bank", "Biometric Identity (FaceID)"]
                },
                {
                    title: "Finance & Business",
                    icon: "BarChart",
                    desc: "Prediksi pasar presisi & personalisasi layanan.",
                    examples: ["Algorithmic Trading", "Credit Scoring Otomatis", "Personalized Banking"]
                },
                {
                    title: "Healthcare & Bio",
                    icon: "Stethoscope",
                    desc: "Akurasi diagnosa & penemuan obat baru.",
                    examples: ["Analisis MRI/CT Scan", "Drug Discovery (AlphaFold)", "Robot Bedah Presisi"]
                },
                {
                    title: "Creative & Media",
                    icon: "Clapperboard",
                    desc: "Generasi konten & rekomendasi hiburan.",
                    examples: ["Generative Art (Midjourney)", "Scriptwriting Assistant", "Netflix Recommendation"]
                },
                {
                    title: "Smart Industry",
                    icon: "Factory",
                    desc: "Efisiensi manufaktur & rantai pasok cerdas.",
                    examples: ["Predictive Maintenance", "Visual Quality Control", "Optimasi Gudang (Amazon)"]
                },
                {
                    title: "Education & Work",
                    icon: "GraduationCap",
                    desc: "Personalisasi belajar & produktivitas kerja.",
                    examples: ["Guru AI Personal (Duolingo)", "Auto-Grading System", "Copilot for Work"]
                },
            ]
        }
    },
    {
        id: 6,
        type: "comparison",
        title: "Mindset Shift",
        content: {
            left: { type: "negative", text: "AI = Pengganti Manusia", icon: "XCircle" },
            right: { type: "positive", text: "AI = Multiplier Manusia", icon: "CheckCircle" },
            center: "Good developers + AI = 10x impact"
        }
    },
    {
        id: 7,
        type: "stats",
        title: "Case Study 1: Security Ops",
        subtitle: "Menghadapi 1 Juta Log Serangan per Hari",
        content: {
            type: "story",
            problem: {
                title: "Cara Lama (Manual)",
                desc: "Analisa log manual mata lelah. Butuh 4 jam cuma buat cek 1 insiden. Sering miss alert penting.",
                icon: "Search"
            },
            solution: {
                title: "Cara Baru (AI Powered)",
                desc: "AI scan pola serangan otomatis. 1 insiden kelar dalam 30 detik. Engineer fokus mitigasi, bukan searching.",
                icon: "Zap"
            },
            stats: [
                { value: "99%", label: "Lebih Cepat Deteksi" },
                { value: "24/7", label: "Monitoring Tanpa Lelah" },
                { value: "0", label: "Missed Critical Alerts" },
            ],
            learning: "Coba: Copy data log simple ke AI -> 'Cari pola aneh di data ini'. (Next Level: Belajar Python Log Parsing)"
        }
    },
    {
        id: 8,
        type: "stats",
        title: "Case Study 2: Business & Marketing",
        subtitle: "Konten Kreator & Startup Speed",
        content: {
            type: "story",
            problem: {
                title: "Buntu Ide & Waktu Habis",
                desc: "Mau jualan tapi nggak bisa nulis caption. Butuh 1 minggu buat bikin jadwal konten sebulan. Burnout.",
                icon: "AlertTriangle"
            },
            solution: {
                title: "AI Brainstorming Partner",
                desc: "Minta AI: 'Buatkan 30 ide konten instagram untuk jualan keripik pedas'. Planning sebulan beres dalam 10 menit.",
                icon: "MessageSquare"
            },
            stats: [
                { value: "50+", label: "Ide dalam 5 Menit" },
                { value: "10x", label: "Lebih Produktif" },
                { value: "High", label: "Konsistensi Posting" },
            ],
            learning: "Coba: Minta AI bertindak sebagai 'Social Media Expert' dan buatkan content plan."
        }
    },
    {
        id: 9,
        type: "stats",
        title: "Case Study 3: Mahasiswa IT",
        subtitle: "Drama Skripsi & Project Error",
        content: {
            type: "story",
            problem: {
                title: "The Stuck Moment",
                desc: "Error aneh di code. StackOverflow nggak ada solusi. Dosen susah ditemui. 3 hari stuck di error yang sama.",
                icon: "AlertTriangle"
            },
            solution: {
                title: "AI Co-Pilot",
                desc: "Paste error + fungsi ke AI. 'Jelaskan LOGIKA kenapa error ini muncul dan cara fix-nya'. Paham konsep + Solusi.",
                icon: "MessageSquare"
            },
            stats: [
                { value: "10x", label: "Kecepatan Belajar" },
                { value: "1 Jam", label: "Menyelesaikan Masalah 3 Hari" },
                { value: "A", label: "Potensi Nilai Project" },
            ],
            learning: "Coba: Paste error program kalian -> 'Jelaskan seperti saya umur 5 tahun kenapa ini error'."
        }
    },
    {
        id: 10,
        type: "skills",
        title: "Skills Behind Success",
        content: {
            skills: [
                { title: "Problem Solving", desc: "Paham masalah bisnis, bukan asal coding." },
                { title: "Logical Thinking", desc: "Mecahin masalah besar jadi langkah kecil." },
                { title: "AI Adaptation", desc: "Pakai AI biar kerja lebih cepat & cerdas." },
                { title: "Adaptability", desc: "Teknologi berubah tiap hari, teruslah belajar." },
            ],
            footer: "Skill teknis bisa dipelajari. Mindset itu yang mahal."
        }
    },
    {
        id: 11,
        type: "quiz",
        title: "Tantangan Skenario",
        content: {
            question: "E-commerce dapat 10.000 ulasan/hari. CS kewalahan. Di mana AI paling tepat membantu?",
            options: [
                { id: "A", text: "AI membalas semua ulasan otomatis", correct: false },
                { id: "B", text: "AI filter keluhan urgent, Manusia menangani solusinya", correct: true },
                { id: "C", text: "AI hanya membaca, Manusia mengetik semuanya", correct: false },
                { id: "D", text: "AI menggantikan seluruh tim CS", correct: false },
            ],
            explanation: "Insight: AI hebat dalam 'Membaca & Memilah' data dalam jumlah besar (Filtering), tapi Manusia tetap dibutuhkan untuk 'Menangani' masalah yang butuh empati."
        }
    },
    {
        id: 12,
        type: "content",
        title: "Career Prospects",
        content: {
            layout: "split-list",
            left: {
                title: "Roles Growing",
                items: [
                    { role: "AI/ML Engineer (+45%)", desc: "Membangun & melatih model AI untuk solusi cerdas." },
                    { role: "Data Analyst (+38%)", desc: "Mengubah data mentah menjadi insight strategi." },
                    { role: "Security Analyst (+52%)", desc: "Melindungi sistem dari serangan siber adaptif." },
                    { role: "Business Intelligence (+33%)", desc: "Keputusan bisnis berbasis data visual real-time." },
                    { role: "Automation Specialist (+41%)", desc: "Efisiensi kerja dengan bot & script otomatis." }
                ]
            },
            right: {
                title: "Skills Required",
                items: [
                    { label: "Python/Programming", level: 5 },
                    { label: "Data Literacy", level: 5 },
                    { label: "Cloud Platforms", level: 4 },
                    { label: "Problem Solving", level: 5 },
                    { label: "Communication", level: 4 },
                ]
            }
        }
    },
    {
        id: 13,
        type: "quote",
        title: "Realitas Dunia Kerja",
        content: {
            quotes: [
                "IPK 3.8 (No Skill) < IPK 3.2 (Banyak Project)",
                "Perusahaan Cari Problem Solver, Bukan Penghafal",
                "Attitude & Komunikasi > Sekedar Jago Teknis"
            ],
            tips: [
                { title: "Mulai dari Sekarang", desc: "Jangan tunggu lulus. Eksplor teknologi di luar kampus." },
                { title: "Bangun Portfolio", desc: "Upload tugas/project ke GitHub. Tulis studi kasus." },
                { title: "Networking", desc: "Ikut komunitas, webinar, dan connect dengan praktisi." },
                { title: "Soft Skills", desc: "Komunikasi, kerja tim, dan bahasa Inggris itu krusial." }
            ],
            visual: "balance-scale"
        }
    },
    {
        id: 14,
        type: "content",
        title: "Start Your AI Journey Today",
        content: {
            layout: "steps",
            steps: [
                {
                    title: "Belajar",
                    items: [
                        { label: "YouTube", value: "Matt Wolfe, The AI Advantage, Two Minute Papers" },
                        { label: "Instagram", value: "@aiforproductivity.id, @promptfesor" },
                        { label: "Courses", value: "Coursera, DeepLearning.AI" }
                    ]
                },
                {
                    title: "Eksplor",
                    items: [
                        { label: "Coding Agent", value: "Cursor, Windsurf, GitHub Copilot" },
                        { label: "Powerful LLM", value: "Gemini 2.0 Flash, Claude 3.5 Sonnet" },
                        { label: "Generative Media", value: "Google Veo, Hailuo AI, Midjourney" }
                    ]
                },
                {
                    title: "Build",
                    desc: "Start small projects. Create a portfolio. Solve real problems around you using AI tools.",
                    items: [
                        { label: "Projects", value: "Automated Responding, CV Analyzer, Simple RAG App" },
                        { label: "Platform", value: "Vercel, Streamlit, Hugging Face Spaces" }
                    ]
                },
                {
                    title: "Share",
                    desc: "Document your learning journey.",
                    items: [
                        { label: "Platform", value: "LinkedIn, Medium, Twitter/X" },
                        { label: "Context", value: "Write specifically about 'How I built this' or 'What I learned'" }
                    ]
                },
            ],
            footer: "Challenge: Pick ONE tool and build something this week."
        }
    },
    {
        id: 15,
        type: "closing",
        title: "Thank You",
        content: {
            quote: "The best way to predict the future is to build it.",
            subtext: "AI won't replace you. Someone using AI will.",
            social: "@kiel.at",
            driveLink: "https://drive.google.com/drive/folders/1rbrS0hH4tpyLGoUpIx95j0J13I7VWdAA?usp=drive_link"
        }
    }
];
