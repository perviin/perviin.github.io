import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Initial setup
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ['home', 'me', 'about', 'skills', 'projects', 'stage', 'certif', 'veille', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const links = [
    { href: "#home", text: "Accueil" },
    { href: "#me", text: "À propos" },
    { href: "#about", text: "BTS SIO" },
    { href: "#skills", text: "Compétences" },
    { href: "#projects", text: "Projets" },
    { href: "#stage", text: "Stage" },
    { href: "#certif", text: "Certifications" },
    { href: "#veille", text: "Veille Informatique" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <nav className="fixed w-full h-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg z-50">
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400" style={{ width: `${scrollProgress}%` }}></div>

      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-2xl font-bold text-indigo-400 dark:text-indigo-400">Pervin</a>
          </div>

          <div className="hidden md:flex items-center space-x-0">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-base font-medium transition-all duration-300
                  ${activeSection === link.href.substring(1) 
                    ? 'text-Z dark:text-indigo-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-pink-300 dark:hover:text-pink-300'
                  }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.text}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
                  initial={false}
                  animate={{
                    scaleX: activeSection === link.href.substring(1) ? 1 : 0,
                    opacity: activeSection === link.href.substring(1) ? 1 : 0
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <FaSun className="w-6 h-6 text-yellow-500" />
              ) : (
                <FaMoon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                ${activeSection === link.href.substring(1)
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                  : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}