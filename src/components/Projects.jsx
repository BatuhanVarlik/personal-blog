import ScrollReveal from "./ui/ScrollReveal";
import { Github, ExternalLink, Code, Layers } from "lucide-react";

const projects = [
    {
        title: "Enterprise Expense System",
        category: "Profesyonel",
        description: "Vue 3 ve .NET 8 ile geliştirilen, rol tabanlı yetkilendirme (RBAC), SignalR bildirimleri ve onay süreçlerine sahip kurumsal harcama yönetim sistemi.",
        tech: ["Vue 3", "TypeScript", ".NET 8", "SignalR"],
        links: { demo: "#", github: "#" }, // Gizlilik gereği link olmayabilir
        gradient: "from-blue-600 to-indigo-900"
    },
    {
        title: "Kodorbit Yazılım Topluluğu",
        category: "Profesyonel",
        description: "WordPress altyapısı ile kurulan, SEO optimizasyonlu ve özel domain entegrasyonlu teknoloji topluluğu platformu.",
        tech: ["WordPress", "SEO", "PHP", "Content Mgmt"],
        links: { demo: "https://www.kodorbit.com", github: "#" },
        gradient: "from-purple-600 to-pink-900"
    },
    {
        title: "Profesyonel To-Do List",
        category: "Kişisel",
        description: "Sürükle-bırak özelliği ile görev sıralama ve filtreleme sunan, dinamik DOM manipülasyonu içeren görev yönetim uygulaması.",
        tech: ["JavaScript", "Drag & Drop", "LocalStorage", "CSS3"],
        links: { demo: "https://batuhanvarlik.github.io/To-do-list/", github: "https://github.com/batuhanvarlik/To-do-list" },
        gradient: "from-emerald-600 to-teal-900"
    },
    {
        title: "Hava Durumu Uygulaması",
        category: "Kişisel",
        description: "WeatherAPI kullanarak async/await ile anlık veri çeken ve dinamik olarak arayüze yansıtan Vanilla JS uygulaması.",
        tech: ["JavaScript", "Async/Await", "Fetch API", "DOM"],
        links: { demo: "https://batuhanvarlik.github.io/hava-durumu/", github: "https://github.com/batuhanvarlik/hava-durumu" },
        gradient: "from-orange-500 to-red-900"
    },
    {
        title: "Sync-Up Landing Page",
        category: "Kişisel",
        description: "Bootstrap 5 grid sistemi ve bileşenleri kullanılarak geliştirilen, tam mobil uyumlu modern ürün tanıtım sayfası.",
        tech: ["Bootstrap 5", "Responsive", "HTML5", "SASS"],
        links: { demo: "https://batuhanvarlik.github.io/Sync-Up-Bootstrap-Project/", github: "https://github.com/batuhanvarlik/Sync-Up-Bootstrap-Project" },
        gradient: "from-cyan-600 to-blue-900"
    },
    {
        title: "Eparaf Tanıtım Arayüzü",
        category: "Profesyonel",
        description: "React.js kullanılarak geliştirilen, yeniden kullanılabilir bileşen mimarisine sahip yüksek performanslı kurumsal landing page.",
        tech: ["React.js", "UX/UI", "Component Architecture"],
        links: { demo: "#", github: "#" },
        gradient: "from-slate-600 to-slate-900"
    }
];

const Projects = () => {
    return (
        <section id="projeler" className="relative" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
            <div className="container mx-auto px-6 max-w-7xl">

                <ScrollReveal>
                    <div className="text-center flex flex-col items-center" style={{ marginBottom: '5rem' }}>
                        <span className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/50 text-sm text-primary font-medium backdrop-blur-sm shadow-sm" style={{ paddingLeft: '1.75rem', paddingRight: '1.75rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', marginBottom: '2rem', display: 'inline-flex' }}>
                            <Code className="flex-shrink-0" size={16} />
                            <span>Projeler & Çalışmalar</span>
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark" style={{ marginBottom: '1.5rem' }}>
                            Seçilmiş Çalışmalar
                        </h2>
                        <p className="text-warm/80 text-base md:text-lg max-w-2xl leading-relaxed" style={{ marginBottom: '0' }}>
                            GitHub üzerindeki kişisel çalışmalarımdan ve sektördeki profesyonel projelerimden bazı örnekler.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" style={{ marginBottom: '3rem' }}>
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                            <div className="group relative rounded-3xl overflow-hidden bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:border-orange-300/50 transition-all duration-500 h-full flex flex-col hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10">

                                {/* Gradient Header */}
                                <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                    {/* Abstract shapes for visual interest */}
                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                                    <div className="absolute bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300" style={{ top: '1rem', right: '1rem', padding: '0.625rem' }}>
                                        {project.category === "Profesyonel" ? <Layers className="text-primary" size={20} /> : <Code className="text-primary" size={20} />}
                                    </div>
                                    <div className="absolute" style={{ top: '1rem', left: '1rem' }}>
                                        <span className={`rounded-full text-xs font-bold uppercase tracking-wide bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm ${project.category === "Profesyonel" ? "text-purple-600 dark:text-purple-400" : "text-primary"
                                            }`} style={{ paddingLeft: '0.875rem', paddingRight: '0.875rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col" style={{ padding: '2rem' }}>
                                    <h3 className="text-2xl font-bold text-dark dark:text-white leading-tight group-hover:text-primary transition-colors" style={{ marginBottom: '0.875rem' }}>
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed" style={{ marginBottom: '1.5rem' }}>
                                        {project.description}
                                    </p>

                                    {/* Teknolojiler */}
                                    <div className="flex flex-wrap gap-2" style={{ marginBottom: '2rem' }}>
                                        {project.tech.map((t) => (
                                            <span key={t} className="rounded-lg bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-stone-200/50 dark:border-slate-700/50 text-xs" style={{ paddingLeft: '0.875rem', paddingRight: '0.875rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Alt Kısım: Linkler */}
                                    <div className="flex gap-3 mt-auto">
                                        {project.links.github !== "#" && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-dark dark:text-white border border-stone-200 dark:border-slate-700 rounded-xl hover:bg-stone-50 dark:hover:bg-slate-800 hover:border-primary/50 hover:text-primary transition-all group/btn"
                                                style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.875rem', paddingBottom: '0.875rem' }}
                                            >
                                                <Github size={18} className="group-hover/btn:scale-110 transition-transform" /> Kod
                                            </a>
                                        )}
                                        {project.links.demo !== "#" && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105 transition-all group/btn"
                                                style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.875rem', paddingBottom: '0.875rem' }}
                                            >
                                                <ExternalLink size={18} className="group-hover/btn:rotate-45 transition-transform" /> Demo
                                            </a>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal className="text-center" style={{ marginTop: '2rem' }}>
                    <a
                        href="https://github.com/BatuhanVarlik"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-stone-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:border-primary hover:shadow-xl hover:shadow-orange-500/10 transition-all group font-semibold text-dark dark:text-white"
                        style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1rem', paddingBottom: '1rem' }}
                    >
                        <Github className="group-hover:text-primary transition-colors" size={20} />
                        <span className="group-hover:text-primary transition-colors">Daha fazlası için GitHub profilimi inceleyin</span>
                    </a>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default Projects;