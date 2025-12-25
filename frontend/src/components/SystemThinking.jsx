import { useEffect, useState, useRef } from "react";

export default function SystemThinking() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const systems = [
        "RESTful API design",
        "JWT-based authentication & authorization",
        "Modular backend architecture",
        "MongoDB schema design",
        "Frontend state management",
        "Deployment using Vercel / Render"
    ];

    return (
        <section ref={sectionRef} className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl text-center">
                <h2 className={`text-3xl md:text-4xl font-bold text-white mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    My Engineering Approach
                </h2>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 text-left transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    {systems.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-green-500/50 transition-colors">
                            <span className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                            <span className="text-gray-200 font-medium text-lg">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
