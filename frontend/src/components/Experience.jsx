import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "MERN Stack Developer Intern",
            company: "Least Action Company Pvt. Ltd.",
            location: "Remote",
            period: "Oct 2025 – Jan 2026",
            logItems: [
                "Architected and deployed two enterprise-grade platforms (Lumora CMS & LuxeEstate) using the MERN stack, managing the full development lifecycle from database design to frontend execution.",
                "Engineered premium, cinematic user experiences utilizing React, Tailwind CSS, and Framer Motion, specifically focusing on smooth scroll-driven animations and dynamic state management.",
                "Implemented secure backend infrastructures with Node.js and Express, enforcing strict JWT authentication and Role-Based Access Control (RBAC) for distinct admin, agent, and client dashboards.",
                "Designed scalable MongoDB schemas to handle complex relational data, powering high-performance property filtering algorithms and automated real-time booking notifications.",
                "Optimized heavy media delivery workflows by integrating Cloudinary for automated high-resolution image processing, drastically reducing page load times."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-brand-dark-surface border-t border-brand-dark-border">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 lg:mb-24"
                >
                    <span className="font-sans text-xxs text-gray-500 tracking-super-wide uppercase mb-6 block">
                        Experience
                    </span>
                    <h2 className="display-heading text-5xl lg:text-7xl font-bold text-brand-light leading-[1.1] tracking-tight">
                        Professional<br /> Background
                    </h2>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            key={exp.id}
                            className="bg-brand-dark border border-brand-dark-border p-10 lg:p-14 relative group hover:border-brand-accent/40 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-5 border-l border-b border-brand-dark-border bg-brand-dark-surface group-hover:bg-brand-accent/10 transition-colors duration-500">
                                <Briefcase size={22} className="text-brand-accent group-hover:text-brand-light transition-colors" strokeWidth={1.5} />
                            </div>

                            <div className="grid lg:grid-cols-4 gap-12">
                                <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-brand-dark-border pb-8 lg:pb-0 pr-8">
                                    <h3 className="font-display font-medium text-2xl text-brand-light mb-4">{exp.company}</h3>
                                    <div className="font-sans text-xs text-brand-accent mb-8 flex items-center gap-3 tracking-widest font-light">
                                        <Calendar size={14} strokeWidth={1.5} /> {exp.period}
                                    </div>
                                    <div className="space-y-6 font-sans text-xxs text-gray-500 uppercase tracking-super-wide">
                                        <div>
                                            <p className="mb-2 text-brand-muted">Status</p>
                                            <p className="font-sans text-brand-light font-light capitalize tracking-normal text-base">Completed</p>
                                        </div>
                                        <div>
                                            <p className="mb-2 text-brand-muted">Location</p>
                                            <p className="font-sans text-brand-light font-light capitalize tracking-normal text-base">{exp.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-3">
                                    <h4 className="font-display font-medium text-2xl text-brand-light mb-8 tracking-wide">{exp.role}</h4>
                                    <ul className="space-y-6">
                                        {exp.logItems.map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-400 font-sans text-base font-light leading-relaxed">
                                                <span className="text-brand-accent mr-6 mt-1.5 font-sans text-xxs select-none uppercase tracking-super-wide">{i+1}</span>
                                                <span className="flex-1">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
