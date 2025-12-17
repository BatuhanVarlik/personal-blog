import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { navLinks } from "../components/constants"
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hakkımda");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ["hakkımda", "yetenekler", "deneyim", "projeler"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -100 && rect.top <= 300;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
            >
                <div
                    className={`
                        relative flex items-center justify-between 
                        transition-all duration-500 ease-out
                        ${scrolled
                            ? "w-[90%] md:w-187.5 bg-white/95 dark:bg-slate-900/95 shadow-2xl shadow-black/10 backdrop-blur-2xl"
                            : "w-[95%] md:w-200 bg-white/60 dark:bg-slate-900/60 shadow-lg backdrop-blur-md"
                        }
                        border border-white/20 dark:border-white/10 rounded-full
                    `}
                    style={{
                        paddingTop: scrolled ? '0.5rem' : '0.75rem', // Dikey paddingi biraz azalttık ki resim taşsın
                        paddingBottom: scrolled ? '0.5rem' : '0.75rem',
                        paddingLeft: scrolled ? '1.5rem' : '2rem',
                        paddingRight: scrolled ? '1.5rem' : '2rem'
                    }}
                >
                    {/* --- 1. DEĞİŞİKLİK: LOGO FOTOĞRAFI --- */}
                    <a href="#" className="flex items-center gap-3 group shrink-0 relative">
                        {/* Buraya kendi fotoğrafının yolunu yazmalısın. Örn: "/images/profile.jpg"
                           -margin vererek navbarın sınırlarından hafifçe taşmasını sağladık (pop-out effect).
                        */}
                        <div className="relative">
                            <img
                                src="https://github.com/BatuhanVarlik.png"
                                alt="Batuhan Varlık"
                                className={`
                                    rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-md transition-all duration-300
                                    ${scrolled ? "w-12 h-12" : "w-14 h-14 md:w-16 md:h-16"} 
                                    group-hover:scale-110
                                `}
                            />
                            {/* Online durumu belirteci (Opsiyonel süs) */}
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>

                        <span className={`font-bold text-lg tracking-tight ${scrolled ? "hidden" : "block"} text-slate-800 dark:text-white `}>
                            Batuhan Varlık
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center bg-black/5 dark:bg-white/5 rounded-full shrink-0" style={{ padding: '0.375rem', gap: scrolled ? '0.25rem' : '0.5rem' }}>
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveSection(item.name.toLowerCase())}
                                className={`
                                    relative text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap
                                    ${activeSection === item.name.toLowerCase()
                                        ? "text-white shadow-md"
                                        : "text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                                    }
                                `}
                                style={{
                                    paddingLeft: scrolled ? '1rem' : '1.5rem',
                                    paddingRight: scrolled ? '1rem' : '1.5rem',
                                    paddingTop: '0.625rem',
                                    paddingBottom: '0.625rem'
                                }}
                            >
                                {activeSection === item.name.toLowerCase() && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-indigo-600 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </a>
                        ))}
                    </div>

                    {/* Sağ Taraf - İkonlar */}
                    <div className="flex items-center gap-2 shrink-0" style={{ paddingLeft: scrolled ? '0.5rem' : '1rem' }}>
                        <div className="hidden md:flex items-center gap-2 border-l border-gray-200 dark:border-gray-700" style={{ paddingLeft: scrolled ? '0.75rem' : '1.25rem' }}>
                            <SocialLink href="https://github.com/BatuhanVarlik" icon={<Github size={20} />} />
                            <SocialLink href="https://linkedin.com/in/batuhanvarlik/" icon={<Linkedin size={20} />} />
                        </div>

                        {/* Mobil Menü Butonu */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-800 dark:text-white transition-colors"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* --- 2. DEĞİŞİKLİK: MOBİL MENÜ HİZALAMA --- */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-28 left-4 right-4 z-40 md:hidden"
                    >
                        {/* flex-col ve items-center ile her şeyi ortalıyoruz */}
                        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col items-center justify-center gap-4">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    // text-center ve w-full verdik, ayrıca text boyutunu biraz büyüttük (text-lg)
                                    className="block w-full text-center p-3 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-slate-800 dark:text-slate-100 font-semibold text-lg transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex justify-center gap-6 mt-2 pt-4 border-t border-gray-100 w-full dark:border-gray-800">
                                <SocialLink href="https://github.com/BatuhanVarlik" icon={<Github size={24} />} />
                                <SocialLink href="https://linkedin.com/in/batuhanvarlik/" icon={<Linkedin size={24} />} />
                                <SocialLink href="mailto:batuhanvarlik@hotmail.com" icon={<Mail size={24} />} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-white/10 rounded-full transition-all duration-300"
    >
        {icon}
    </a>
);

export default Navbar;