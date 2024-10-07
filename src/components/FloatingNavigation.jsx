import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
//   { name: "Home", path: "/" },
  { name: "Projects", path: "/Projects" },
  { name: "About", path: "/About" },
  { name: "Contact", path: "/Contact" },
];

const NavItem = ({ item, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="overflow-hidden"
    >
      <Link
        to={item.path}
        onClick={onClick}
        className={`block px-4 py-2 text-5xl leading-[65px] font-bold font-['space_mono'] ${
          isActive ? "text-red-500" : "text-gray-200 hover:text-red-500"
        } mb-4 transition-colors duration-300`}
      >
        {item.name}
      </Link>
    </motion.div>
  );
};

const FloatingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
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
        <div className="flex items-center justify-between h-16">
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
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 w-full md:w-2/3 lg:w-2/5 bg-[#1a1a1a] overflow-hidden flex flex-col justify-center items-center shadow-xl"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={closeMenu}
              className="absolute top-3 right-4 p-2 rounded-md text-gray-100 hover:text-red-500 focus:outline-none transition-colors duration-300"
            >
              <X size={32} />
            </motion.button>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              {navItems.map((item, i) => (
                <NavItem
                  key={item.name}
                  item={item}
                  onClick={closeMenu}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default FloatingNavigation;