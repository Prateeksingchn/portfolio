import React from "react";
import { Link } from "react-router-dom";

function Navigation({ isDarkMode }) {
  return (
    <div className="fixed top-10 left-10 z-10 w-1/4 ">
      <Link to="/" className={`justify-center w-[420px] -ml-[67px] ${isDarkMode ? 'hidden' : 'flex'}`}>
        <img src="./public/Signature/signature.png" alt="Prateek Singh Chouhan" className="w-56 h-auto" />
        <img src="./public/Signature/signature2.png" alt="Prateek Singh Chouhan" className="w-56 h-auto -ml-32" />
        <img src="./public/Signature/signature3.png" alt="Prateek Singh Chouhan" className="w-56 h-auto -ml-32" />
      </Link>
      <Link to="/" className={`grid grid-cols-3 w-[420px] -ml-[30px] -mt-6 -mb-4 ${isDarkMode ? 'block' : 'hidden'}`}>
        <img src="./public/images/Prateek_cocosign.png" alt="Prateek Singh Chouhan" className="w-auto h-auto " />
        <img src="./public/images/singh_cocosign.png" alt="Prateek Singh Chouhan" className="w-auto h-auto -ml-9 " />
        <img src="./public/images/chouhan_cocosign.png" alt="Prateek Singh Chouhan" className="w-auto h-auto -ml-[68px]" />
      </Link>

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