import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function ContactNavigation({ isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About me" },
    { to: "/contact", label: "Contact me" },
  ];

  const menuVariants = {
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delayChildren: 0.2,
        staggerChildren: 0.07,
        staggerDirection: 1
      }
    }
  };

  const linkVariants = {
    closed: { y: -20, opacity: 0 },
    open: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const ToggleMenu = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-x-0 top-0 h-full bg-black z-50 flex items-center justify-center"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <motion.nav 
            className="text-center"
          >
            {navItems.map(({ to, label }) => (
              <motion.div
                key={to}
                variants={linkVariants}
                className="relative"
              >
                <Link
                  to={to}
                  className="block text-white text-4xl mb-8 hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
                {to === location.pathname && (
                  <motion.span
                    className="absolute left-[-30px] top-1/2 w-5 h-[2px] bg-white transform -translate-y-1/2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  ></motion.span>
                )}
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const DesktopNav = () => (
    <div className="fixed top-7 left-6 z-10 w-1/4 hidden lg:block">
      <Link to="/" className={`flex items-center mb-4 ${isDarkMode ? 'text-white' : 'text-[#000000]'}`}>
        <span className={`font-['Dancing_Script'] text-3xl ${isDarkMode ? 'text-white' : 'text-[#000000]'}`}>
          Prateek Singh Chouhan
        </span>
      </Link>

      <nav>
        <ul className="space-y-2 text-lg">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`relative group flex items-end text-[1rem] font-light font-['roboto'] transition-colors ${
                  isDarkMode
                    ? to === location.pathname
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                    : to === location.pathname
                    ? "text-[#000000]"
                    : "text-gray-600 hover:text-[#000000]"
                }`}
              >
                {to === location.pathname && (
                  <span
                    className={`absolute left-[-20px] top-1/2 w-3 h-[2px] ${
                      isDarkMode ? "bg-white" : "bg-[#000000]"
                    } transform -translate-y-1/2`}
                  ></span>
                )}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <motion.div 
        className={`fixed top-0 left-0 z-[60] flex justify-between items-center w-full 
        ${isMenuOpen
          ? 'bg-black text-white'
          : isScrolling 
            ? (isDarkMode ? 'bg-[#151515] text-white' : 'bg-white text-[#000000]') 
            : (isDarkMode ? 'bg-black text-white' : 'bg-[#F5F5F5] text-[#000000]')}
        lg:hidden transition-all duration-300`}
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.span 
              className="font-['Dancing_Script'] text-[1.2rem] md:text-2xl"
              variants={{
                open: { opacity: 0, x: -20 },
                closed: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              Prateek Singh Chouhan
            </motion.span>
          </Link>

          <button 
            className="flex flex-col justify-center items-center w-8 h-8 rounded-md transition duration-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <div className={`w-6 h-0.5 ${isMenuOpen ? 'bg-white' : isDarkMode ? 'bg-white' : 'bg-black'} transition-transform mb-1 duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 ${isMenuOpen ? 'bg-white' : isDarkMode ? 'bg-white' : 'bg-black'} transition-opacity mb-1 duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 ${isMenuOpen ? 'bg-white' : isDarkMode ? 'bg-white' : 'bg-black'} transition-transform mb-1 duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </motion.div>
      <ToggleMenu />
      <DesktopNav />
    </>
  );
}

export default ContactNavigation;