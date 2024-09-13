import React from 'react';
import { motion } from 'framer-motion';

const ProfileSection = () => {
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8 relative overflow-hidden">
      <motion.div 
        className="relative z-10 flex flex-col h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-6">
          <motion.img
            className="h-14 w-14 rounded-full object-cover mr-3 shadow-lg"
            src="/images/avatardp.jpg" 
            alt="Prateek Singh Chouhan"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <div>
            <h2 className="text-lg font-bold text-primary dark:text-white">
              Prateek Singh Chouhan
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Full Stack Developer | UI/UX Enthusiast
            </p>
          </div>
        </div>
        
        <motion.h1
          className="text-2xl font-semibold mb-4 text-primary dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Crafting Digital Experiences with Passion and Precision
        </motion.h1>
        
        <motion.p 
          className="text-zinc-500 dark:text-zinc-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          👋 Hey there! I'm Prateek, a passionate full-stack developer from Bhopal, India. Specialized in creating seamless user experiences and transforming complex problems into elegant solutions.
        </motion.p>
        
        <motion.ul
          className="space-y-2 text-zinc-500 dark:text-zinc-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, staggerChildren: 0.1 }}
        >
          {[
            "🚀 Crafting seamless user experiences",
            "💡 Problem-solving enthusiast",
            "🏋️‍♂️ Balancing code sprints with gym sessions",
            "⚽ Scoring goals on the field and in web development"
          ].map((item, index) => (
            <motion.li 
              key={index}
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.p 
          className="text-sm text-zinc-500 dark:text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          When I'm not pushing pixels or debugging code, you'll find me on the football field or at the gym. I believe in the perfect blend of mental and physical challenges to fuel creativity and problem-solving skills.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default ProfileSection;