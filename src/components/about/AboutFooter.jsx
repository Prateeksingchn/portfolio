import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const AboutFooter = () => (
  <motion.footer 
    className="text-center pt-5 mt-12 bg-black border-t border-[#808080] px-4 sm:px-6 lg:px-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col sm:flex-row justify-between items-center max-w-3xl mx-auto text-sm text-gray-200">
      <p className="text-sm text-[#808080] mb-2 sm:mb-0">2024 © Prateek Singh Chouhan</p>
      <a 
        href="https://github.com/Prateeksingchn/portfolio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center hover:text-white transition-colors duration-300"
      >
        <FaGithub className="mr-2" />
        <span>Space#4b67bbb</span>
      </a>
    </div>
  </motion.footer>
);

export default AboutFooter;