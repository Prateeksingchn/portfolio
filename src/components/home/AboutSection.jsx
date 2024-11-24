import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function AboutSection({ onMouseEnter, onMouseLeave }) {
  return (
    <Link to="/about" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='lg:col-span-2 xl:col-span-1 h-auto lg:h-[85vh] flex flex-col lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-6 cursor-pointer hover:shadow-2xl transition-shadow duration-300'
      >
        <div className='flex-grow'>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='text-2xl sm:text-[2rem] md:text-[2rem] lg:text-[2rem] tracking-tight font-medium text-primary dark:text-white mb-4'
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className='text-[1rem] md:text-[1.1rem] lg:text-[1.1rem] text-zinc-500 dark:text-zinc-400 space-y-3'
          >
            <span className='block'>
              As a digital designer and full-stack developer, I specialize in creating unique visual identities and functional interfaces for digital products. My approach combines aesthetics with user-centric design principles, ensuring exceptional user experiences.
            </span>
            <span className='block'>
              I believe great design stems from understanding the client's vision, open communication, and respect for end-users. My goal is to bridge complex functionalities and intuitive interfaces, making technology more accessible and enjoyable.
            </span>
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className='text-primary dark:text-white mt-4 font-semibold text-sm'
        >
          Prateek Singh Chouhan
        </motion.p>
      </motion.div>
    </Link>
  );
}

export default AboutSection;