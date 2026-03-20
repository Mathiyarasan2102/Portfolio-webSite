import { ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-brand-dark text-brand-light border-t border-brand-dark-border">
            <div className="container mx-auto px-6 max-w-7xl py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <span className="font-display font-medium text-3xl tracking-wider text-brand-light mb-2">
                            MATHIYARASAN<span className="text-brand-accent">.</span>
                        </span>
                        <span className="font-sans text-xxs text-gray-500 uppercase tracking-super-wide block">
                            Software Engineer
                        </span>
                    </div>

                    {/* Scroll to top */}
                    <button
                        className="w-12 h-12 border border-brand-dark-border bg-brand-dark-surface flex justify-center items-center hover:bg-[#ececec] hover:text-[#060606] transition-colors cursor-pointer"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} className="font-light" />
                    </button>
                    
                </div>
                
                <div className="mt-16 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-dark-border">
                    <span className="font-sans text-xxs text-gray-600 uppercase tracking-super-wide mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Mathiyarasan P. All Rights Reserved.
                    </span>
                    <span className="font-sans text-xxs text-gray-600 uppercase tracking-super-wide">
                        Based in India
                    </span>
                </div>
            </div>
        </footer>
    );
}
