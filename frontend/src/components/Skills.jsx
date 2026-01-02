import { useEffect, useState, useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaJava, FaServer } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiPython, SiSocketdotio, SiJsonwebtokens, SiRedux } from "react-icons/si";

const coreStack = [
    { name: "JavaScript", icon: <SiJavascript size={40} color="#E5C100" />, level: "Proficient" },
    { name: "React.js", icon: <FaReact size={40} color="#61DAFB" />, level: "Proficient" },
    { name: "Redux", icon: <SiRedux size={40} color="#764ABC" />, level: "Proficient" },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" />, level: "Comfortable" },
    { name: "Express.js", icon: <SiExpress size={40} color="#000000" />, level: "Comfortable" },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" />, level: "Comfortable" },
    { name: "HTML5", icon: <FaHtml5 size={30} color="#E34F26" />, level: "Proficient" },
    { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" />, level: "Proficient" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" />, level: "Proficient" },
];

const backendTools = [
    { name: "REST APIs", icon: <FaServer size={40} color="#2563EB" />, level: "Proficient" },
    { name: "JWT Auth", icon: <SiJsonwebtokens size={40} color="#D63AFF" />, level: "Comfortable" },
    { name: "Socket.io", icon: <SiSocketdotio size={40} color="#010101" />, level: "Familiar" },
    { name: "Git", icon: <FaGitAlt size={40} color="#F05032" />, level: "Proficient" },
    { name: "GitHub", icon: <FaGithub size={40} color="#181717" />, level: "Proficient" },
];

const fundamentals = [
    { name: "Python", icon: <SiPython size={40} color="#3776AB" />, level: "Basics / DSA" },
    { name: "Java", icon: <FaJava size={40} color="#F89820" />, level: "OOP / DSA" },
];

const education = [
    {
        year: "2022-2025",
        title: "B.E Computer Science Engineering",
        institution: "Mother Terasa College Engineering and Technology - Pudukkottai",
        description: "Focused on software development, algorithms, databases, and building scalable web applications."
    },
    {
        year: "2018-2021",
        title: "Diploma in Computer Science Engineering",
        institution: "Mother Terasa Polytechnic College - Pudukkottai",
        description: "Built strong fundamentals in programming, data structures, computer systems, and logical problem-solving."
    }
];

export default function Skills() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Animated background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-56 sm:w-72 h-56 sm:h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Education & Fundamentals */}
                    <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="mb-12">
                            <p className="text-green-400 font-semibold text-lg mb-4">Qualification</p>
                            <p className="text-green-400 text-4xl sm:text-5xl font-bold mb-8">Education</p>
                        </div>
                        <div className="space-y-8 mb-16">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className="border-l-2 border-green-500 pl-6 relative group transition-all duration-1000"
                                >
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-all duration-300"></div>
                                    <div className="text-green-400 text-sm font-semibold md:text-base group-hover:text-green-300 transition-all duration-300">
                                        {edu.year}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                                        {edu.title}
                                    </h3>
                                    <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-all duration-300">
                                        {edu.institution}
                                    </p>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-all duration-300">
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Programming Fundamentals - Desktop Only (Hidden on mobile) */}
                        <div className="hidden lg:block">
                            <div className="mb-8">
                                <p className="text-3xl sm:text-4xl font-black text-white">Programming Fundamentals</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {fundamentals.map((lang, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-orange-600/20 hover:-translate-y-2 transition duration-300 border border-white/10"
                                    >
                                        <div className="mb-3">{lang.icon}</div>
                                        <span className="text-white font-bold text-base">{lang.name}</span>
                                        <span className="text-orange-400 text-xs mt-1 uppercase tracking-wider font-semibold">{lang.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Skills & Tools */}
                    <div className={`transition-all duration-1000 delay-300 space-y-12 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

                        {/* Core Stack */}
                        <div>
                            <div className="mb-8">
                                <p className="text-green-400 font-semibold text-lg mb-4">Core Stack</p>
                                <p className="text-3xl sm:text-4xl font-black text-white">MERN & Frontend</p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {coreStack.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-green-600/20 hover:-translate-y-2 transition duration-300 border border-white/10"
                                    >
                                        <div className="mb-3">{skill.icon}</div>
                                        <span className="text-white font-bold text-base">{skill.name}</span>
                                        <span className="text-green-400 text-xs mt-1 uppercase tracking-wider font-semibold">{skill.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools & Backend Workflow */}
                        <div>
                            <div className="mb-8">
                                <p className="text-3xl sm:text-4xl font-black text-white">Tools & Backend Workflow</p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {backendTools.map((tool, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-blue-600/20 hover:-translate-y-2 transition duration-300 border border-white/10"
                                    >
                                        <div className="mb-3">{tool.icon}</div>
                                        <span className="text-white font-bold text-base">{tool.name}</span>
                                        <span className="text-blue-400 text-xs mt-1 uppercase tracking-wider font-semibold">{tool.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Programming Fundamentals - Mobile Only (Visible below Tools on mobile) */}
                        <div className="lg:hidden">
                            <div className="mb-8">
                                <p className="text-3xl sm:text-4xl font-black text-white">Programming Fundamentals</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {fundamentals.map((lang, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-orange-600/20 hover:-translate-y-2 transition duration-300 border border-white/10"
                                    >
                                        <div className="mb-3">{lang.icon}</div>
                                        <span className="text-white font-bold text-base">{lang.name}</span>
                                        <span className="text-orange-400 text-xs mt-1 uppercase tracking-wider font-semibold">{lang.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}
