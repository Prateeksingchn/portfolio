import React, { useState } from "react"; // Added useState for managing menu state
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const SpaceShuttleBackButton = () => (
  <Link
    to="/"
    className="group flex items-center space-x-3 px-5 py-3 rounded-full transition-all duration-300"
  >
    <motion.div
      whileHover={{ x: -3 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="group-hover:text-blue-400"
    >
      <ChevronLeft className="text-white text-2xl transition-colors duration-300" />
    </motion.div>
    <motion.span
      className="text-white font-medium font-['Space_Mono'] tracking-tight relative text-base transition-colors duration-300 group-hover:text-blue-400"
      whileHover={{ x: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      Back to Home
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  </Link>
);

const SmallNavigation = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  return (
    <nav className="absolute top-4 right-4 z-20">
      {/* Toggle button for smaller devices */}
      <button 
        className="flex flex-col justify-center items-center w-10 h-10 rounded-md bg-black hover:bg-[#1a1a1a] transition duration-300" 
        onClick={() => setIsOpen(!isOpen)} // Toggle menu on button click
      >
        <div className={`w-6 h-0.5 bg-white transition-transform mb-1 duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-opacity mb-1 duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-transform mb-1 duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>
      {/* Navigation links for small devices */}
      <ul className={`flex flex-col space-y-2 mt-4 ${isOpen ? 'block' : 'hidden'} bg-black rounded-md shadow-lg absolute right-0 transition-all duration-300 ease-in-out`}>
        <li>
          <Link
            to="/"
            className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm px-4 py-2"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm px-4 py-2"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm px-4 py-2"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const LargeNavigation = () => (
  <nav className="absolute top-4 right-4 z-20">
    <ul className="flex space-x-6">
      <li>
        <Link
          to="/"
          className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm"
        >
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

const ProjectsHeader = () => {
  return (
    <>
      {/* Render small navigation for small devices */}
      <div className="md:hidden">
        <SmallNavigation />
      </div>
      {/* Render large navigation for medium and large devices */}
      <div className="hidden md:block">
        <LargeNavigation />
      </div>
      <motion.div
        className="absolute top-2 -left-2 lg:top-4 lg:left-4 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SpaceShuttleBackButton />
      </motion.div>
      <div className="pt-24">
        <motion.h1
          className="text-6xl font-bold text-center mb-4 font-['Space_Mono']"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="text-lg font-bold text-center font-['Space_Mono']"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Projects I've Crafted
        </motion.p>
      </div>
      <motion.div
        className="w-72 h-0.5 mx-auto bg-gradient-to-r from-purple-500 to-transparent relative mb-16"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 256, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              "linear-gradient(90deg, #8B5CF6, transparent)",
              "linear-gradient(90deg, #EC4899, transparent)",
              "linear-gradient(90deg, #8B5CF6, transparent)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </>
  );
};

export default ProjectsHeader;
