import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const AboutFooter = () => (
  <motion.footer 
    className="text-center pt-5 mt-12 bg-black border-t border-[#808080]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-between items-center max-w-3xl mx-auto px-4 text-sm text-gray-200">
      <p className="text-sm text-[#808080]">2024 © Prateek Singh Chouhan</p>
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