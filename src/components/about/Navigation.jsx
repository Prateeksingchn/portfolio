import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion";

const SmallNavigation = ({ isOpen, toggleMenu }) => (
    <nav className="md:hidden absolute top-4 right-4 z-20">
      <button 
        className="flex flex-col justify-center items-center w-10 h-10 rounded-md bg-black hover:bg-[#1a1a1a] transition duration-300" 
        onClick={toggleMenu} // Toggle menu on button click
      >
        <div className={`w-6 h-0.5 bg-white transition-transform mb-1 duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-opacity mb-1 duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-transform mb-1 duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col space-y-2 mt-4 bg-black rounded-md shadow-lg absolute right-0"
          >
            <li>
              <Link to="/" className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm px-4 py-2 block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm px-4 py-2 block">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm px-4 py-2 block">
                Contact
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );

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

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  return (
    <>
      <SmallNavigation isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      <LargeNavigation />
    </>
  );
};

export default Navigation;