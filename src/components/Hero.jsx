import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-condensed leading-tight mb-6">
            WEB
            <br />
            <span className="text-neon-green">DEVELOPER</span>
          </h1>
          <div className="max-w-2xl mb-12">
            <p className="text-base sm:text-lg text-gray-300 mb-8 uppercase">
              I'm Aldo — a{" "}
              <span className="text-neon-green">web developer</span>,{" "}
              <span className="text-neon-green">coding mentor</span>, and{" "}
              <span className="text-neon-green">cybersecurity enthusiast</span>{" "}
              who builds modern digital experiences and helps others grow
              through tech.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
              <a
                href="#about"
                className="w-full sm:w-auto text-center border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-colors px-6 sm:px-8 py-3 font-condensed text-base sm:text-lg inline-flex items-center justify-center group"
              >
                LEARN MORE
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center text-white hover:text-neon-green transition-colors font-condensed text-base sm:text-lg inline-flex items-center justify-center group"
              >
                AVAILABLE FOR WORK
                <span className="ml-2 group-hover:ml-3 transition-all">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-full md:w-2/5 h-full flex items-center justify-center opacity-90 z-0">
        <img
          src="/assets/cyber1.jpg"
          alt="Profile"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-6 w-6 text-neon-green" />
        <span className="text-xs text-gray-400 mt-2">SCROLL DOWN</span>
      </div>
    </section>
  );
};

export default Hero; 