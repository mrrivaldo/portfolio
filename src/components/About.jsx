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
            <h2 className="text-3xl sm:text-4xl font-condensed mb-6 reveal">
              ABOUT ME
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 reveal uppercase">
              <span className="text-neon-green font-bold text-xl sm:text-2xl block mb-2">
                WEB DEVELOPER
              </span>
              I craft modern, secure, and high-performance web applications with
              a focus on clean code, scalability, and user experience.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 reveal uppercase">
              <span className="text-neon-green font-bold text-xl sm:text-2xl block mb-2">
                CODING MENTOR
              </span>
              Passionate about teaching and empowering others, I guide aspiring
              developers to master web technologies and best practices.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 reveal uppercase">
              <span className="text-neon-green font-bold text-xl sm:text-2xl block mb-2">
                CYBERSECURITY ENTHUSIAST
              </span>
              Dedicated to building secure digital solutions, I actively explore
              vulnerabilities and advocate for robust security in every project.
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
          <h3 className="text-2xl sm:text-3xl font-condensed mb-8 sm:mb-12 reveal">
            MY EXPERTISE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="reveal">
                <h4 className="text-neon-green text-xl sm:text-2xl font-condensed mb-4">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {skillGroup.items.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm sm:text-base"
                    >
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
