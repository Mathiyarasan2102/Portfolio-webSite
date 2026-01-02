import { useEffect, useState } from "react";
import img from "./assets/img.jpg"
export default function About() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );
        const element = document.getElementById("about");
        if (element) observer.observe(element);
        return () => observer.disconnect();
    }, []);




    const items = [
        { label: "Name", value: "Mathiyarasan.P" },
        { label: "Place", value: "Chennai, Tamil Nadu" },
        { label: "Degree", value: "B.E Computer Science Engineering" },
        { label: "Email", value: "mathiyarasan.2102@gmail.com" },
    ];

    return (
        <>
            <section id="about" className="py-24 bg-slate-950 overflow-hidden">
                {/* Animated background Elements*/}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent">
                    </div>
                </div>

                <div className="px-6 py-4">
                    <div className="relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* left image */}
                            <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                                <div className="relative group ">
                                    <div className="w-full max-w-md mx-auto">
                                        <div className="relative border-2 sm:border-4 border-green-500 rounded-2xl p-2 group-hover:border-green-400 transition-all duration-300">
                                            <img src={img} alt="Aboutimage"
                                                className="w-full rounded-xl transition-all duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-2 bg-gradient-to-tr from-green-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            </div>
                                            {/* Floating Decoration  */}
                                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-600/20 rounded-full">
                                            </div>
                                            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-600/20 rounded-full">

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* Right Content */}

                            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                                <div className="space-y-4">
                                    <p className="text-green-400 font-semibold text-lg">About Me</p>
                                    <h2 className="text-4xl md:text-5xl text-white font-bold animate-slide-up">Why hire me for your <br />
                                        <span>
                                            next project?
                                        </span>
                                    </h2>
                                    <p className="text-green-400 font-semibold delay-200">
                                        MERN Stack Developer
                                    </p>
                                </div>
                                <div className="space-y-6 text-gray-300 leading-relaxed">
                                    <p className={`text-lg transition-all duration-100 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                                        I am a passionate MERN Stack Developer skilled in building
                                        responsive, full-stack web applications.
                                    </p>
                                    <p className={` transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                                        I focus on clean architecture, scalability, and
                                        collaborative team development.
                                    </p>

                                    {/* How I Work Section */}
                                    <div className={`mt-6 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"} transition-all duration-1000 delay-900`}>
                                        <h3 className="text-xl font-bold text-white mb-4">How I Work</h3>
                                        <ul className="space-y-4 text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0"></span>
                                                I break real-world problems into scalable features
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0"></span>
                                                I focus on clean, reusable, and maintainable code
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0"></span>
                                                I enjoy debugging, refactoring, and improving existing systems
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0"></span>
                                                I collaborate well and adapt quickly in team environments
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                                    {items.map((item, index) => (
                                        <div key={index} className="group">
                                            <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                                                {item.label}
                                            </p>
                                            <p className="text-gray-300 break-all sm:break-words">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-4 transition-all duration-1000 delay-1100">
                                    <a
                                        href="/Mathiyarasan_P_MERN_Stack_Developer_Resume.pdf"
                                        download="Mathiyarasan_P_MERN_Stack_Developer_Resume.pdf"
                                        className="bg-green-600 cursor-pointer text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                                    >
                                        Download CV
                                    </a>
                                    <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="border-2 border-slate-600 cursor-pointer text-white px-8 py-3 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium hover:scale-105">
                                        Contact Me
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>)
}
