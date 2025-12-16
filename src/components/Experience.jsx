import ScrollReveal from "./ui/ScrollReveal";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "FullStack Software Intern",
        company: "Niso Yazılım",
        location: "İzmir, Turkey",
        date: "Ekim 2025 - Ocak 2026",
        description: "Vue 3 ve .NET 8 ile rol tabanlı yetkilendirme ve gerçek zamanlı bildirim özelliklerine sahip uçtan uca bir Harcama Talep Sistemi geliştirdim. Kapsamlı testlerle veri bütünlüğünü doğruladım.",
        tech: ["Vue 3", ".NET 8", "SQL", "Software Testing"]
    },
    {
        id: 2,
        role: "Process Automation Intern",
        company: "Eldor Electronic Cooperation",
        location: "İzmir, Turkey",
        date: "Ocak 2025 - Haziran 2025",
        description: "Otomasyon sistemleri için validasyon testleri yürüttüm. Hataların erken tespiti ve test kapsamının genişletilmesi üzerine mühendislik çözümleri geliştirdim.",
        tech: ["Validation Lifecycle", "Test Engineering", "Automation"]
    },
    {
        id: 3,
        role: "Automation Software Intern",
        company: "Dedem Mekatronik",
        location: "İzmir, Turkey",
        date: "Temmuz 2024 - Ağustos 2024",
        description: "Mekatronik sistemler için kullanıcı dostu arayüzler (HMI/UI) tasarladım. Siemens TIA Portal ve SCADA ile gerçek zamanlı veri işleme süreçlerini optimize ettim.",
        tech: ["HMI/UI Design", "SCADA", "Siemens TIA Portal"]
    },
    {
        id: 4,
        role: "Automation & Maintenance Intern",
        company: "Doehler Natural Food & Beverage",
        location: "İzmir, Turkey",
        date: "Kasım 2023 - Mayıs 2024",
        description: "Sistem kararlılığını sağlamak için hata analizi ve diyagnostik süreçler yürüttüm. SAP PM modülü ile veri tabanlı iş akışlarını yönettim.",
        tech: ["SAP PM", "Data Analysis", "System Stability"]
    }
];

const Experience = () => {
    return (
        <section id="deneyim" className="relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <ScrollReveal>
                    <div className="text-center flex flex-col items-center" style={{ marginBottom: '5rem' }}>
                        <span className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-orange-50 to-amber-50 border border-orange-200/50 text-sm text-primary font-medium backdrop-blur-sm shadow-sm" style={{ paddingLeft: '1.75rem', paddingRight: '1.75rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', marginBottom: '2rem', display: 'inline-flex' }}>
                            <Briefcase className="shrink-0" size={16} />
                            <span>Deneyim & Kariyer</span>
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark" style={{ marginBottom: '1.5rem' }}>
                            Profesyonel Yolculuk
                        </h2>
                        <p className="text-warm/80 text-base md:text-lg max-w-2xl leading-relaxed" style={{ marginBottom: '0' }}>
                            Sektörde edindiğim deneyimler ve üstlendiğim roller
                        </p>
                    </div>
                </ScrollReveal>

                <div className="flex justify-center">
                    <div className="relative max-w-5xl w-full">
                        {/* Dikey Çizgi (Timeline Line) - Tam Ortada */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-linear-to-b from-primary via-secondary to-accent rounded-full" />

                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="relative group" style={{ marginBottom: index === experiences.length - 1 ? '0' : '4rem' }}>

                                {/* Timeline Noktası - Tam Ortada */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-linear-to-br from-primary to-secondary rounded-full border-4 border-white dark:border-slate-900 z-20 shadow-lg top-6 group-hover:scale-125 transition-transform" />

                                {/* İçerik Kartı - Grid ile Ortalama */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

                                    {/* Sol Taraf (Çift indexlerde boş, tek indexlerde içerik) */}
                                    <div className={`${index % 2 === 0 ? 'hidden md:block' : ''} ${index % 2 === 0 ? 'order-1' : 'order-1 md:order-1'}`}>
                                        {index % 2 !== 0 && (
                                            <ScrollReveal direction="left" delay={index * 0.1} className="h-full">
                                                <div className="rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:border-orange-300/50 transition-all duration-300 group-hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10" style={{ padding: '2rem' }}>
                                                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 dark:bg-orange-900/30 text-primary text-xs font-semibold border border-orange-200/50 dark:border-orange-700/30" style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
                                                        <Calendar size={12} />
                                                        {exp.date}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-dark dark:text-white" style={{ marginBottom: '0.75rem' }}>{exp.role}</h3>
                                                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm flex-wrap" style={{ marginBottom: '1.25rem' }}>
                                                        <Briefcase size={14} />
                                                        <span className="font-semibold text-dark dark:text-slate-200">{exp.company}</span>
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                                        <MapPin size={14} />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed" style={{ marginBottom: '1.5rem' }}>{exp.description}</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.tech.map((t) => (
                                                            <span key={t} className="rounded-lg bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-stone-200/50 dark:border-slate-700/50 hover:bg-orange-50 hover:text-primary hover:border-orange-200 transition-colors cursor-default text-xs" style={{ paddingLeft: '0.875rem', paddingRight: '0.875rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </ScrollReveal>
                                        )}
                                    </div>

                                    {/* Sağ Taraf (Tek indexlerde boş, çift indexlerde içerik) */}
                                    <div className={`${index % 2 !== 0 ? 'hidden md:block' : ''} ${index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                                        {index % 2 === 0 && (
                                            <ScrollReveal direction="right" delay={index * 0.1} className="h-full">
                                                <div className="rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:border-orange-300/50 transition-all duration-300 group-hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10" style={{ padding: '2rem' }}>
                                                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 dark:bg-orange-900/30 text-primary text-xs font-semibold border border-orange-200/50 dark:border-orange-700/30" style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
                                                        <Calendar size={12} />
                                                        {exp.date}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-dark dark:text-white" style={{ marginBottom: '0.75rem' }}>{exp.role}</h3>
                                                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm flex-wrap" style={{ marginBottom: '1.25rem' }}>
                                                        <Briefcase size={14} />
                                                        <span className="font-semibold text-dark dark:text-slate-200">{exp.company}</span>
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                                        <MapPin size={14} />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed" style={{ marginBottom: '1.5rem' }}>{exp.description}</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.tech.map((t) => (
                                                            <span key={t} className="rounded-lg bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-stone-200/50 dark:border-slate-700/50 hover:bg-orange-50 hover:text-primary hover:border-orange-200 transition-colors cursor-default text-xs" style={{ paddingLeft: '0.875rem', paddingRight: '0.875rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </ScrollReveal>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;