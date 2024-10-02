import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectsFooter = () => {
  return (
    <>
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <a href="https://github.com/prateeksingchn" target="_blank" rel="noopener noreferrer" className="text-[#4fff4b] hover:text-[#4fff4b]/80 inline-flex items-center font-['space_mono'] ">
          View more on GitHub <ExternalLink className="ml-2" size={16} />
        </a>
      </motion.div>
      <motion.h2
        className="text-5xl md:text-5xl lg:text-6xl font-bold text-center mt-10 mb-16 text-white font-['Space_Mono']"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Shipping More Soon
      </motion.h2>
    </>
  );
};

export default ProjectsFooter;