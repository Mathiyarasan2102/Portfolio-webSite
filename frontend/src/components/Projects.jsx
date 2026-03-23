import { ExternalLink, Github, Play, X } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import weatherAppImg from '../assets/prjImg/weatherApp.png'
import taskManagerImg from '../assets/prjImg/taskManager.png'
import appleCloneImg from '../assets/prjImg/appleClone.png'
import nostraImg from '../assets/prjImg/nostra.png'
import greendenImg from '../assets/prjImg/greenden.png'
import udemyCloneImg from '../assets/prjImg/udemyClone.png'
import quickChatImg from '../assets/prjImg/quickChat.png'
import netflixLoginImg from '../assets/prjImg/netflixLogin.png'
import formValidationImg from '../assets/prjImg/formValidation.png'
import novamart from '../assets/prjImg/novamart.png'
import lumoraImg from '../assets/prjImg/lumora.png'
import luxeEstateImg from '../assets/prjImg/luxeEstate.png'

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);

    const featuredProjects = [
        {
            id: 11,
            isInternship: true,
            title: "Lumora Photography CMS",
            type: "Enterprise Portfolio System",
            description: "A comprehensive photography portfolio system with a cinematic frontend and robust admin dashboard. Engineered a premium UX with smooth scrolling and Framer Motion animations.",
            problem: "Professional studios lacked a high-performance, branded platform to manage bookings.",
            responsibility: "Full Stack Architecture",
            techChallenge: "Implementing secure JWT auth for admin panels and real-time automated notifications.",
            image: lumoraImg,
            technologies: ["React", "Node.js", "Express", "MongoDB", "Framer Motion", "Cloudinary"],
            git: "https://github.com/Mathiyarasan2102/lumora-photography-cms",
            live: "https://lumora-photography-cms.vercel.app/",
            demo: "https://www.youtube.com/embed/4ZtH75DaCUo?si=fLB8dsmm2q6mGJMd&autoplay=1",
        },
        {
            id: 12,
            isInternship: true,
            title: "LuxeEstate Platform",
            type: "Real Estate Marketplace",
            description: "A modern, full-stack real estate marketplace designed with a sophisticated UI, robust property management tools, and comprehensive role-based access control for Buyers, Agents, and Admins.",
            problem: "Market needed a high-performance platform to securely manage diverse roles in real estate transactions.",
            responsibility: "Full Stack Architecture",
            techChallenge: "Implementing secure RBAC dashboards and complex, multi-parameter advanced search filtering.",
            image: luxeEstateImg,
            technologies: ["React", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
            git: "https://github.com/Mathiyarasan2102/LuxeEstate-RealEstate-Website",
            live: "https://luxe-estate-real-estate-website-fro.vercel.app",
            demo: "https://www.youtube.com/embed/IWvSL2BFWMQ?autoplay=1",
        },
        {
            id: 10,
            title: "NovaMart E-commerce",
            type: "Scalable Full Stack Platform",
            description: "Built a robust e-commerce application featuring a comprehensive admin dashboard for dynamic product catalogs and order lifecycle management.",
            problem: "Existing solutions lacked real-time state management for complex cart scaling.",
            responsibility: "Full Stack Architecture",
            techChallenge: "Integrating PayPal transactions statefully and optimizing image delivery via Cloudinary.",
            image: novamart,
            technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "PayPal API"],
            git: "https://github.com/Mathiyarasan2102/novamart-mern-ecommerce",
            live: "https://novamart-mern-ecommerce.vercel.app",
            demo: "https://www.youtube.com/embed/bIQz0PakTH4?autoplay=1",
        },
        {
            id: 7,
            title: "QuickChat Realtime",
            type: "Low-Latency Communication",
            description: "Engineered a real-time messaging platform using the MERN stack and Socket.io, with a strict focus on low-latency updates and cryptographic authentication.",
            problem: "Users require instant messaging without page refreshes under heavy concurrency.",
            responsibility: "Backend & WebSocket Eng.",
            techChallenge: "Handling concurrent socket connection states and real-time synchronization.",
            image: quickChatImg,
            technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Bcrypt"],
            git: "https://github.com/Mathiyarasan2102/ChatApp",
            live: "https://quick-chat-app-puce.vercel.app",
            demo: "https://www.youtube.com/embed/KH4CRY7E8m4?autoplay=1",
        }
    ];

    const archivedProjects = [
        {
            title: "ListTask Manager",
            description: "Smart task organizer featuring drag-and-drop mechanics and priority tagging.",
            image: taskManagerImg,
            git: "https://github.com/Mathiyarasan2102/Task-Management-App",
            live: "https://task-management-app-omega-smoky.vercel.app/",
            demo: "https://www.youtube.com/embed/tet4gafprag?autoplay=1",
        },
        {
            title: "Weather Dash",
            description: "API virtualization dashboard for real-time global weather data.",
            image: weatherAppImg,
            git: "https://github.com/Mathiyarasan2102/Weather-App",
            live: "https://weather-app-seven-eta-19.vercel.app/",
            demo: "https://www.youtube.com/embed/dHqgUSAjn60?autoplay=1",
        },
        {
            title: "Apple Landing Clone",
            description: "High-fidelity UI replica focusing on complex scroll-driven animations.",
            image: appleCloneImg,
            git: "https://github.com/Mathiyarasan2102/Apple-clone-website",
            live: "https://clone-apple-lilac.vercel.app/",
            demo: "https://www.youtube.com/embed/eJ9K_drN-Xc?autoplay=1",
        },
        {
            title: "Netflix Auth Flow",
            description: "Secure, stateful authentication interface with strict form validation.",
            image: netflixLoginImg,
            git: "https://github.com/Mathiyarasan2102/Netflix-Login-Page",
            live: "https://netflix-login-page-2rgp.vercel.app/",
            demo: "https://www.youtube.com/embed/UxYR7gF87yQ?autoplay=1",
        }
    ];

    return (
        <section id="projects" className="py-24 bg-brand-dark-surface border-t border-brand-dark-border">
            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 lg:mb-24"
                >
                    <span className="font-sans text-xs text-gray-500 tracking-super-wide uppercase mb-4 block">
                        Selected Works
                    </span>
                    <h2 className="display-heading text-4xl md:text-5xl lg:text-7xl font-bold text-brand-light leading-none">
                        Featured Projects
                    </h2>
                </motion.div>

                {/* Main Case Studies */}
                <div className="space-y-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            key={index}
                            className="bg-brand-dark border border-brand-dark-border p-6 lg:p-10 group hover:border-gray-700 transition-colors duration-500"
                        >
                            <div className="grid lg:grid-cols-12 gap-10">
                                
                                <div className="lg:col-span-7 relative z-10 hidden md:block">
                                    <div className="relative aspect-video overflow-hidden border border-brand-dark-border bg-brand-dark-surface">
                                        <div className="absolute inset-0 bg-transparent group-hover:bg-brand-accent/10 z-10 transition-colors duration-500 pointer-events-none"></div>
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-duration-700 grayscale group-hover:grayscale-0" />
                                        

                                    </div>
                                </div>

                                <div className="lg:col-span-5 flex flex-col justify-center relative z-20">
                                    {project.isInternship && (
                                        <span className="font-sans text-xxs text-brand-accent-hover border border-brand-accent-hover/30 bg-brand-accent-hover/10 px-2 py-1 uppercase tracking-widest w-fit mb-4 block">
                                            Internship Project
                                        </span>
                                    )}
                                    <h3 className="display-heading text-3xl font-bold text-white mb-2">{project.title}</h3>
                                    <span className="font-sans text-xs text-brand-muted tracking-widest uppercase block mb-6">{project.type}</span>
                                    
                                    <div className="bg-brand-dark-surface border left-0 border-brand-dark-border p-5 lg:-ml-12 lg:mr-0 z-30 mb-6 font-sans text-sm md:text-base text-gray-300 shadow-2xl relative">
                                        {project.description}
                                    </div>

                                    <div className="space-y-3 font-sans text-xs text-gray-400 mb-6">
                                        <p><span className="text-brand-light uppercase">Role</span> &mdash; {project.responsibility}</p>
                                        <p><span className="text-brand-accent uppercase">Challenge</span> &mdash; {project.techChallenge}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="font-mono text-xxs text-gray-400 bg-brand-dark-border px-2 py-1 uppercase tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap items-center gap-6 font-sans text-xs tracking-widest uppercase mt-6">
                                        <a href={project.git} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-brand-accent transition-colors"><Github size={16} /> Source</a>
                                        <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-brand-accent transition-colors"><ExternalLink size={16} /> Visit</a>
                                        {project.demo && (
                                            <button onClick={() => setActiveVideo(project.demo)} className="flex items-center gap-2 text-brand-accent hover:text-white transition-colors cursor-pointer"><Play size={16} fill="currentColor" /> Demo</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Log */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24"
                >
                    <h3 className="font-display font-medium text-2xl text-brand-light mb-8 border-b border-brand-dark-border pb-4">
                        Archived Projects
                    </h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {archivedProjects.map((project, idx) => (
                            <div key={idx} className="border border-brand-dark-border bg-brand-dark-surface p-6 group hover:border-brand-accent/50 transition-colors">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="font-sans font-bold text-white text-sm">{project.title}</h4>
                                    <a href={project.git} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white"><Github size={14}/></a>
                                </div>
                                <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                   <a href={project.live} target="_blank" rel="noreferrer" className="font-sans text-xxs text-brand-accent hover:text-brand-light uppercase tracking-widest cursor-pointer">Visit Site</a>
                                   {project.demo && (
                                       <button onClick={() => setActiveVideo(project.demo)} className="text-gray-500 hover:text-brand-light cursor-pointer"><Play size={12}/></button>
                                   )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
                        onClick={() => setActiveVideo(null)}
                    >
                        <div
                            className="relative w-full max-w-5xl bg-brand-dark rounded-none border border-gray-800 shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-brand-dark-surface">
                                <h3 className="text-brand-light font-sans tracking-widest text-xs uppercase flex items-center gap-2">
                                    <Play size={14} className="text-brand-accent fill-brand-accent" />
                                    Project Demo
                                </h3>
                                <button
                                    onClick={() => setActiveVideo(null)}
                                    className="text-gray-400 hover:text-brand-accent transition-colors cursor-pointer"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="relative pt-[56.25%] bg-black">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-sans tracking-widest text-xs text-brand-accent animate-pulse">Loading Video...</span>
                                </div>
                                <iframe
                                    className="absolute inset-0 w-full h-full z-10"
                                    src={activeVideo}
                                    title="Project Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
}
