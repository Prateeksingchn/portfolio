import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion
import { useLocation } from 'react-router-dom'; // Add this import

const SmallNavigation = ({ isOpen, toggleMenu }) => {
  const location = useLocation();

  return (
    <nav className="md:hidden">
      <button 
        className="fixed top-4 right-4 z-30 flex flex-col justify-center items-center w-10 h-10 rounded-md bg-black hover:bg-[#1a1a1a] transition duration-300" 
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
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ delay: 0.1, staggerChildren: 0.1, delayChildren: 0.2 }}
              className="flex flex-col space-y-6 text-center"
            >
              {[ 
                { to: "/", label: "Home" },
                { to: "/about", label: "About Me" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <motion.li key={link.to} variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}>
                  <Link
                    to={link.to}
                    className={`text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] font-bold w-full text-5xl flex items-center ${
                      location.pathname === link.to ? 'text-blue-400' : ''
                    }`}
                    onClick={toggleMenu}
                  >
                    {location.pathname === link.to && (
                      <span className="w-8 h-1 bg-white -ml-12 mr-4"></span>
                    )}
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const LargeNavigation = () => (
  <nav className="hidden md:block absolute top-4 right-4 z-20">
    <ul className="flex space-x-6">
      <li>
        <Link to="/" className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm">
          Home
        </Link>
      </li>
      <li>
        <Link to="/projects" className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

const AboutNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <SmallNavigation isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      <LargeNavigation />
    </>
  );
};

export default AboutNavigation;