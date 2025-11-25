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
    const [showAll, setShowAll] = useState(null);

    useEffect(() => {
        if (showAll === null) return;
        if (showAll) {
            const target = document.getElementById("projects-more");
            scrollToWithOffset(target, 120);
        } else {
            const section = document.getElementById("projects");
            scrollToWithOffset(section, 120);
        }
    }, [showAll]);

    const scrollToWithOffset = (el, offset = 80) => {
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio) setIsVisible(true);
            },
            { threshold: 0.3 }
        );
        const element = document.getElementById("projects");
        if (element) observer.observe(element);
        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            id: 7,
            title: "QuickChat Realtime Chat App",
            description: "A dynamic real-time messaging application built with the MERN stack and Socket.io, facilitating instant communication and secure authentication via JWT. Designed with Tailwind CSS for a responsive, modern interface and seamless connectivity across devices.",
            image: p7,
            technologies: ["ReactJs", "MongoDB", "ExpressJs", "NodeJs", "Tailwind CSS", "SocketIO","JWT","Bcrypt"],
            category: "MERN Chat App",
            git: "https://github.com/Mathiyarasan2102/ChatApp",
            live: "https://quick-chat-app-puce.vercel.app"
        },
        {
            id: 1,
            title: "Weather App",
            description: "A real-time weather forecasting application built with React and Vite, utilizing the OpenWeatherMap API to deliver accurate weather updates. Designed with a clean and responsive UI using Tailwind CSS.",
            image: p1,
            technologies: ["React", "Tailwind CSS", "OpenWeather API"],
            category: "Web App",
            git: "https://github.com/Mathiyarasan2102/Weather-App",
            live: "https://weather-app-seven-eta-19.vercel.app/"
        },
        {
            id: 2,
            title: "Task Management",
            description: "A full-stack task management application built with React and Vite, offering user authentication, task creation, editing, and deletion functionalities. Designed with a clean and responsive UI using Tailwind CSS. Utilizes Firebase for user authentication and Firestore for real-time data storage.",
            image: p2,
            technologies: ["React", "Tailwind CSS"],
            category: "Web App",
            git: "https://github.com/Mathiyarasan2102/Task-Management-App",
            live: "https://task-management-app-omega-smoky.vercel.app/"
        },

        {
            id: 8,
            title: "Netflix Login Page",
            description: `A responsive login interface inspired by Netflix, built with React (Vite) and Node.js (Express). Features user authentication, form validation, and seamless navigation.
Demo credentials:
Email: mathiarasan.2102@gmail.com
Password: 221304`,
            image: p8,
            technologies: ["React", "Tailwind CSS"],
            category: "Web App",
            git: "https://github.com/Mathiyarasan2102/Netflix-Login-Page",
            live: "https://netflix-login-page-2rgp.vercel.app/"
        },
        {
            id: 3,
            title: "Apple India clone",
            description: "A responsive Apple homepage replica built with React, Vite, and Tailwind CSS. Features include smooth animations and a clean, modern design.",
            image: p3,
            technologies: ["React", "Tailwind CSS"],
            category: "Web App",
            git: "https://github.com/Mathiyarasan2102/Apple-clone-website",
            live: "https://clone-apple-lilac.vercel.app/"
        },

        {
            id: 9,
            title: "Form Validation and Character Count",
            description: "Developed a dynamic form with instant input validation and a character-counting message box. Demonstrates front-end skills in HTML, CSS, and JavaScript.",
            image: p9,
            technologies: ["HTML5", "CSS3", "JavaScript"],
            category: "Web App",
            git: "https://github.com/Mathiyarasan2102/form-validation",
            live: "https://mathiyarasan2102.github.io/form-validation/"
        },
        {
            id: 4,
            title: "Nostra Web page",
            description: "A sleek, responsive e-commerce landing page showcasing summer collections, popular brands, and exclusive offers. Built with HTML, CSS, and JavaScript, featuring modern UI elements and smooth animations.",
            image: p4,
            technologies: ["HTML%", "CSS3", "Java Script"],
            category: "Web App",
            git: "https://github.com/Mathiyarasan2102/Nostra-Project",
            live: "https://mathiyarasan2102.github.io/Nostra-Project/"
        },
        {
            id: 5,
            title: "Greenden Wb page",
            description: "A vibrant, responsive e-commerce website showcasing a wide range of artificial and natural plants. Built with HTML, CSS, and JavaScript, featuring a clean and modern design.",
            image: p5,
            technologies: ["HTML5", "CSS3"],
            category: "Web App",
            git: "https://github.com/Mathiyarasan2102/Greenden-Project",
            live: "https://mathiyarasan2102.github.io/Greenden-Project/"
        },
        {
            id: 6,
            title: "Udemy Clone",
            description: "A responsive e-learning platform inspired by Udemy, built with HTML, CSS, and JavaScript. Features include a course catalog, course details page, and a user-friendly interface.",
            image: p6,
            technologies: ["HTML5", "CSS3"],
            category: "Web App",
            git: "https://github.com/Mathiyarasan2102/Udemy-clone-website",
            live: "https://mathiyarasan2102.github.io/Udemy-clone-website/"
        }
    ];

    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className={`text-center -mt-15 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-30"}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white -mt-10 mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Here are some of recent projects that showcase my skills and expertise
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-5">
                    {visibleProjects.map((project, index) => (
                        <div
                            key={index}
                            id={index === 3 ? "projects-more" : undefined}
                            className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-slate-700 hover:border-green-500 hover:scale-105 ${!showAll && index >= 3 ? "hidden" : ""}`}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-60 sm:h-64 md:h-72 object-cover group-hover:scale-105 transition-all duration-300"
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

                            <div className="p-5 sm:p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                                        {project.category}
                                    </span>
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                                    {project.title}
                                </h4>

                                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed max-h-16 sm:max-h-20 md:max-h-24 overflow-hidden group-hover:max-h-96 transition-all duration-500">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="bg-green-600 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {projects.length > 3 && (
                    <div className={`text-center transition-all duration-1000 delay-1000 mt-5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-green-600 cursor-pointer mt-10 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            {showAll ? "Show Less" : "View All Projects"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
