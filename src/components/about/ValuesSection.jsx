import React from "react";
import { motion } from "framer-motion";

const ValuesSection = () => {
  const values = [
    { title: "User-Centric Design", description: "I believe in creating intuitive and accessible interfaces that prioritize the end-user's experience." },
    { title: "Continuous Learning", description: "I'm committed to staying updated with the latest technologies and best practices in web development." },
    { title: "Attention to Detail", description: "I strive for pixel-perfect designs and clean, efficient code in every project." },
    { title: "Collaborative Approach", description: "I value open communication and teamwork to achieve the best possible outcomes." }
  ];

  return (
    <motion.section 
      className="mb-12 sm:mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Values & Work Philosophy</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6">
        {values.map((item, index) => (
          <motion.div 
            key={index}
            className="p-4 lg:p-6 rounded-lg shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <h3 className="text-[1rem] md:text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ValuesSection;