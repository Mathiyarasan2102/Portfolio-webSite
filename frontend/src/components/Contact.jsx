import { Mail, PhoneCallIcon, MapIcon, Github, Linkedin, Instagram, Phone, Send, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

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
        "w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-6";
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setSent(false);

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        try {
            const res = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.success) {
                setSent(true);
                alert("✅ Message sent successfully!");
                e.target.reset();
            } else {
                alert("❌ Failed to send message!");
            }
        } catch (err) {
            alert("⚠️ Error: " + err.message);
        } finally {
            setSending(false);
        }
    };



    return (
        <section id="contact" className="min-h-screen flex items-center  py-24 bg-slate-800 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                <div className={`text-center mb-16 transition-all duration-1000 -mt-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "}`}>
                    <p className="text-green-400 font-semibold text-lg mb-4">Get in Touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's work Together</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left - Contact Info */}
                    <div className={`space-y-8  transition-all  duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "}`}>
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: Mail,
                                    title: "Email",
                                    info: "mathiyarasan.2102@gmail.com"
                                },
                                {
                                    icon: Phone,
                                    title: "Phone",
                                    info: "+91 7558105547"
                                },
                                {
                                    icon: MapPin,
                                    title: "Location",
                                    info: "Trichy, Tamil Nadu"
                                }].map((contact, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-green-500 group cursor-pointer transform hover:scale-105"
                                            style={{ animationDelay: `${index * 200 * 300}ms` }}
                                        >
                                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate-10">
                                                <contact.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-white group-hover:text-gray-400 transition-all duration-300">
                                                    {contact.title}
                                                </p>
                                                <p className="text-gray-300 font-normal group-hover:text-gray-200 transition-all duration-300">
                                                    {contact.info} { }
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>

                        <h4 className='text-lg font-semibold  text-white -mb-2 -mt-3'>
                            Follow Me
                        </h4>

                        <div className={`flex gap-4 pt-6 transition-all text-white duration-100 delay-800  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

                            {socials.map(({ href, Icon }, index) => (
                                <a key={index} href={href} target="_blank"
                                    rel="noopener noreferrer" className={baseClasses}>
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`transition-all w-170 -mt-10 px-5 duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "}`}>
                        <div className='bg-slate-900 h-140 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition duration-300 '>
                            <h3 className='text-2xl font-bold text-white mb-6'>
                                Send Message
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <div className='grid md:grid-cols-2 gap-6'>
                                    <div className='group'>
                                        <label className='block text-start text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300'>
                                            Full Name
                                        </label>
                                        <input type="text" id='name' name='name' className='w-full h-12 bg-slate-800 border border-slate-700 rounded-lg px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transplant transition-all duration-300 hover:border-green-500/50' placeholder='Your name' required />
                                    </div>
                                    <div className='group'>
                                        <label className='block text-start text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300'>
                                            Mail I'd
                                        </label>
                                        <input type="email" id='email' name='email' className='w-full h-12 bg-slate-800 border border-slate-700 rounded-lg px-4 text-white  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transplant transition-all duration-300 hover:border-green-500/50' placeholder="Email I'd" required />
                                    </div>
                                </div>
                                <div className='group mt-5'>
                                    <label className='block text-start text-sm  font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300'>
                                        Subject
                                    </label>
                                    <input type="text" id='subject' name='subject' className='w-full h-12 bg-slate-800 border border-slate-700 rounded-lg px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transplant transition-all duration-300 hover:border-green-500/50' placeholder='Subject' required />
                                </div>

                                <div className='group mt-5'>
                                    <label className='block text-start text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300'>
                                        Message
                                    </label>
                                    <textarea type="text" id='message' name='message' className='w-full h-30 placeholder:p-3 bg-slate-800 border border-slate-700 rounded-lg px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transplant transition-all duration-300 hover:border-green-500/50' placeholder='Message' required />
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="mt-5 w-full h-15 bg-green-600 text-white py-4 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-xl hover:scale-105 group"
                                >
                                    {sending ? "Sending..." : "Send Message"}
                                    <Send className="w-5 h-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
                                </button>



                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
