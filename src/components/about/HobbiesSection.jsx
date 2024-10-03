import React from "react";
import { motion } from "framer-motion";

const HobbiesSection = () => {
  const hobbies = [
    { icon: "🎮", name: "Gaming"},
    { icon: "📸", name: "Photography"},
    { icon: "⚽", name: "Football"},
    { icon: "🏊", name: "Swimming"},
    { icon: "🏏", name: "Cricket"},
  ];

  return (
    <motion.section 
      className="mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Hobbies & Interests</h2>
      <div className="flex flex-wrap justify-start sm:justify-start gap-4">
        {hobbies.map((hobby, index) => (
          <motion.div 
            key={index}
            className="w-20 lg:w-24 sm:w-auto rounded-lg p-2 shadow-lg flex flex-col items-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
          >
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{hobby.icon}</div>
            <h3 className="text-xs sm:text-sm font-bold">{hobby.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HobbiesSection;