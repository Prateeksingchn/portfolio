import React, { useState } from "react"; // Import useState for managing toggle state
import { Link } from "react-router-dom";

function Navigation({ isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <div className="fixed top-10 left-10 z-10 w-1/4">
      <Link to="/" className={`flex items-center mb-4 ${isDarkMode ? 'text-white' : 'text-[#000000]'}`}>
        <span className={`font-['Dancing_Script'] text-3xl ${isDarkMode ? 'text-white' : 'text-[#000000]'}`}> {/* Reduced font size */}
          Prateek Singh Chouhan
        </span>
      </Link>

      {/* Menu Button for smaller screens */}
      <button 
        onClick={toggleMenu} 
        className={`md:hidden p-2 rounded ${isDarkMode ? 'text-white' : 'text-black'} transition-colors`}
        aria-label="Toggle Navigation Menu"
      >
        {isMenuOpen ? 'Close Menu' : 'Menu'} {/* Button text changes based on menu state */}
      </button>

      {/* Navigation Links */}
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}> {/* Show/Hide based on toggle state */}
        <ul className="space-y-2 text-lg">
          {[
            { to: "/", label: "Home" },
            { to: "/projects", label: "Projects" },
            { to: "/about", label: "About me" },
            { to: "/contact", label: "Contact me" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`relative group flex items-center text-[1rem] font-light font-['roboto'] transition-colors ${
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
}

export default Navigation;