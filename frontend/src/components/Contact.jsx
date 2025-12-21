import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

export default function Contact() {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const socials = [
        { href: "https://github.com/Mathiyarasan2102", Icon: Github },
        { href: "https://www.linkedin.com/in/mathiyarasan-p", Icon: Linkedin },
        { href: "https://www.instagram.com/itz_mathi_king/", Icon: Instagram }
    ];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );
        const element = document.getElementById("contact");
        if (element) observer.observe(element);
        return () => observer.disconnect();
    }, []);

    const baseClasses =
        "w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-6";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setSent(false);
        const loadingToast = toast.loading("Sending message...");

        const formData = new FormData(e.target);
        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
            const res = await fetch(`${apiUrl}/send-email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            let data;
            try {
                data = await res.json();
            } catch (parseError) {
                data = { success: false, message: "Server error occurred" };
            }

            toast.dismiss(loadingToast);
            if (res.ok && data.success) {
                setSent(true);
                toast.success("Message sent successfully!");
                e.target.reset();
            } else {
                toast.error(data.message || "Failed to send message!");
            }
        } catch (err) {
            toast.dismiss(loadingToast);
            toast.error("Error: " + err.message);
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center py-16 sm:py-20 md:py-24 bg-slate-800 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Heading */}
                <div className={`text-center mb-10 sm:mb-14 md:mb-16 transition-all duration-1000 -mt-5 sm:-mt-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-green-400 font-semibold text-base sm:text-lg mb-3 sm:mb-4">Get in Touch</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Let's work Together</h2>
                    <p className="text-gray-300 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto px-2">
                        Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left - Contact Info */}
                    <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            {[{ icon: Mail, title: "Email", info: "mathiarasan.2102@gmail.com", link: "mailto:mathiarasan.2102@gmail.com" },
                            { icon: Phone, title: "Phone", info: "+91 7558105547", link: "tel:+917558105547" },
                            { icon: MapPin, title: "Location", info: "Trichy, Tamil Nadu", link: null }]
                                .map((contact, index) => (
                                    <a
                                        key={index}
                                        href={contact.link || undefined}
                                        className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-green-500 group cursor-pointer transform hover:scale-105 ${!contact.link ? 'cursor-default hover:scale-100' : ''}`}
                                    >
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300">
                                            <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white text-sm sm:text-base group-hover:text-gray-400 transition-all duration-300">
                                                {contact.title}
                                            </p>
                                            <p className="text-gray-300 text-sm sm:text-base font-normal group-hover:text-gray-200 transition-all duration-300">
                                                {contact.info}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                        </div>

                        <h4 className="text-base sm:text-lg font-semibold text-white mt-6 sm:mt-8">Follow Me</h4>

                        <div className={`flex gap-3 sm:gap-4 pt-4 sm:pt-6 transition-all text-white duration-100 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                            {socials.map(({ href, Icon }, index) => (
                                <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                            ))}
                        </div>


                    </div>

                    {/* Contact Form */}
                    <div className={`transition-all -mt-5 sm:-mt-10 duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition duration-300">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="group">
                                        <label className="block text-start text-sm font-semibold text-gray-300 mb-1 sm:mb-2 group-hover:text-green-400 transition-all duration-300">
                                            Full Name
                                        </label>
                                        <input type="text" id='name' name='name' className="w-full h-11 sm:h-12 bg-slate-800 border border-slate-700 rounded-lg px-3 sm:px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500/50" placeholder='Your name' required />
                                    </div>
                                    <div className="group">
                                        <label className="block text-start text-sm font-semibold text-gray-300 mb-1 sm:mb-2 group-hover:text-green-400 transition-all duration-300">
                                            Mail Id
                                        </label>
                                        <input type="email" id='email' name='email' className="w-full h-11 sm:h-12 bg-slate-800 border border-slate-700 rounded-lg px-3 sm:px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500/50" placeholder="Email Id" required />
                                    </div>
                                </div>

                                <div className="group mt-4 sm:mt-5">
                                    <label className="block text-start text-sm font-semibold text-gray-300 mb-1 sm:mb-2 group-hover:text-green-400 transition-all duration-300">
                                        Subject
                                    </label>
                                    <input type="text" id='subject' name='subject' className="w-full h-11 sm:h-12 bg-slate-800 border border-slate-700 rounded-lg px-3 sm:px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500/50" placeholder='Subject' required />
                                </div>

                                <div className="group mt-4 sm:mt-5">
                                    <label className="block text-start text-sm font-semibold text-gray-300 mb-1 sm:mb-2 group-hover:text-green-400 transition-all duration-300">
                                        Message
                                    </label>
                                    <textarea id='message' name='message' className="w-full min-h-[100px] sm:min-h-[120px] bg-slate-800 border border-slate-700 rounded-lg py-3 px-3 sm:px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500/50" placeholder='Message' required />
                                </div>

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="mt-4 sm:mt-5 w-full h-12 sm:h-14 bg-green-600 text-white py-3 sm:py-4 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-xl hover:scale-105 group"
                                >
                                    {sending ? "Sending..." : "Send Message"}
                                    <Send className="w-4 h-4 sm:w-5 sm:h-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
