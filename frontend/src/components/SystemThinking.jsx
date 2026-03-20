import { motion } from "framer-motion";

export default function SystemThinking() {
    const systems = [
        { id: "01", title: "RESTful Architecture", desc: "Designing stateless, cacheable, and uniform interfaces." },
        { id: "02", title: "Zero-Trust Auth", desc: "Implementing strict JWT-based authorization boundaries." },
        { id: "03", title: "Micro-Service Ready", desc: "Building modular backends prepared for horizontal scaling." },
        { id: "04", title: "Optimized Schemas", desc: "Engineering MongoDB schemas for high-speed read/write performance." },
        { id: "05", title: "State Predictability", desc: "Managing complex frontend data flows statefully." },
        { id: "06", title: "CI/CD Deployment", desc: "Automating builds and shipping via Vercel and Render." }
    ];

    return (
        <section className="py-24 bg-brand-dark-surface border-t border-brand-dark-border overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <span className="font-sans text-xxs text-gray-500 tracking-super-wide uppercase mb-6 block">
                            Approach
                        </span>
                        <h2 className="display-heading text-5xl lg:text-7xl font-bold text-brand-light leading-[1.1] tracking-tight">
                            Engineering<br /> Philosophy
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {systems.map((item, index) => (
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            key={index} 
                            className="bg-brand-dark border border-brand-dark-border p-10 group hover:border-brand-accent/40 transition-colors duration-500 relative"
                        >
                            <span className="absolute top-6 right-6 font-mono text-xxs tracking-widest text-[#1a1a1a] group-hover:text-brand-accent/50 transition-colors duration-500">
                                {item.id}
                            </span>
                            <h3 className="font-display font-medium text-brand-light text-xl mb-4 mt-2 tracking-wide group-hover:text-brand-accent transition-colors duration-500">
                                {item.title}
                            </h3>
                            <p className="font-sans font-light text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-500">
                                {item.desc}
                            </p>
                            <div className="absolute bottom-0 left-0 h-[2px] bg-brand-accent transition-all duration-700 w-0 group-hover:w-full opacity-50"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
