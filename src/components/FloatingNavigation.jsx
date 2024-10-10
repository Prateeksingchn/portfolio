import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/Projects" },
  { name: "About Me", path: "/About" },
  { name: "Contact Me", path: "/Contact" },
];

const NavItem = ({ item, onClick, isActive }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="overflow-hidden"
    >
      <Link
        to={item.path}
        onClick={onClick}
        className={`block px-4 py-2 text-[2.5rem] leading-[65px] font-bold font-[roboto] ${
          isActive ? "text-red-500" : "text-gray-200 hover:text-red-500"
        } mb-4 transition-colors duration-300 relative`}
      >
        {item.name}
        {isActive && (
          <motion.div
            layoutId="underline"
            className="absolute left-0 bottom-0 h-0.5 w-full bg-red-500"
          />
        )}
      </Link>
    </motion.div>
  );
};

const FloatingNavigation = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.8,
        ease: [0.79, 0.14, 0.15, 0.86], // Custom easing function
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom easing function
      },
    },
  };

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a1a1a] rounded-b-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-['Dancing_Script'] ml-2 text-gray-200 hover:text-red-200 transition-colors duration-300">
              Prateek Singh Chouhan
            </Link>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-red-500 focus:outline-none transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <div className={`w-6 h-0.5 bg-current transition-transform mb-1 duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-opacity mb-1 duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-transform mb-1 duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
            />
            <motion.div
              key="menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-y-0 right-0 w-full md:w-2/3 lg:w-2/5 bg-[#1a1a1a] overflow-hidden flex flex-col justify-center items-center shadow-xl z-50"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeMenu}
                className="absolute top-4 right-4 p-2 rounded-md text-gray-100 hover:text-red-500 focus:outline-none transition-colors duration-300"
              >
                <X size={32} />
              </motion.button>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={linkVariants}
                  >
                    <NavItem
                      item={item}
                      onClick={closeMenu}
                      isActive={location.pathname === item.path}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default FloatingNavigation;