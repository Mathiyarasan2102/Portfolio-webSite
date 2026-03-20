import { ArrowRight, GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { href: "https://github.com/Mathiyarasan2102", label: "Github", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/mathiyarasan-p", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://wa.me/917558105547", label: "WhatsApp", Icon: FaWhatsapp },
  { href: "mailto:mathiarasan.2102@gmail.com", label: "Email", Icon: Mail },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-brand-dark">
      
      {/* Editorial Grid overlay (subtle) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-brand-dark-border"></div>
        <div className="absolute top-0 right-[20%] w-[1px] h-full bg-brand-dark-border"></div>
        <div className="absolute top-[50%] left-0 w-full h-[1px] bg-brand-dark-border"></div>
      </div>
      
      {/* Decorative large text background */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-20 left-0 w-full text-center text-[12vw] font-display font-black text-white leading-none z-0 select-none tracking-tighter"
      >
        PORTFOLIO
      </motion.p>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 w-full mt-10">
        <div className="max-w-7xl mx-auto flex flex-col items-start justify-center">
            
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-10 pb-4 border-b border-brand-dark-border w-full max-w-sm"
          >
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full box-glow"></span>
            <span className="font-sans text-xs tracking-widest text-gray-400 uppercase">Status: Available for Next Role</span>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
             className="relative w-full break-words"
          >
            <h1 className="display-heading text-[12vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] leading-[0.95] text-brand-light tracking-tight">
              Mathiyarasan P.<br/>
              <span className="text-brand-muted italic font-light">Full-Stack</span> Software Engineer.
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}
            className="grid lg:grid-cols-12 gap-10 mt-16 w-full items-start"
          >
            <div className="lg:col-span-6 space-y-6">
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Specialized in <strong className="text-brand-light font-medium">MERN stack</strong> architectures. I craft robust backend systems and meticulous frontend interfaces that drive measurable impact, focusing on scalable performance and exceptional user experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <a href="#projects" className="primary-button px-8 py-4 text-center text-sm tracking-widest w-full sm:w-auto">
                    View Portfolio
                  </a>
                  <a href="mailto:mathiarasan.2102@gmail.com" className="luxury-button px-8 py-4 text-center flex items-center justify-center gap-3 text-sm tracking-widest w-full sm:w-auto">
                    Let's Connect <ArrowRight className="w-4 h-4 opacity-70" />
                  </a>
                </div>
            </div>
            
            <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end h-full mt-10 lg:mt-0 pb-2 border-l border-brand-dark-border pl-8">
               <span className="font-sans text-xxs text-[#666] tracking-super-wide mb-6 uppercase">Index / Contacts</span>
               <div className="flex flex-col gap-5">
                   {socials.map((s, idx) => (
                      <a key={idx} href={s.href} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex gap-4 items-center tracking-wide group w-max">
                          <s.Icon className="w-4 h-4 text-[#555] group-hover:text-brand-accent transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform">{s.label}</span>
                      </a>
                   ))}
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
