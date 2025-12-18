import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useState } from 'react';

import p1 from '../assets/prjImg/p1.png'
import p2 from '../assets/prjImg/p2.png'
import p3 from '../assets/prjImg/p3.png'
import p4 from '../assets/prjImg/p4.png'
import p5 from '../assets/prjImg/p5.png'
import p6 from '../assets/prjImg/p6.png'
import p7 from '../assets/prjImg/prj7 - Copy.png'
import p8 from '../assets/prjImg/p8.png'
import p9 from '../assets/prjImg/p9.png'

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);

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
            id: 7,
            title: "QuickChat Realtime App",
            type: "MERN Chat Application",
            description: "Built a real-time messaging platform to facilitate instant communication using the MERN stack and Socket.io, with a focus on low-latency updates and secure authentication.",
            problem: "Users require instant, reliable messaging without page refreshes.",
            responsibility: "Full Stack Development",
            techChallenge: "Handling concurrent socket connections and real-time state synchronization.",
            image: p7,
            technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
            git: "https://github.com/Mathiyarasan2102/ChatApp",
            live: "https://quick-chat-app-puce.vercel.app"
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
            technologies: ["React", "Tailwind CSS", "OpenWeather API"],
            git: "https://github.com/Mathiyarasan2102/Weather-App",
            live: "https://weather-app-seven-eta-19.vercel.app/"
        },
        {
            id: 2,
            title: "Task Management App",
            type: "Productivity Tool",
            description: "Built a collaborative task manager to streamline team productivity using React and Firebase, with a focus on real-time updates and intuitive UI.",
            problem: "Teams struggle to track tasks efficiently in real-time.",
            responsibility: "Frontend & Integration",
            techChallenge: "Optimizing Firestore reads/writes for real-time responsiveness.",
            image: p2,
            technologies: ["React", "Tailwind CSS", "Firebase"],
            git: "https://github.com/Mathiyarasan2102/Task-Management-App",
            live: "https://task-management-app-omega-smoky.vercel.app/"
        },
    ];

    const otherProjects = [
        {
            id: 8,
            title: "Netflix Login Interface",
            description: "Responsive login interface with validation and seamless navigation.",
            image: p8,
            technologies: ["React", "Tailwind CSS"],
            git: "https://github.com/Mathiyarasan2102/Netflix-Login-Page",
            live: "https://netflix-login-page-2rgp.vercel.app/"
        },
        {
            id: 3,
            title: "Apple Homepage Clone",
            description: "High-fidelity replica of Apple's landing page featuring smooth animations.",
            image: p3,
            technologies: ["React", "Tailwind CSS"],
            git: "https://github.com/Mathiyarasan2102/Apple-clone-website",
            live: "https://clone-apple-lilac.vercel.app/"
        },
        {
            id: 9,
            title: "Smart Form Validation",
            description: "Dynamic form with instant input validation and character counting logic.",
            image: p9,
            technologies: ["HTML5", "CSS3", "JavaScript"],
            git: "https://github.com/Mathiyarasan2102/form-validation",
            live: "https://mathiyarasan2102.github.io/form-validation/"
        },
        {
            id: 4,
            title: "Nostra E-Commerce",
            description: "Responsive e-commerce landing page optimized for mobile conversions.",
            image: p4,
            technologies: ["HTML", "CSS", "JavaScript"],
            git: "https://github.com/Mathiyarasan2102/Nostra-Project",
            live: "https://mathiyarasan2102.github.io/Nostra-Project/"
        },
        {
            id: 5,
            title: "Greenden Plants",
            description: "Modern e-commerce showcase for plant products with clean design.",
            image: p5,
            technologies: ["HTML5", "CSS3"],
            git: "https://github.com/Mathiyarasan2102/Greenden-Project",
            live: "https://mathiyarasan2102.github.io/Greenden-Project/"
        },
        {
            id: 6,
            title: "Udemy Clone",
            description: "Instructional platform UI replica with course listing structure.",
            image: p6,
            technologies: ["HTML5", "CSS3"],
            git: "https://github.com/Mathiyarasan2102/Udemy-clone-website",
            live: "https://mathiyarasan2102.github.io/Udemy-clone-website/"
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
                            <div className="relative overflow-hidden h-56 flex-shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                                />
                                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <a href={project.git} target="_blank" rel="noopener noreferrer">
                                        <button className="w-8 h-8 bg-white/90 rounded-full border-green-300 border flex items-center justify-center hover:bg-white transition-all duration-300">
                                            <Github className="w-4 h-4 text-green-500" />
                                        </button>
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                        <button className="w-8 h-8 bg-white/90 border-green-300 border rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
                                            <ExternalLink className="w-6 h-5 text-green-500" />
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
                    {otherProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`group bg-slate-900/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden border border-slate-800 hover:border-slate-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${(index + featuredProjects.length) * 100}ms` }}
                        >
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                                        {project.title}
                                    </h4>
                                    <div className="flex gap-2">
                                        <a href={project.git} target="_blank" className="text-gray-400 hover:text-white"><Github size={16} /></a>
                                        <a href={project.live} target="_blank" className="text-gray-400 hover:text-white"><ExternalLink size={16} /></a>
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
