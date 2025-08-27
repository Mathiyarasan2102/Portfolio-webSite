import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div className="bg-slate-900 text-white py-8 sm:py-10 md:py-12 border-t border-slate-800 relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 sm:top-16 md:top-20 left-5 sm:left-8 md:left-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 right-5 sm:right-8 md:right-10 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:text-start text-center justify-between items-center gap-6 md:gap-0">
                        {/* Logo + Title */}
                        <div className="mb-4 md:mb-0">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 group cursor-pointer">
                                <span className="text-green-500 group-hover:text-green-400 transition-all duration-300">Mathiy</span>
                                <span className="text-white group-hover:text-green-400 transition-all duration-300">arasan.</span>
                                <span className="text-green-500 group-hover:text-green-400 transition-all duration-300">P</span>
                                <p className="text-gray-400 hover:text-gray-300 text-sm sm:text-base">Full Stack Developer</p>
                            </div>
                        </div>

                        {/* Made with ❤️ + Scroll Btn */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                            <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                                <span>Made with</span>
                                <Heart className="w-4 h-4 text-green-500 fill-current" />
                                <span>by Mathiyarasan.P</span>
                            </div>
                            <button
                                className="w-9 h-9 sm:w-10 sm:h-10 bg-green-600 rounded-full flex justify-center items-center hover:bg-green-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
                                onClick={scrollToTop}
                            >
                                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm text-center">
                        &copy; {new Date().getFullYear()} Mathiyarasan.P All rights reserved.
                    </div>
                </div>
            </div>
        </>
    );
}
