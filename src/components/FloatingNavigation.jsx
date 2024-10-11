import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/Projects" },
  { name: "About Me", path: "/About" },
  { name: "Contact", path: "/Contact" },
];

const NavItem = ({ item, onClick, isActive }) => {
  return (
    <motion.li variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    }}>
      <Link
        to={item.path}
        className={`text-white hover:text-blue-400 transition-colors tracking-tight duration-300 font-['Space_Mono'] font-bold w-full text-5xl flex items-center ${
          isActive ? 'text-blue-400' : ''
        }`}
        onClick={onClick}
      >
        {isActive && (
          <span className="w-8 h-1 bg-white -ml-12 mr-4"></span>
        )}
        {item.name}
      </Link>
    </motion.li>
  );
};

const SmallNavigation = ({ isOpen, toggleMenu }) => {
  const location = useLocation();

  return (
    <nav className="lg:hidden">
      <button 
        className="fixed top-2 right-3 z-30 flex flex-col justify-center items-center w-10 h-10 rounded-md transition duration-300" 
        onClick={toggleMenu}
      >
        <div className={`w-6 h-0.5 bg-white transition-transform mb-1 duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-opacity mb-1 duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-transform mb-1 duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-black z-20 flex items-center justify-center"
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, staggerChildren: 0.1, delayChildren: 0.2 }}
              className="flex flex-col space-y-6 text-start"
            >
              {navItems.map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  onClick={toggleMenu}
                  isActive={location.pathname === item.path}
                />
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const LargeNavigation = ({ scrolled }) => {
  const location = useLocation();
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              to={item.path} 
              className={`text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm ${
                location.pathname === item.path ? 'text-blue-400' : ''
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const FloatingNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300`}
      style={{
        backgroundColor: scrolled ? '#1a1a1a' : 'transparent',
        boxShadow: scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        scrolled ? "py-3" : "py-3"
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className={`font-['Dancing_Script'] ml-2 text-gray-200 hover:text-red-200 transition-colors duration-300 ${
              scrolled ? "text-lg" : "text-lg"
            }`}>
              Prateek Singh Chouhan
            </Link>
          </div>
          <SmallNavigation isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
          <LargeNavigation scrolled={scrolled} />
        </div>
      </div>
    </motion.nav>
  );
};

export default FloatingNavigation;