import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
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
        setIsMenuOpen(false)
    };





    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-slate-950 backdrop-blur-lg shadow-lg border-b border-slate-800" : "bg-transparent"}`}>
                <div className="container mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div onClick={() => scrollToSection("#home")} className="text-xl cursor-pointer sm:text-2xl md:text-3xl font-bold">
                            <span className="text-green-400">Mathiy</span>
                            <span className="text-white">arasan</span>
                            <span className="text-green-400">.</span>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex space-x-4 lg:space-x-8">
                            {
                                navItems.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToSection(item.href)}
                                        className="text-sm lg:text-base text-gray-300 cursor-pointer hover:text-green-400 transition-all duration-300 font-medium relative group"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                                    </button>
                                ))
                            }
                        </nav>

                        {/* Desktop Resume Btn */}
                        <a
                            href="/Mathiyarasan_P_Full_Stack_MERN_Developer.pdf"
                            download="Mathiyarasan_P_Full_Stack_MERN_Developer.pdf"
                            className="hidden md:flex cursor-pointer items-center gap-2 bg-green-600 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
                        >
                            Download CV Now
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="text-white cursor-pointer md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Nav */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t border-slate-800 pt-3 sm:pt-4 bg-slate-800 rounded-lg shadow-lg">
                            {
                                navItems.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToSection(item.href)}
                                        className="block cursor-pointer w-full text-left py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-gray-300 hover:text-green-400 hover:bg-slate-700 transition-all duration-300 rounded-lg"
                                        style={{ animationDelay: `${index * 0.9}s` }}
                                    >
                                        {item.name}
                                    </button>
                                ))
                            }
                            <a
                                href="/Mathiyarasan_P_Full_Stack_MERN_Developer.pdf"
                                download="Mathiyarasan_P_Full_Stack_MERN_Developer.pdf"
                                className="mt-3 cursor-pointer sm:mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 sm:px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 text-sm sm:text-base"
                            >
                                Download CV Now
                            </a>
                        </nav>
                    )}
                </div>
            </header>
        </>
    )
}
