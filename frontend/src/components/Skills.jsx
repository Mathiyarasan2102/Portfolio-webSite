import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaJava, FaServer } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiPython, SiSocketdotio, SiJsonwebtokens, SiRedux, SiVite, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const coreStack = [
    { name: "JavaScript", icon: <SiJavascript size={22} />, level: "Proficient" },
    { name: "React.js", icon: <FaReact size={22} />, level: "Proficient" },
    { name: "Redux", icon: <SiRedux size={22} />, level: "Proficient" },
    { name: "Node.js", icon: <FaNodeJs size={22} />, level: "Comfortable" },
    { name: "Express.js", icon: <SiExpress size={22} />, level: "Comfortable" },
    { name: "MongoDB", icon: <SiMongodb size={22} />, level: "Comfortable" },
    { name: "HTML5/CSS3", icon: <FaHtml5 size={22} />, level: "Proficient" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={22} />, level: "Proficient" },
];

const backendTools = [
    { name: "REST APIs", icon: <FaServer size={22} />, level: "Architecture" },
    { name: "JWT Auth", icon: <SiJsonwebtokens size={22} />, level: "Security" },
    { name: "Socket.io", icon: <SiSocketdotio size={22} />, level: "WebSockets" },
    { name: "MySQL", icon: <SiMysql size={22} />, level: "RDMS" },
    { name: "Git Workflow", icon: <FaGitAlt size={22} />, level: "Version Control" },
    { name: "Vite Bundler", icon: <SiVite size={22} />, level: "Tooling" },
];

const fundamentals = [
    { name: "Python", icon: <SiPython size={22} />, level: "Data & DSA" },
    { name: "Java", icon: <FaJava size={22} />, level: "OOP Principles" },
];

const education = [
    {
        year: "2022-2025",
        title: "B.E Computer Science Engineering",
        institution: "Mother Terasa College Engineering and Technology",
    },
    {
        year: "2018-2021",
        title: "Diploma in Computer Science",
        institution: "Mother Terasa Polytechnic College",
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-brand-dark-surface border-t border-brand-dark-border">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 lg:mb-24"
                >
                    <span className="font-sans text-xxs text-gray-500 tracking-super-wide uppercase mb-6 block">
                        Skills
                    </span>
                    <h2 className="display-heading text-5xl lg:text-7xl font-bold text-brand-light leading-[1.1] tracking-tight">
                        Technical<br /> Expertise
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    {/* Left side: Skills */}
                    <div className="lg:col-span-8 flex flex-col gap-12 border-r border-brand-dark-border pr-10">
                        
                        {/* Modules */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
                            <h3 className="font-sans text-xxs text-gray-500 tracking-super-wide uppercase mb-8 border-b border-brand-dark-border pb-6">
                                Core Technologies
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {coreStack.map((skill, index) => (
                                    <div key={index} className="flex flex-col bg-brand-dark border border-brand-dark-border p-6 group hover:border-brand-accent/50 transition-colors">
                                        <div className="text-gray-600 mb-6 group-hover:text-brand-accent transition-colors">{skill.icon}</div>
                                        <span className="font-sans text-brand-light text-sm font-medium">{skill.name}</span>
                                        <span className="font-sans font-light text-xxs text-gray-500 uppercase tracking-widest mt-2">{skill.level}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
                            <h3 className="font-sans text-xxs text-gray-500 tracking-super-wide uppercase mb-8 border-b border-brand-dark-border pb-6">
                                Infrastructure & Tools
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {backendTools.map((tool, index) => (
                                    <div key={index} className="flex flex-col bg-brand-dark border border-brand-dark-border p-6 group hover:border-gray-500 transition-colors">
                                        <div className="text-gray-600 mb-6 group-hover:text-gray-400 transition-colors">{tool.icon}</div>
                                        <span className="font-sans text-brand-light text-sm font-medium">{tool.name}</span>
                                        <span className="font-sans font-light text-xxs text-gray-500 uppercase tracking-widest mt-2">{tool.level}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                    {/* Right side: Credentials */}
                    <div className="lg:col-span-4 flex flex-col gap-12 lg:pt-0 pt-8">
                        
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                            <h3 className="font-sans text-xxs text-gray-500 tracking-super-wide uppercase mb-8 border-b border-brand-dark-border pb-6">
                                Fundamentals
                            </h3>
                            <div className="flex flex-col gap-5">
                                {fundamentals.map((lang, index) => (
                                    <div key={index} className="flex items-center justify-between border border-brand-dark-border bg-brand-dark p-5 hover:bg-brand-dark-surface transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="text-gray-400">{lang.icon}</div>
                                            <span className="font-sans text-brand-light text-sm font-light">{lang.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                            <h3 className="font-sans text-xxs text-gray-500 tracking-super-wide uppercase mb-8 border-b border-brand-dark-border pb-6">
                                Formal Education
                            </h3>
                            <div className="flex flex-col gap-8">
                                {education.map((edu, index) => (
                                    <div key={index} className="flex flex-col relative pl-6 border-l border-brand-accent/40">
                                        <span className="font-mono text-xxs tracking-widest text-brand-accent mb-2">{edu.year}</span>
                                        <h4 className="font-sans text-brand-light text-sm font-medium mb-1.5">{edu.title}</h4>
                                        <span className="font-sans text-xs text-gray-500 font-light leading-relaxed">{edu.institution}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}
