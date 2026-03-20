import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
                top: offsetPosition > 0 ? offsetPosition : 0,
                behavior: "smooth"
            });
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: "01. Home", href: "#home" },
        { name: "02. About", href: "#about" },
        { name: "03. Experience", href: "#experience" },
        { name: "04. Skills", href: "#skills" },
        { name: "05. Selected Works", href: "#projects" },
        { name: "06. Contact", href: "#contact" }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-brand-dark/90 backdrop-blur-md border-b border-brand-dark-border" : "bg-transparent border-b border-transparent"}`}>
            <div className="container mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl font-display font-medium cursor-pointer tracking-wider text-brand-light" 
                        onClick={() => scrollToSection("#home")}
                    >
                        MATHIYARASAN<span className="text-brand-accent">.</span>
                    </motion.div>

                    <nav className="hidden md:flex space-x-10">
                        {navItems.map((item, index) => (
                            <motion.button
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                key={index}
                                onClick={() => scrollToSection(item.href)}
                                className="text-xs font-sans tracking-mega-wide text-gray-500 hover:text-white transition-colors duration-300 uppercase cursor-pointer"
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </nav>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        href="/Mathiyarasan_P_Full_Stack_Developer.pdf"
                        download="Mathiyarasan_P_Full_Stack_Developer.pdf"
                        className="hidden md:inline-flex luxury-button px-6 py-2.5 text-xxs tracking-super-wide cursor-pointer"
                    >
                        RESUME
                    </motion.a>

                    <button className="md:hidden text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-brand-dark-surface border-b border-brand-dark-border"
                    >
                        <div className="px-6 py-8 space-y-6 flex flex-col items-start px-8">
                            {navItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.href)}
                                    className="font-sans text-sm tracking-super-wide text-gray-400 hover:text-white transition-colors cursor-pointer uppercase flex items-center gap-4"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <a
                                href="/Mathiyarasan_P_Full_Stack_Developer.pdf"
                                download="Mathiyarasan_P_Full_Stack_Developer.pdf"
                                className="luxury-button px-6 py-4 mt-6 w-full text-center cursor-pointer text-xs tracking-super-wide"
                            >
                                DOWNLOAD RESUME
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
