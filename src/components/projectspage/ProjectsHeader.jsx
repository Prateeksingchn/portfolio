import React from 'react';
import { motion } from 'framer-motion';

const ProjectsHeader = () => {
  return (
    <>
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