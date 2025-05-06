import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (projectsRef.current) {
              const elements = projectsRef.current.querySelectorAll('.reveal');
              elements.forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add('active');
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

  const projects = [
    {
      id: 1,
      title: 'Kubio Page Builder LFI Exploit (CVE-2025-2294)',
      description: 'A LFI Exploit for Kubio Page Builder',
      category: 'Web Exploit',
      image: '/assets/kubio.jpg',
      link: 'https://github.com/mrrivaldo/CVE-2025-2294'
    },
    {
      id: 2,
      title: 'Bug Hunting',
      description: 'Certificate of Appreciation for finding vulnerabilities in Jembrana Government Website',
      category: 'Vulnerability Disclosure',
      image: '/assets/Jembrana.png',
      link: 'https://www.linkedin.com/posts/mr-rivaldo_sertifikat-apresiasi-diskominfo-jembrana-activity-7271711524337926144-Gd0v?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvSqxkB6kvwOd7Xoa1Bau7eXPDdEh6JxCQ'
    },
    {
      id: 3,
      title: 'Bug Hunting',
      description: 'Certificate of Appreciation for finding vulnerabilities in one of the Bantul Government Website',
      category: 'Vulnerability Disclosure',
      image: '/assets/Bantul.png',
      link: 'https://www.linkedin.com/posts/mr-rivaldo_sertifikat-apresiasi-diskominfo-bantul-activity-7237283076605624320-p_ox?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvSqxkB6kvwOd7Xoa1Bau7eXPDdEh6JxCQ'
    },
      {
        id: 4,
        title: 'Bug Hunting',
        description: 'Certificate of Appreciation for finding vulnerabilities in one of the Pontianak Government Website',
        category: 'Vulnerability Disclosure',
        image: '/assets/Pontianak.png',
        link: 'https://www.linkedin.com/posts/mr-rivaldo_sertifikat-apresiasi-diskominfo-kota-pontianak-activity-7236224895892758530-hU_c?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvSqxkB6kvwOd7Xoa1Bau7eXPDdEh6JxCQ'
      },
      {
        id: 5,
        title: 'The Glory Bali Rent',
        description: 'Complete company profile with wordpress and elementor',
        category: 'Company Profile',
        image: '/assets/TheGlory.png',
        link: 'https://theglorybali.com/'
      }
  ];

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-16 sm:py-20 md:py-24 relative">
      <div className="section-number font-condensed">03</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-condensed mb-8 sm:mb-12 reveal">FEATURED CASES</h2>
        
        <div ref={projectsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card reveal">
              <div className="group relative overflow-hidden border border-gray-800 hover:border-neon-green transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                  <span className="text-neon-green text-xs sm:text-sm mb-2">{project.category}</span>
                  <h3 className="text-xl sm:text-2xl font-condensed mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="inline-flex items-center text-neon-green hover:underline text-sm sm:text-base"
                  >
                    VIEW PROJECT <ArrowUpRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center reveal">
          <a 
            href="#contact" 
            className="inline-block border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-colors px-6 sm:px-8 py-3 font-condensed text-base sm:text-lg"
          >
            START A PROJECT
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 