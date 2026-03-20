import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Contact() {
    const [sending, setSending] = useState(false);

    const socials = [
        { href: "https://github.com/Mathiyarasan2102", Icon: Github },
        { href: "https://www.linkedin.com/in/mathiyarasan-p", Icon: Linkedin },
        { href: "https://www.instagram.com/itz_mathi_king/", Icon: Instagram }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        const loadingToast = toast.loading("Executing payload...");

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
            } catch {
                data = { success: false, message: "Critical server error" };
            }

            toast.dismiss(loadingToast);
            if (res.ok && data.success) {
                toast.success("Payload delivered successfully.");
                e.target.reset();
            } else {
                toast.error(data.message || "Failed delivery.");
            }
        } catch (err) {
            toast.dismiss(loadingToast);
            toast.error("Error: " + err.message);
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-brand-dark-surface border-t border-brand-dark-border relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 lg:mb-24 flex flex-col items-center text-center"
                >
                    <span className="font-sans text-xxs text-gray-500 tracking-super-wide uppercase mb-6 block">
                        Contact
                    </span>
                    <h2 className="display-heading text-5xl lg:text-7xl font-bold text-brand-light leading-none tracking-tight">
                        Get In Touch
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    {/* Left - Contact Info */}
                    <div className="lg:col-span-4">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="space-y-8">
                                {[
                                    { icon: Mail, title: "Email", info: "mathiarasan.2102@gmail.com", link: "mailto:mathiarasan.2102@gmail.com" },
                                    { icon: Phone, title: "Phone", info: "+91 7558105547", link: "tel:+917558105547" },
                                    { icon: MapPin, title: "Location", info: "Trichy, Tamil Nadu", link: null }
                                ].map((contact, index) => (
                                    <div key={index} className="flex items-start gap-6 group">
                                        <div className="w-12 h-12 border border-brand-dark-border bg-brand-dark flex items-center justify-center group-hover:border-brand-accent group-hover:text-brand-accent transition-colors duration-500 rounded-full">
                                            <contact.icon size={18} className={contact.link ? "text-gray-400 group-hover:text-brand-accent" : "text-gray-500"} strokeWidth={1.5} />
                                        </div>
                                        <div className="pt-1">
                                            <p className="font-sans text-xxs text-brand-muted uppercase tracking-super-wide block mb-2">
                                                {contact.title}
                                            </p>
                                            {contact.link ? (
                                                <a href={contact.link} className="font-sans font-light text-base text-brand-light hover:text-brand-accent transition-colors break-words">
                                                    {contact.info}
                                                </a>
                                            ) : (
                                                <p className="font-sans font-light text-base text-gray-400">
                                                    {contact.info}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <p className="font-sans text-xxs text-brand-muted uppercase tracking-super-wide block mb-6">
                                    Social Networks
                                </p>
                                <div className="flex gap-4">
                                    {socials.map(({ href, Icon: SocialIcon }, index) => (
                                        <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-brand-dark-border bg-brand-dark flex items-center justify-center text-gray-400 hover:border-brand-accent hover:text-brand-accent transition-all duration-500 rounded-full">
                                            <SocialIcon size={18} strokeWidth={1.5} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - Form */}
                    <div className="lg:col-span-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-brand-dark border border-brand-dark-border p-8 lg:p-12"
                        >
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="font-sans text-xxs text-gray-500 uppercase tracking-super-wide block mb-3">Name</label>
                                        <input type="text" id='name' name='name' className="w-full bg-brand-dark-surface border border-brand-dark-border px-5 py-4 font-sans font-light text-sm text-brand-light focus:outline-none focus:border-brand-accent transition-colors rounded-xs placeholder-gray-700" placeholder="John Doe" required />
                                    </div>
                                    <div>
                                        <label className="font-sans text-xxs text-gray-500 uppercase tracking-super-wide block mb-3">Email</label>
                                        <input type="email" id='email' name='email' className="w-full bg-brand-dark-surface border border-brand-dark-border px-5 py-4 font-sans font-light text-sm text-brand-light focus:outline-none focus:border-brand-accent transition-colors rounded-xs placeholder-gray-700" placeholder="john@example.com" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="font-sans text-xxs text-gray-500 uppercase tracking-super-wide block mb-3">Subject</label>
                                    <input type="text" id='subject' name='subject' className="w-full bg-brand-dark-surface border border-brand-dark-border px-5 py-4 font-sans font-light text-sm text-brand-light focus:outline-none focus:border-brand-accent transition-colors rounded-xs placeholder-gray-700" placeholder="Job Opportunity" required />
                                </div>

                                <div>
                                    <label className="font-sans text-xxs text-gray-500 uppercase tracking-super-wide block mb-3">Message</label>
                                    <textarea id='message' name='message' className="w-full min-h-[160px] bg-brand-dark-surface border border-brand-dark-border px-5 py-4 font-sans font-light text-sm text-brand-light focus:outline-none focus:border-brand-accent transition-colors rounded-xs placeholder-gray-700 resize-y" placeholder="Hello Mathiyarasan..." required />
                                </div>

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="primary-button w-full py-5 text-xs tracking-super-wide flex items-center justify-between px-8"
                                >
                                    <span>{sending ? "Sending..." : "Send Message"}</span>
                                    <ArrowRight size={18} strokeWidth={1.5} />
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
