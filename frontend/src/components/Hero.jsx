/* eslint-disable no-unused-vars */
import { ArrowRight, GithubIcon, LinkedinIcon, InstagramIcon, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import img from "../assets/img.jpg";

const socials = [
  { href: "https://github.com/Mathiyarasan2102", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/mathiyarasan-p", Icon: LinkedinIcon },
  { href: "https://wa.me/917558105547", Icon: FaWhatsapp },
  { href: "https://www.instagram.com/itz_mathi_king/", Icon: InstagramIcon },
  { href: "mailto:mathiarasan.2102@gmailcom", Icon: Mail },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const baseClasses =
    "w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:rotate-6";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="flex-col items-center lg:items-start px-4 sm:px-8 md:px-12 lg:px-16 space-y-4">
              <p
                className={`text-green-400 font-semibold text-base sm:text-lg md:text-xl transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Get Ready to Start Work
              </p>

              <h1
                className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                I'm{" "}
                <span
                  className={`text-green-400 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  Developer
                </span>
                <br />
                <span className="text-white">Mathiyarasan.P</span>
              </h1>

              <p
                className={`text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-lg mx-auto lg:mx-0 transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Junior Web Developer skilled in MERN stack, with hands-on
                experience in responsive web applications. Strong foundation in
                clean code, modern UI/UX, and eager to contribute to dynamic
                teams.
              </p>

              {/* Buttons */}
              <div
                className={`flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4 transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <button
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/mathiyarasan-p",
                      "_blank"
                    )
                  }
                  className="bg-green-600 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl font-medium hover:scale-105 text-sm sm:text-base"
                >
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() =>
                    (window.location.href =
                      "mailto:mathiarasan.2102@gmail.com?subject=Regarding Job Opportunity - Junior Web Developer&body=Hello Mathiyarasan,%0D%0A%0D%0AI came across your portfolio and would like to discuss a potential job opportunity with you.%0D%0A%0D%0ARegards,%0D%0A[Your Name]")
                  }
                  className="border-2 border-slate-600 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium flex items-center gap-2 group hover:scale-105 text-sm sm:text-base"
                >
                  Hire Me
                </button>
              </div>

              {/* Social Icons */}
              <div
                className={`flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6 transition-all duration-100 delay-800 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {socials.map(({ href, Icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={baseClasses}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <div className="relative group">
                <img
                  src={img}
                  alt=""
                  className="w-full rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute -top-6 sm:-top-10 -right-3 sm:-right-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-green-600 rounded-2xl opacity-20"></div>
              <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-blue-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
