import { Briefcase, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const experiences = [
        {
            id: 1,
            role: "MERN Stack Developer Intern",
            company: "Least Action Company Pvt. Ltd.",
            location: "Remote",
            period: "Oct 2025 – Present",
            description: [
                "Developed LuxeEstate, a production-ready real estate platform with Role-Based Access Control (RBAC) ensuring secure access for Admin, Seller, and User roles.",
                "Designed and optimized MongoDB schemas to efficiently manage complex relationships between users, property listings, and bookings.",
                "Built a dynamic Admin Dashboard with data visualization tools for real-time monitoring of user activity and property metrics.",
                "Implemented robust JWT authentication and protected routes to secure client-server communication.",
                "Refactored existing codebases to improve performance, reducing load times and enhancing maintainability.",
                "Collaborated with cross-functional teams using Git/GitHub and aligned with Agile methodologies to deliver features on schedule."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
                    <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`relative pl-8 md:pl-0 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                        >
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 transform -translate-x-1/2"></div>

                            {/* Timeline Dot (Desktop) */}
                            <div className="hidden md:flex absolute left-1/2 top-0 w-12 h-12 bg-slate-900 border-2 border-green-500 rounded-full items-center justify-center transform -translate-x-1/2 shadow-[0_0_15px_rgba(34,197,94,0.3)] z-10">
                                <Briefcase size={20} className="text-green-400" />
                            </div>

                            <div className="md:flex justify-between items-start gap-10 group">
                                {/* Left Side (Date & Location) */}
                                <div className="md:w-1/2 md:text-right md:pr-12 mb-4 md:mb-0">
                                    <div className="inline-block bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-2 mb-2 shadow-sm group-hover:border-green-500/50 transition-colors duration-300">
                                        <div className="flex items-center gap-2 text-green-400 font-semibold md:justify-end">
                                            <Calendar size={16} />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">{exp.company}</h3>
                                    <p className="text-slate-400 text-sm font-medium flex items-center gap-1 md:justify-end">
                                        {exp.location}
                                    </p>
                                </div>

                                {/* Timeline Line & Dot (Mobile) */}
                                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-3"></div>
                                <div className="md:hidden absolute left-0 top-0 w-8 h-8 bg-slate-900 border-2 border-green-500 rounded-full flex items-center justify-center -ml-1 shadow-[0_0_10px_rgba(34,197,94,0.3)] z-10">
                                    <Briefcase size={14} className="text-green-400" />
                                </div>

                                {/* Right Side (Role & Description) */}
                                <div className="md:w-1/2 md:pl-12 pb-12">
                                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:bg-slate-900 hover:border-slate-600 transition-all duration-300 shadow-lg group-hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                                        <h4 className="text-2xl font-bold text-white mb-4">{exp.role}</h4>
                                        <ul className="space-y-3">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start text-slate-300 text-sm leading-relaxed">
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
