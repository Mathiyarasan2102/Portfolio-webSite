import { ExternalLink, Github, Play, X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

import p1 from '../assets/prjImg/p1.png'
import p2 from '../assets/prjImg/p2.png'
import p3 from '../assets/prjImg/p3.png'
import p4 from '../assets/prjImg/p4.png'
import p5 from '../assets/prjImg/p5.png'
import p6 from '../assets/prjImg/p6.png'
import p7 from '../assets/prjImg/prj7 - Copy.png'
import p8 from '../assets/prjImg/p8.png'
import p9 from '../assets/prjImg/p9.png'
import novamart from '../assets/prjImg/novamart.png'
import novamartVideo from '../assets/prjVideo/novamart.mp4'
import quickChatVideo from '../assets/prjVideo/quickchat.mp4'
import weatherVideo from '../assets/prjVideo/weather.mp4'
import listTaskVideo from '../assets/prjVideo/listtask.mp4'
import netflixVideo from '../assets/prjVideo/netflix.mp4'
import appleVideo from '../assets/prjVideo/apple.mp4'
import formVideo from '../assets/prjVideo/form.mp4'
import nostraVideo from '../assets/prjVideo/nostra.mp4'
import greendenVideo from '../assets/prjVideo/greenden.mp4'
import udemyVideo from '../assets/prjVideo/udemy.mp4'

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);
    const newProjectsRef = useRef(null);

    useEffect(() => {
        if (showAll && newProjectsRef.current) {
            if (window.innerWidth < 768) {
                setTimeout(() => {
                    const yOffset = -100; // Adjustment for header/spacing
                    const element = newProjectsRef.current;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }, 100);
            }
        }
    }, [showAll]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        const element = document.getElementById("projects");
        if (element) observer.observe(element);
        return () => observer.disconnect();
    }, []);

    const featuredProjects = [
        {
            id: 10,
            title: "NovaMart - Full Stack E-commerce",
            type: "Full Stack E-commerce Platform",
            description: "Built a scalable e-commerce application featuring a comprehensive admin dashboard for dynamic product and order management.",
            problem: "Need for a scalable e-commerce platform with dynamic management capabilities.",
            responsibility: "Full Stack Development",
            techChallenge: "Integrating PayPal for real-time transactions and optimizing UI with Cloudinary.",
            image: novamart,
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "Cloudinary", "PayPal"],
            git: "https://github.com/Mathiyarasan2102/novamart-mern-ecommerce",
            live: "https://novamart-mern-ecommerce.vercel.app",
            demo: novamartVideo,
            isLocalVideo: true
        },
        {
            id: 7,
            title: "QuickChat Realtime Messaging App",
            type: "MERN Chat Application",
            description: "Built a real-time messaging platform to facilitate instant communication using the MERN stack and Socket.io, with a focus on low-latency updates and secure authentication.",
            problem: "Users require instant, reliable messaging without page refreshes.",
            responsibility: "Full Stack Development",
            techChallenge: "Handling concurrent socket connections and real-time state synchronization.",
            image: p7,
            technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Bcrypt"],
            git: "https://github.com/Mathiyarasan2102/ChatApp",
            live: "https://quick-chat-app-puce.vercel.app",
            demo: quickChatVideo,
            isLocalVideo: true
        },
        {
            id: 1,
            title: "Weather Dashboard",
            type: "Data Visualization Web App",
            description: "Built a weather dashboard to provide accurate location-based forecasts using React and OpenWeatherMap API, focusing on responsive design and API data visualization.",
            problem: "Need for accurate, real-time weather data visualization across devices.",
            responsibility: "Frontend Development",
            techChallenge: "Efficiently managing asynchronous API state and error handling.",
            image: p1,
            technologies: ["React.js", "JavaScript", "Tailwind CSS", "OpenWeather API"],
            git: "https://github.com/Mathiyarasan2102/Weather-App",
            live: "https://weather-app-seven-eta-19.vercel.app/",
            demo: weatherVideo,
            isLocalVideo: true
        },
    ];

    const otherProjects = [
        {
            id: 2,
            title: "ListTask - Task Manager",
            description: "Smart task organizer featuring drag-and-drop, priority tagging, and local storage persistence.",
            image: p2,
            technologies: ["React.js", "JavaScript", "Tailwind CSS"],
            git: "https://github.com/Mathiyarasan2102/Task-Management-App",
            live: "https://task-management-app-omega-smoky.vercel.app/",
            demo: listTaskVideo,
            isLocalVideo: true
        },
        {
            id: 8,
            title: "Netflix Login Interface",
            description: "Responsive login interface with validation and seamless navigation.",
            image: p8,
            technologies: ["React.js", "JavaScript", "Tailwind CSS", "Express.js", "Node.js"],
            git: "https://github.com/Mathiyarasan2102/Netflix-Login-Page",
            live: "https://netflix-login-page-2rgp.vercel.app/",
            demo: netflixVideo,
            isLocalVideo: true
        },
        {
            id: 3,
            title: "Apple Homepage Clone",
            description: "High-fidelity replica of Apple's landing page featuring smooth animations.",
            image: p3,
            technologies: ["React.js", "Tailwind CSS"],
            git: "https://github.com/Mathiyarasan2102/Apple-clone-website",
            live: "https://clone-apple-lilac.vercel.app/",
            demo: appleVideo,
            isLocalVideo: true
        },
        {
            id: 9,
            title: "Smart Form Validation",
            description: "Dynamic form with instant input validation and character counting logic.",
            image: p9,
            technologies: ["HTML5", "CSS3", "JavaScript"],
            git: "https://github.com/Mathiyarasan2102/form-validation",
            live: "https://mathiyarasan2102.github.io/form-validation/",
            demo: formVideo,
            isLocalVideo: true
        },
        {
            id: 4,
            title: "Nostra E-Commerce",
            description: "Responsive e-commerce landing page optimized for mobile conversions.",
            image: p4,
            technologies: ["HTML5", "CSS3", "JavaScript"],
            git: "https://github.com/Mathiyarasan2102/Nostra-Project",
            live: "https://mathiyarasan2102.github.io/Nostra-Project/",
            demo: nostraVideo,
            isLocalVideo: true
        },
        {
            id: 5,
            title: "Greenden Plants",
            description: "Modern e-commerce showcase for plant products with clean design.",
            image: p5,
            technologies: ["HTML5", "CSS3"],
            git: "https://github.com/Mathiyarasan2102/Greenden-Project",
            live: "https://mathiyarasan2102.github.io/Greenden-Project/",
            demo: greendenVideo,
            isLocalVideo: true
        },
        {
            id: 6,
            title: "Udemy Clone",
            description: "Instructional platform UI replica with course listing structure.",
            image: p6,
            technologies: ["HTML5", "CSS3"],
            git: "https://github.com/Mathiyarasan2102/Udemy-clone-website",
            live: "https://mathiyarasan2102.github.io/Udemy-clone-website/",
            demo: udemyVideo,
            isLocalVideo: true
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Scalable applications built with modern architecture and performance in mind.
                    </p>
                </div>

                {/* Featured Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-slate-700 hover:border-green-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="relative overflow-hidden aspect-video flex-shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-300"
                                />
                                {/* Video Hint Overlay */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] cursor-pointer z-10"
                                    onClick={() => setActiveVideo(project.demo || null)}
                                >
                                    <div className="bg-slate-900/80 px-4 py-2 rounded-full border border-green-500/50 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-green-600 hover:border-green-400">
                                        <Play size={16} className="text-green-400 fill-green-400 group-hover:text-white group-hover:fill-white transition-colors" />
                                        <span className="text-white text-sm font-medium">View Project Video</span>
                                    </div>
                                </div>
                                <div className="absolute top-3 right-3 flex gap-2 transition-all duration-300 z-20">
                                    {project.demo && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveVideo(project.demo);
                                            }}
                                            className="w-8 h-8 bg-transparent rounded-full border border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 group/btn md:hidden"
                                            title="Watch Demo"
                                        >
                                            <Play className="w-4 h-4 text-green-400 group-hover/btn:text-white fill-current" />
                                        </button>
                                    )}
                                    <a href={project.git} target="_blank" rel="noopener noreferrer">
                                        <button className="w-8 h-8 bg-transparent rounded-full border border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 group/btn" title="View Code">
                                            <Github className="w-4 h-4 text-green-400 group-hover/btn:text-white" />
                                        </button>
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                        <button className="w-8 h-8 bg-transparent border border-green-500 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 group/btn" title="Live Demo">
                                            <ExternalLink className="w-5 h-5 text-green-400 group-hover/btn:text-white" />
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                                        {project.type}
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-all duration-300">
                                    {project.title}
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="space-y-2 mb-6 text-xs text-gray-400 border-t border-slate-800 pt-4 mt-auto">
                                    <p><strong className="text-slate-300">Problem:</strong> {project.problem}</p>
                                    <p><strong className="text-slate-300">Role:</strong> {project.responsibility}</p>
                                    <p><strong className="text-slate-300">Challenge:</strong> {project.techChallenge}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="bg-slate-800 text-gray-300 px-2 py-1 rounded text-xs font-medium border border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other Projects Section */}
                <div className={`text-center mb-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Other Projects
                    </h3>
                    <p className="text-gray-400 text-base">
                        UI Clones & Small Applications
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(showAll ? otherProjects : otherProjects.slice(0, 3)).map((project, index) => (
                        <div
                            key={index}
                            ref={index === 3 ? newProjectsRef : null}
                            className={`group relative bg-slate-900/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden border border-slate-800 hover:border-slate-600 animate-fadeInUp ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{
                                transitionDelay: `${index < 3 ? (index + featuredProjects.length) * 100 : (index - 3) * 150}ms`,
                                animationDelay: `${index < 3 ? (index + featuredProjects.length) * 100 : (index - 3) * 150}ms`
                            }}
                        >
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                                        {project.title}
                                    </h4>
                                    <div className="flex gap-2">
                                        {project.demo && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveVideo(project.demo);
                                                }}
                                                className="text-gray-400 cursor-pointer hover:text-green-400 transition-colors"
                                                title="View Demo"
                                            >
                                                <Play size={16} />
                                            </button>
                                        )}
                                        <a href={project.git} target="_blank" className="text-gray-400 hover:text-white" title="View Code"><Github size={16} /></a>
                                        <a href={project.live} target="_blank" className="text-gray-400 hover:text-white" title="Live Demo"><ExternalLink size={16} /></a>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech, idx) => (
                                        <span key={idx} className="text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {/* Video Hint Badge Removed from here to fix overlap */}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-2 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-green-500 transition-all text-sm font-medium"
                    >
                        {showAll ? 'Show Less' : 'View More Projects'}
                    </button>
                </div>
            </div>

            {/* Video Modal */}
            {
                activeVideo && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
                        onClick={() => setActiveVideo(null)}
                    >
                        <div
                            className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-4 border-b border-slate-700 bg-slate-900/50">
                                <h3 className="text-white font-semibold flex items-center gap-2">
                                    <Play size={18} className="text-green-400 fill-green-400" />
                                    Project Demo
                                </h3>
                                <button
                                    onClick={() => setActiveVideo(null)}
                                    className="text-gray-400 hover:text-white hover:bg-red-500/20 p-2 rounded-full transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="relative pt-[56.25%] bg-black">
                                {(typeof activeVideo === 'string' && (activeVideo.includes('youtube.com') || activeVideo.includes('vimeo.com'))) ? (
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={activeVideo}
                                        title="Project Demo"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <video
                                        className="absolute inset-0 w-full h-full"
                                        controls
                                        autoPlay
                                        src={activeVideo}
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        </div>
                    </div>
                )
            }
        </section >
    );
}
