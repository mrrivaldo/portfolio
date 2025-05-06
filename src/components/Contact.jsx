import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS service ID, template ID, and user ID
    const serviceID = "service_e7hr3u9";
    const templateID = "template_87a8ic5";
    const userID = "DD5hFve8CknaUjxKe";

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (err) => {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS error:", err);
      }
    );
  };

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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-16 sm:py-20 md:py-24 relative"
    >
      <div className="section-number font-condensed">04</div>

      <div className="container mx-auto px-4 relative z-10" ref={elementsRef}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-condensed mb-8 sm:mb-12 reveal">
          GET IN TOUCH
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          <div>
            <div className="mb-8 sm:mb-12 reveal">
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                Feel free to reach out if you're looking for a web developer,
                have a question, or just want to connect.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-neon-green mr-4" />
                  <a
                    href="mailto:yourname@email.com"
                    className="text-sm sm:text-base hover:text-neon-green transition-colors"
                  >
                    rivaldorizky77@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-neon-green mr-4" />
                  <a
                    href="tel:+1234567890"
                    className="text-sm sm:text-base hover:text-neon-green transition-colors"
                  >
                    +62 877-604-566-48
                  </a>
                </div>
              </div>
            </div>

            <div className="reveal">
              <h3 className="text-lg sm:text-xl font-condensed mb-4">FOLLOW ME</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/__rivaldo__/#"
                  className="hover:text-neon-green transition-colors"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mr-rivaldo/"
                  className="hover:text-neon-green transition-colors"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="reveal">
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-neon-green focus:outline-none transition-colors text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-neon-green focus:outline-none transition-colors text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-neon-green focus:outline-none transition-colors text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-neon-green focus:outline-none transition-colors text-sm sm:text-base resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-colors px-6 sm:px-8 py-3 font-condensed text-base sm:text-lg mt-4 sm:mt-6"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-12 border-t border-gray-800 reveal">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm sm:text-base text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} | MR RIVALDO
            </p>
            <div className="flex space-x-6 sm:space-x-8">
              <a
                href="#home"
                className="text-sm sm:text-base text-gray-400 hover:text-neon-green transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm sm:text-base text-gray-400 hover:text-neon-green transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm sm:text-base text-gray-400 hover:text-neon-green transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm sm:text-base text-gray-400 hover:text-neon-green transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact; 