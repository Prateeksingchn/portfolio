import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer({ isDarkMode }) {
  return (
    <div
      className={`w-full flex flex-col sm:flex-row border-t-[1px] ${
        isDarkMode ? "border-[#d7cdcd71]" : "border-gray-300"
      }`}
    >
      <div
        className={`w-full sm:w-1/4 border-b sm:border-b-0 sm:border-r ${
          isDarkMode ? "border-[#d7cdcd71]" : "border-gray-300"
        } flex flex-col items-start justify-start p-4 pt-5`}
      >
        <span className="text-xl font-light">Contact</span>
      </div>
      <div className="w-full sm:w-3/4 flex flex-col sm:flex-row justify-between items-start px-4 sm:px-6 pt-6 pb-2 sm:pb-16">
        <div className="mb-6 sm:mb-0">
          <span
            className={`text-[1rem] md:text-lg font-light mb-2 block font-['roboto'] ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Reach out for collaboration or say hi at
          </span>
          <a
            href="mailto:prateeksinghchouhan007@gmail.com"
            className={`text-[1rem] lg:text-lg underline break-all ${
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            } transition-colors`}
          >
            prateeksinghchouhan007@gmail.com
          </a>
        </div>
        <div className="flex space-x-6">
          <a
            href="#"
            className={`text-xl ${
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            } transition-colors`}
            aria-label="X"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className={`text-xl ${
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            } transition-colors`}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className={`text-xl ${
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            } transition-colors`}
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;