import { useEffect, useState, useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaJava } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiPython } from "react-icons/si";

const skills = [
    { name: "HTML5", icon: <FaHtml5 size={30} color="#E34F26" />, level: 90 },
    { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" />, level: 80 },
    { name: "JavaScript", icon: <SiJavascript size={40} color="#E5C100" />, level: 75 },
    { name: "React.js", icon: <FaReact size={40} color="#61DAFB" />, level: 80 },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" />, level: 70 },
    { name: "Express.js", icon: <SiExpress size={40} color="#000000" />, level: 65 },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" />, level: 70 }
];

const tools = [
    { name: "Git", icon: <FaGitAlt size={40} color="#F05032" />, level: 80 },
    { name: "GitHub", icon: <FaGithub size={40} color="#181717" />, level: 85 },
    { name: "Python", icon: <SiPython size={40} color="#3776AB" />, level: 75 },
    { name: "Java", icon: <FaJava size={40} color="#F89820" />, level: 70 }
];

const education = [
    {
        year: "2018-2021",
        title: "Diploma in Computer Science Engineering",
        institution: "Mother Terasa Polytechnic College - Pudukkottai",
        description:
            "Built a strong foundation in programming, computer systems, and problem-solving skills."
    },
    {
        year: "2022-2025",
        title: "B.E Computer Science Engineering",
        institution: "Mother Terasa College Engineering and Technology - Pudukkottai",
        description:
            "Expanded expertise in software development, algorithms, and advanced computing concepts."
    }
];

// Counter animation (only starts when visible)
function Counter({ target, start }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;
        let startVal = 0;
        const duration = 1000;
        const stepTime = 10;
        const increment = target / (duration / stepTime);

        const timer = setInterval(() => {
            startVal += increment;
            if (startVal >= target) {
                startVal = target;
                clearInterval(timer);
            }
            setCount(Math.floor(startVal));
        }, stepTime);

        return () => clearInterval(timer);
    }, [target, start]);

    return <span>{count}%</span>;
}

// Smooth progress bar (only animates when visible)
function AnimatedProgress({ target, start }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (start) {
            const timeout = setTimeout(() => {
                setWidth(target);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            // reset width if not visible (for re-trigger)
            setWidth(0);
        }
    }, [target, start]);

    return (
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
            <div
                className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${width}%` }}
            ></div>
        </div>
    );
}

export default function Skills() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);   // 🔥 start animation
                } else {
                    setVisible(false);  // 🔄 reset when leaving viewport (so it replays)
                }
            },
            { threshold: 0.3 } // 30% visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Animated background Elements*/}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10 ">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Education  */}
                    <div className={`transition-all duration-1000`}>
                        <div className="mb-12">
                            <p className={`text-green-400 font-semibold text-lg mb-4`}>Qualification</p>
                            <p className={`text-green-400 text-4xl font-bold mb-8`}>Education</p>
                        </div>
                        <div className="space-y-8">
                            {education.map((edu, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`border-l-2 border-green-500 pl-6 relative group transition-all duration-1000`}
                                    >
                                        <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-all duration-300 "></div>
                                        <div className="text-green-400 text-sm font-semibold md-2 group-hover:text-green-300 transition-all duration-300">
                                            {edu.year}
                                        </div>
                                        <h3 className="text-xl font-black text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                                            {edu.title}
                                        </h3>
                                        <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-all duration-300">
                                            {edu.institution}
                                        </p>
                                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-all duration-300">
                                            {edu.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Skills & Tools */}
                    <div className={`transition-all -mt-10 duration-1000 delay-300 space-y-12`}>
                        <div className="mb-12">
                            <p className="text-green-400 font-semibold text-lg mb-4 ">Expert</p>
                            <p className="text-4xl font-black text-white mb-8 ">My Skills</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-stretch">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-between p-4 rounded-xl bg-white hover:bg-green-400 transition duration-300 shadow-lg h-36"
                                >
                                    {skill.icon}
                                    <span className="mt-2 text-lg font-medium">{skill.name}</span>
                                    <AnimatedProgress target={skill.level} start={visible} />
                                    <span className="text-sm text-gray-600 mt-1">
                                        <Counter target={skill.level} start={visible} />
                                    </span>
                                </div>
                            ))}
                        </div>

                        <p className="text-4xl font-black -mt-10 text-white mb-8 ">Tools & Others</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                            {tools.map((tool, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center p-4 rounded-xl bg-white hover:bg-green-400 transition duration-300 shadow-lg w-full"
                                >
                                    {tool.icon}
                                    <span className="mt-2 text-lg font-medium">{tool.name}</span>
                                    <AnimatedProgress target={tool.level} start={visible} />
                                    <span className="text-sm text-gray-600 mt-1">
                                        <Counter target={tool.level} start={visible} />
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
