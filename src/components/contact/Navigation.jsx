import React, { useState } from "react"; // Import useState for managing toggle state
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navigation({ isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu toggle

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About me" },
    { to: "/contact", label: "Contact me" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.15,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  const ToggleMenu = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <nav className="text-center">
            {navItems.map(({ to, label }) => (
              <motion.div
                key={to}
                variants={linkVariants}
              >
                <Link
                  to={to}
                  className="block text-white text-4xl mb-6 hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Mobile Navigation
  const MobileNav = () => (
    <div className="fixed top-0 left-0 z-10 w-full bg-opacity-90 backdrop-blur-sm lg:hidden">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className={`flex items-center ${isDarkMode ? 'text-white' : 'text-[#000000]'}`}>
          <span className={`font-['Dancing_Script'] text-xl md:text-2xl ${isDarkMode ? 'text-white' : 'text-[#000000]'}`}>
            Prateek Singh Chouhan
          </span>
        </Link>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={`p-2 rounded ${isDarkMode ? 'text-white' : 'text-black'} transition-colors`}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col w-full bg-opacity-90 backdrop-blur-sm ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {navItems.map(({ to, label }) => (
          <div key={to} className="relative">
            <Link
              to={to}
              className={`px-4 py-2 text-center text-[1rem] font-light font-['roboto'] transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-[#000000]"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
            {to === window.location.pathname && ( // Show line for current page
              <span
                className={`absolute left-0 w-1 h-1 bg-${isDarkMode ? 'white' : '#000000'} top-1/2 transform -translate-y-1/2`}
              ></span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );

  // Desktop Navigation
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
                  to === "/contact"
                    ? isDarkMode
                      ? "text-white"
                      : "text-[#000000]"
                    : isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-[#000000]"
                }`}
              >
                {to === "/contact" && (
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


  // Mobile navigation
  return (
    <>
      <div className="fixed top-5 left-0 z-[60] flex justify-between items-center w-full pl-4 px-2 lg:hidden">
        <Link to="/" className={`flex items-center ${isDarkMode ? 'text-white' : 'text-[#000000]'}`}>
          <span className={`font-['Dancing_Script'] text-2xl ${isDarkMode ? 'text-white' : 'text-[#000000]'}`}>
            Prateek Singh Chouhan
          </span>
        </Link>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={`p-2 rounded ${isDarkMode ? 'text-white' : 'text-black'} transition-colors z-50`}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <ToggleMenu />
      <DesktopNav />
    </>
  );
}

export default Navigation;