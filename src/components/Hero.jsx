import ScrollReveal from "./ui/ScrollReveal";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import {
    Code2, Zap, FileText, Sparkles,
    FileCode, Globe, Braces, GitBranch, Palette,
    Layout, Server, TestTube, FileJson, Mail, Database
} from "lucide-react";
import { navLinks } from "../components/constants";
// Floating widget data for tech skills - positioned on edges to avoid center content
const floatingWidgets = [
    // Left side widgets
    { label: "HTML & CSS", icon: FileCode, color: "orange", delay: 0, position: "top-24 left-8 lg:left-20" },
    { label: "JavaScript", icon: Braces, color: "yellow", delay: 0.5, position: "top-52 left-12 lg:left-28" },
    { label: "TypeScript", icon: Code2, color: "blue", delay: 1, position: "top-80 left-4 lg:left-16" },
    { label: "Git & GitHub", icon: GitBranch, color: "purple", delay: 1.5, position: "bottom-40 left-8 lg:left-24" },
    { label: "Vue 3", icon: Globe, color: "green", delay: 2, position: "bottom-20 left-16 lg:left-32" },
    { label: "Tailwind CSS", icon: Palette, color: "cyan", delay: 0.3, position: "bottom-64 left-4 lg:left-12" },
    // Right side widgets
    { label: "Bootstrap", icon: Layout, color: "violet", delay: 0.8, position: "top-28 right-8 lg:right-20" },
    { label: "ASP.NET Core", icon: Server, color: "indigo", delay: 1.2, position: "top-60 right-12 lg:right-28" },
    { label: "React", icon: Zap, color: "orange", delay: 1.8, position: "top-[22rem] right-4 lg:right-16" },
    { label: "Software Testing", icon: TestTube, color: "emerald", delay: 2.2, position: "bottom-36 right-8 lg:right-24" },
    { label: "Swagger", icon: FileJson, color: "lime", delay: 0.7, position: "bottom-16 right-16 lg:right-32" },
    { label: "Postman", icon: Mail, color: "orange", delay: 1.4, position: "bottom-60 right-4 lg:right-12" },
];

const navProjeler = navLinks.find(link => link.name === "Projeler")?.href || "#projeler";
const colorClasses = {
    orange: "bg-orange-100 text-orange-600 border-orange-200/50",
    yellow: "bg-yellow-100 text-yellow-600 border-yellow-200/50",
    blue: "bg-blue-100 text-blue-600 border-blue-200/50",
    purple: "bg-purple-100 text-purple-600 border-purple-200/50",
    green: "bg-green-100 text-green-600 border-green-200/50",
    cyan: "bg-cyan-100 text-cyan-600 border-cyan-200/50",
    violet: "bg-violet-100 text-violet-600 border-violet-200/50",
    indigo: "bg-indigo-100 text-indigo-600 border-indigo-200/50",
    emerald: "bg-emerald-100 text-emerald-600 border-emerald-200/50",
    lime: "bg-lime-100 text-lime-600 border-lime-200/50",
};

const Hero = () => {
    const { scrollY } = useScroll(); // Using Framer Motion's useScroll
    const y = useTransform(scrollY, [0, 500], [0, 150]); // Move down slower than scroll
    const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Fade out on scroll
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]); // Scale down slightly

    return (
        <section id="hakkımda" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4" style={{ paddingTop: '10rem', paddingBottom: '5rem' }}>

            {/* Floating Tech Widgets */}
            {floatingWidgets.map((widget, index) => (
                <Motion.div
                    key={widget.label}
                    animate={{
                        y: [0, index % 2 === 0 ? -15 : 15, 0],
                        rotate: [0, index % 3 === 0 ? 5 : -3, 0],
                        scale: [1, 1.02, 1]
                    }}
                    transition={{
                        duration: 5 + (index % 3),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: widget.delay
                    }}
                    className={`absolute ${widget.position} z-0 hidden lg:block`}
                >
                    <div
                        className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-glass border ${colorClasses[widget.color]?.split(' ')[2] || 'border-stone-200/50'} hover:shadow-warm transition-all duration-300 hover:scale-110`}
                        style={{ paddingLeft: '1.25rem', paddingRight: '1.25rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl ${colorClasses[widget.color]?.split(' ').slice(0, 2).join(' ') || 'bg-stone-100 text-stone-600'} shrink-0`}>
                                <widget.icon size={16} />
                            </div>
                            <span className="text-xs font-semibold text-dark whitespace-nowrap">{widget.label}</span>
                        </div>
                    </div>
                </Motion.div>
            ))}

            {/* Main Content with Parallax */}
            <Motion.div
                style={{ y, opacity, scale }}
                className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="flex flex-col items-center text-center">
                    <ScrollReveal direction="down">
                        <span className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-orange-50 to-amber-50 border border-orange-200/50 text-sm text-warm font-medium mb-6 backdrop-blur-sm shadow-sm" style={{ paddingLeft: '1.75rem', paddingRight: '1.75rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}>
                            <Sparkles className="text-primary shrink-0" size={16} />
                            <span>Merhaba, ben Batuhan Varlık</span>
                        </span>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight px-4">
                            <span className="text-dark block mb-2">
                                Frontend Developer
                            </span>
                            <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block">
                                Modern Web Arayüzleri Geliştiriyorum
                            </span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="max-w-2xl mx-auto mb-8 px-4">
                            <p className="text-warm/90 text-sm sm:text-base md:text-lg leading-relaxed mb-3">
                                React ve Vue 3 teknolojilerinde uzmanlaşmış, kullanıcı deneyimi odaklı
                                çözümler üreten bir yazılım geliştiriciyim.
                            </p>
                            <p className="text-warm/80 text-xs sm:text-sm md:text-base leading-relaxed">
                                Performans optimizasyonu, temiz kod yapısı ve modern tasarım prensipleriyle
                                ölçeklenebilir web uygulamaları geliştiriyorum.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6} direction="up">
                        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4">
                            <button className="group rounded-2xl bg-linear-to-r from-primary to-secondary text-white font-semibold transition-all duration-300 shadow-glow hover:shadow-xl hover:scale-105 hover:-translate-y-1" style={{ paddingLeft: '3rem', paddingRight: '3rem', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                <span className="flex items-center justify-center gap-3 text-sm sm:text-base">
                                    <a href={navProjeler}>Projelerime Git</a>
                                    <FileText size={16} className="group-hover:rotate-12 transition-transform shrink-0" />
                                </span>
                            </button>
                            <a
                                href="/batuhan-varlik-cv.pdf"
                                download="Batuhan Varlik CV.pdf"
                                className="rounded-2xl bg-white/80 backdrop-blur-md border border-stone-200 text-dark font-semibold hover:bg-white hover:shadow-warm transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base inline-block"
                                style={{ paddingLeft: '3rem', paddingRight: '3rem', paddingTop: '1rem', paddingBottom: '1rem' }}
                            >
                                CV İndir
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </Motion.div>
        </section>
    );
};

export default Hero;