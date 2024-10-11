import React, { useState } from "react"; 
import { Link, useLocation } from "react-router-dom"; 
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion

const NavItem = ({ to, label, onClick }) => {
  const isAbout = label === "About Me";
  
  return (
    <motion.li variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    }}>
      <Link
        to={to}
        className={`text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] font-bold w-full text-5xl flex items-center`}
        onClick={onClick}
      >
        {isAbout && <span className="w-8 h-1 bg-white -ml-12 mr-4"></span>}
        {label}
      </Link>
    </motion.li>
  );
};

const SmallNavigation = ({ isOpen, toggleMenu }) => {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About Me" },
    { to: "/contact", label: "Contact" },
  ];

  const isActiveRoute = (path) => {
    const isActive = path === '/' 
      ? (location.pathname === '/' || location.pathname === '')
      : location.pathname.startsWith(path);
    
    console.log(`Checking path: ${path}, Current location: ${location.pathname}, isActive: ${isActive}`);
    return isActive;
  };

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
              {navItems.map((item) => {
                const active = isActiveRoute(item.to);
                console.log(`Rendering NavItem: ${item.label}, isActive: ${active}`);
                return (
                  <NavItem
                    key={item.to}
                    to={item.to}
                    label={item.label}
                    onClick={toggleMenu}
                    isActive={active}
                  />
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const LargeNavigation = () => {
  const location = useLocation();
  return (
    <nav className="hidden md:block absolute top-4 right-4 z-20">
      <ul className="flex space-x-6">
        {[ 
          { to: "/", label: "Home" },
          { to: "/projects", label: "Projects" },
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" },
        ].map((link) => (
          <li key={link.to}>
            <Link 
              to={link.to} 
              className={`text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm relative ${
                location.pathname === link.to ? 'text-blue-400' : ''
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-[-4px] h-0.5 w-full bg-blue-400"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

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