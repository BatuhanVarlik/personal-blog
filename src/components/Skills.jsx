import ScrollReveal from "./ui/ScrollReveal";
import {
    Code2,
    Database,
    GitBranch,
    Globe,
    Sparkles,
    Layers,
    Zap
} from "lucide-react";

const Skills = () => {
    return (
        <section id="yetenekler" className="relative" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Başlık */}
                <ScrollReveal>
                    <div className="flex flex-col items-center justify-center text-center" style={{ marginBottom: '5rem' }}>
                        <span className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-orange-50 to-amber-50 border border-orange-200/50 text-sm text-primary font-medium backdrop-blur-sm shadow-sm" style={{ paddingLeft: '1.75rem', paddingRight: '1.75rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', marginBottom: '2rem', display: 'inline-flex' }}>
                            <Sparkles className="shrink-0" size={16} />
                            <span>Yetenekler & Uzmanlık</span>
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark" style={{ marginBottom: '1.5rem' }}>
                            Yetkinlikler
                        </h2>
                        <p className="text-warm/80 text-base md:text-lg max-w-2xl leading-relaxed" style={{ marginBottom: '0' }}>
                            Modern web teknolojileriyle kullanıcı odaklı çözümler üretiyorum
                        </p>
                    </div>
                </ScrollReveal>

                {/* BENTO GRID YAPISI */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">

                    {/* 1. Kutu: Ana Frontend Stack (Büyük Kare - 2x1) */}
                    <ScrollReveal className="md:col-span-2" direction="up" delay={0.1}>
                        <div className="h-full rounded-3xl bg-linear-to-br from-white/80 to-orange-50/50 dark:from-slate-900/80 dark:to-slate-800/80 backdrop-blur-xl border border-orange-200/30 hover:border-orange-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 group overflow-hidden relative" style={{ padding: '1.75rem' }}>
                            <div className="absolute -top-16 -right-16 w-40 h-40 bg-linear-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl group-hover:scale-125 transition-all duration-700" />
                            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-linear-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl group-hover:scale-125 transition-all duration-700" />
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="bg-linear-to-br from-primary to-secondary w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        <Code2 className="text-white" size={28} />
                                    </div>
                                    <h3 className="text-lg md:text-2xl font-bold mb-3 text-dark dark:text-white">Modern Frontend Stack</h3>
                                    <p className="text-warm/90 dark:text-slate-400 mb-4 leading-relaxed text-sm">
                                        Kullanıcı deneyimi odaklı, reaktif ve performanslı arayüzler geliştiriyorum.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Vue 3", "Next.js", "Tailwind CSS", "Bootstrap"].map((tech) => (
                                        <span key={tech} className="rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-md text-primary dark:text-orange-400 font-semibold border border-orange-200/50 hover:scale-105 hover:bg-white dark:hover:bg-slate-700 hover:border-primary transition-all cursor-default shadow-sm text-xs" style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingTop: '0.375rem', paddingBottom: '0.375rem' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* 2. Kutu: TypeScript (Dikey Kutu) */}
                    <ScrollReveal className="md:col-start-3 md:col-span-2 md:row-start-1" direction="up" delay={0.2}>
                        <div className="h-full rounded-3xl bg-linear-to-b from-blue-50/60 to-indigo-50/60 dark:from-slate-800/60 dark:to-slate-900/60 backdrop-blur-xl border border-blue-200/40 dark:border-blue-900/30 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center group" style={{ padding: '2rem' }}>
                            <div className="bg-linear-to-br from-blue-600 to-indigo-600 w-24 h-24 rounded-3xl flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 ease-out">
                                <span className="text-4xl font-bold">TS</span>
                            </div>
                            <h3 className="text-xl font-bold text-dark dark:text-white mb-3">TypeScript</h3>
                            <p className="text-warm/80 dark:text-slate-400 text-sm leading-relaxed">
                                Tip güvenli, ölçeklenebilir kod mimarisi
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* 3. Kutu: Backend (Yatay) */}
                    <ScrollReveal className="md:col-start-3 md:row-start-2" direction="up" delay={0.3}>
                        <div className="h-full rounded-3xl bg-linear-to-br from-white/70 to-purple-50/50 dark:from-slate-900/70 dark:to-slate-800/70 backdrop-blur-xl border border-purple-200/40 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 group flex items-center" style={{ padding: '1.5rem' }}>
                            <div className="flex items-center gap-3 w-full h-full">
                                <div className="bg-linear-to-br from-purple-600 to-indigo-600 rounded-lg shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0" style={{ padding: '0.625rem' }}>
                                    <Database className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-dark dark:text-white mb-1">Backend & API</h3>
                                    <p className="text-xs text-warm/80 dark:text-slate-400 leading-relaxed">ASP.NET Core ile güvenli veri akışı</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* 4. Kutu: DevOps (Kare) */}
                    <ScrollReveal className="md:col-start-4 md:row-start-2" direction="up" delay={0.4}>
                        <div className="h-full rounded-3xl bg-linear-to-br from-white/70 to-green-50/50 dark:from-slate-900/70 dark:to-slate-800/70 backdrop-blur-xl border border-green-200/40 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-center" style={{ padding: '1.5rem' }}>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-lg shadow-lg shadow-green-500/30 group-hover:rotate-12 transition-transform duration-300" style={{ padding: '0.5rem' }}>
                                    <GitBranch className="text-white" size={20} />
                                </div>
                                <h3 className="text-base font-bold text-dark dark:text-white">DevOps & Tools</h3>
                            </div>
                            <ul className="space-y-2 text-warm/80 dark:text-slate-400 text-xs">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-green-500 to-emerald-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]" /> Git / GitHub
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-green-500 to-emerald-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]" /> Postman
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-green-500 to-emerald-500 shadow-[0_0_6px_rgba(34,197,94,0.5)]" /> Testing
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>

                    {/* 5. Kutu: Dil (Yatay Geniş) */}
                    <ScrollReveal className="md:col-span-2 md:row-start-2" direction="up" delay={0.5}>
                        <div className="h-full rounded-3xl bg-linear-to-r from-amber-50/60 to-orange-50/60 dark:from-slate-800/60 dark:to-slate-900/60 backdrop-blur-xl border border-amber-200/40 dark:border-amber-900/30 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1 flex items-center gap-6 group" style={{ padding: '1.75rem' }}>
                            <div className="bg-linear-to-br from-amber-600 to-orange-600 rounded-2xl shadow-lg shadow-amber-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shrink-0" style={{ padding: '1rem' }}>
                                <Globe className="text-white" size={36} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dark dark:text-white mb-3">Yabancı Dil Yetkinliği</h3>
                                <div className="flex flex-wrap gap-3">
                                    <span className="rounded-xl bg-white/70 dark:bg-slate-700/70 text-sm font-semibold text-warm dark:text-slate-300 border border-amber-300/40 shadow-sm hover:scale-105 transition-transform" style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                                        🇬🇧 İngilizce (C1)
                                    </span>
                                    <span className="rounded-xl bg-white/70 dark:bg-slate-700/70 text-sm font-semibold text-warm dark:text-slate-300 border border-amber-300/40 shadow-sm hover:scale-105 transition-transform" style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                                        🇩🇪 Almanca (A2)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
};

export default Skills;