import { motion } from "framer-motion";
import img from "./assets/img.jpg";

export default function About() {
    const items = [
        { label: "Availability", value: "Open for Opportunities" },
        { label: "Location", value: "Trichy, Tamil Nadu" },
        { label: "Education", value: "B.E. Computer Science" },
        { label: "Focus", value: "Scalable MERN Architectures" },
    ];

    return (
        <section id="about" className="py-24 bg-brand-dark-surface relative overflow-hidden text-white border-t border-brand-dark-border">
            {/* Minimal Grid overlay */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
                <div className="absolute top-0 left-[30%] w-[1px] h-full bg-brand-dark-border"></div>
                <div className="absolute top-[40%] left-0 w-full h-[1px] bg-brand-dark-border"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10 w-full max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Typography / Visuals */}
                    <div className="lg:col-span-6 border-r border-brand-dark-border pr-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <span className="font-sans text-xxs text-gray-500 tracking-super-wide uppercase mb-6 block">
                                Introduction
                            </span>
                            <h2 className="display-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-12 tracking-tight text-brand-light">
                                Architect.<br /> <span className="font-light italic text-gray-500">Not just a</span><br /> Coder.
                            </h2>
                            <div className="relative w-full max-w-sm aspect-[4/5] p-2 bg-brand-dark border border-brand-dark-border group overflow-hidden">
                                <div className="absolute inset-0 bg-transparent group-hover:bg-brand-accent/5 z-10 transition-colors duration-700 pointer-events-none"></div>
                                <img src={img} alt="Mathiyarasan" className="w-full h-full object-cover filter grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-[0.5] transition-all duration-1000 group-hover:scale-[1.03] scale-100 origin-center relative z-0" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-6 flex flex-col justify-start lg:pt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-12"
                        >
                            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                                I engineer highly scalable, responsive, and robust web applications. My focus crosses the entire stack—delivering <strong className="text-brand-light font-medium">clean React frontend experiences</strong> and backing them with <strong className="text-brand-light font-medium">secure, optimal Node.js architectures</strong>.
                            </p>
                            
                            <div className="border-t border-brand-dark-border pt-10">
                                <h3 className="font-sans text-xs text-gray-500 tracking-super-wide uppercase mb-8">Operational Standards</h3>
                                <ul className="space-y-6 font-sans text-gray-400 font-light">
                                    <li className="flex items-start gap-6 group">
                                        <span className="text-brand-accent font-mono text-sm mt-0.5 group-hover:text-white transition-colors">01</span>
                                        <span className="leading-relaxed">Break down complex real-world logic into scalable, modular features.</span>
                                    </li>
                                    <li className="flex items-start gap-6 group">
                                        <span className="text-brand-accent font-mono text-sm mt-0.5 group-hover:text-white transition-colors">02</span>
                                        <span className="leading-relaxed">Write strictly clean, maintainable, and highly reusable code.</span>
                                    </li>
                                    <li className="flex items-start gap-6 group">
                                        <span className="text-brand-accent font-mono text-sm mt-0.5 group-hover:text-white transition-colors">03</span>
                                        <span className="leading-relaxed">Obsess over performance optimization and intelligent schema design.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-10 border-t border-brand-dark-border">
                                {items.map((item, index) => (
                                    <div key={index} className="flex flex-col">
                                        <span className="text-xxs text-gray-500 uppercase tracking-mega-wide font-sans mb-3">{item.label}</span>
                                        <span className="text-sm md:text-base text-brand-light font-sans font-light">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-10 flex flex-col sm:flex-row gap-6">
                                <a href="/Mathiyarasan_P_MERN_Stack_Developer_Resume.pdf" download className="primary-button py-4 px-10 inline-flex justify-center text-xs tracking-super-wide">
                                    Download Resume
                                </a>
                                <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="luxury-button py-4 px-10 inline-flex justify-center text-xs tracking-super-wide">
                                    Get In Touch
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
