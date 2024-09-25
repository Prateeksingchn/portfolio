import React from 'react';
import { motion } from 'framer-motion';

const ProfileSection = () => {
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8 relative overflow-hidden">
      <motion.div
        className="relative z-10 flex flex-col h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-8">
          <motion.img
            className="h-12 w-14 rounded-full object-cover mr-3 shadow-lg"
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
              Full Stack Developer | Front-End Specialist
            </p>
          </div>
        </div>

        <p className="text-[28px] leading-8 font-semibold text-zinc-400 dark:text-zinc-300 mb-8">
          Building sleek and effective digital experiences
        </p>

        <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-4">
          👋 Hello! I'm Prateek, a versatile full-stack developer with a passion for crafting user-focused experiences. With 50+ projects under my belt, I specialize in:
        </p>

        <ul className="list-none text-lg text-zinc-500 dark:text-zinc-400 mb-4 space-y-2">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Debugging: because every superhero needs a nemesis</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Converting caffeine into code since 2022</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Fluent in JavaScript, HTML, and dad jokes</span>
          </li>
        </ul>

        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          Off-screen: Scoring goals on the football field and at the gym. Balancing life like a well-structured codebase.
        </p>
      </motion.div>
    </div>
  );
}

export default ProfileSection;