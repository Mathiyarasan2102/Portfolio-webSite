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

    const handleDownloadResume = () => {
        const resumePath = "/Mathiyarasan.P Web Developer.pdf"; // public/ file
        const a = document.createElement("a");
        a.href = resumePath;
        a.download = "Mathiyarasan-P-Resume.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
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
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold">
                            <span className="text-green-400">Mathiy</span>
                            <span className="text-white">arasan</span>
                            <span className="text-green-400">.</span>
                        </div>
                        {/* Desktop Menus */}
                        <nav className="hidden md:flex space-x-8">
                            {
                                navItems.map((item, index) => {
                                    return <button key={index} onClick={() => scrollToSection(item.href)} className="text-gray-300 cursor-pointer hover:text-green-400 transition-all duration-300 font-medium relative group" style={{ animationDelay: `${index * 0.1}s` }}>
                                        {item.name} <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span></button>
                                })
                            }

                        </nav>

                        <button onClick={handleDownloadResume} className="hidden md:flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer">
                            Download CV Now
                        </button>
                        {/* Mobile Menu Button  */}
                        <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                    {/* Mobile Navigation */}
                    {isMenuOpen && (<nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-800 rounded-lg shadow-lg">
                        {
                            navItems.map((item, index) => {
                                return <button key={index} onClick={() => scrollToSection(item.href)} className="block w-full text-left py-3 px-4 text-gray-300 hover:text-green-400 hover:bg-slate-700 transition-all duration-300 rounded-lg" style={{ animationDelay: `${index * 0.9}s` }} >{item.name}</button>
                            })
                        }
                        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300">Download CV Now

                        </button>
                    </nav>)}
                </div>
            </header>
        </>
    )
}