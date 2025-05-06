import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (elementsRef.current) {
              const elements = elementsRef.current.querySelectorAll(".reveal");
              elements.forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add("active");
                }, i * 200);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    {
      category: "Development",
      items: ["React.js", "Vue.js", "CSS/Tailwind", "Wordpress"],
    },
    { category: "Tools", items: ["Figma", "Adobe Suite", "VS Code", "Git"] },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-16 sm:py-20 md:py-24 relative"
    >
      <div className="section-number font-condensed">02</div>

      <div className="container mx-auto px-4 relative z-10" ref={elementsRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-condensed mb-6 reveal">ABOUT ME</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 reveal uppercase">
              I specialize in{" "}
              <span className="text-neon-green">web development</span>,{" "}
              <span className="text-neon-green">UX analysis</span>,{" "}
              <span className="text-neon-green">UI design</span>, and{" "}
              <span className="text-neon-green">interface animation</span>. I'm
              also a dedicated{" "}
              <span className="text-neon-green">coding mentor</span> and{" "}
              <span className="text-neon-green">cybersecurity enthusiast</span>{" "}
              who loves sharing knowledge and building secure, efficient digital
              solutions.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 reveal uppercase">
              My passion is creating immersive, modern digital experiences that
              blend <span className="text-neon-green">aesthetics</span> and{" "}
              <span className="text-neon-green">functionality</span>. I believe
              in <span className="text-neon-green">minimalist design</span> that
              communicates clearly and elevates the user experience.
            </p>

            <a
              href="#contact"
              className="inline-block border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-colors px-6 sm:px-8 py-3 font-condensed text-base sm:text-lg mt-4 reveal"
            >
              GET IN TOUCH
            </a>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative reveal">
              <img
                src="/assets/cyber.jpg"
                alt="Profile"
                className="w-full h-auto object-cover mix-blend-luminosity border border-gray-800"
              />
              <div className="absolute -bottom-4 -right-4 bg-black bg-opacity-80 p-3 sm:p-4 border-2 border-neon-green">
                <p className="font-condensed text-neon-green text-base sm:text-lg">
                  WEB DEVELOPER & CODING MENTOR
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <h3 className="text-2xl sm:text-3xl font-condensed mb-8 sm:mb-12 reveal">MY EXPERTISE</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="reveal">
                <h4 className="text-neon-green text-xl sm:text-2xl font-condensed mb-4">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base">
                      <span className="inline-block w-2 h-2 bg-neon-green mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 