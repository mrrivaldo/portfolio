import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'HOME', number: '01' },
    { id: 'about', label: 'ABOUT', number: '02' },
    { id: 'projects', label: 'PROJECTS', number: '03' },
    { id: 'contact', label: 'CONTACT', number: '04' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 sm:py-4 bg-black bg-opacity-90 backdrop-blur-sm' : 'py-4 sm:py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl sm:text-2xl font-bold text-white font-condensed tracking-wider">MR RIVALDO</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-item group flex items-center font-condensed text-base lg:text-lg ${activeSection === item.id ? 'text-neon-green' : 'text-white'}`}
            >
              <span className="text-xs lg:text-sm text-neon-green opacity-70 mr-2">{item.number}</span>
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-4 sm:px-6 py-2 border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 font-condensed text-sm lg:text-base"
          >
            START A PROJECT
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-black z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex flex-col h-full justify-center items-center space-y-6 sm:space-y-8 p-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
              className="text-2xl sm:text-3xl font-condensed flex items-center hover:text-neon-green transition-colors"
            >
              <span className="text-neon-green mr-3 text-lg sm:text-xl">{item.number}</span>
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-6 sm:mt-8 px-6 py-3 border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 font-condensed text-lg sm:text-xl"
          >
            START A PROJECT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 