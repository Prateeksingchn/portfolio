import React from "react";
import { Link } from "react-router-dom";

function Navigation({ isDarkMode }) {
  return (
    <div className="fixed top-10 left-10 z-10 w-1/4">
      <h2
        className={`text-[1.6rem] mb-5 font-[500] font-['roboto'] ${
          isDarkMode ? "text-white" : "text-[#000000]"
        }`}
      >
        Prateeksingchn
      </h2>
      <nav>
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