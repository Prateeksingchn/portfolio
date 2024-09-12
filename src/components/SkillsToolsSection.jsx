import React from 'react';
import { motion } from 'framer-motion';

const SkillIcon = ({ icon, name }) => (
  <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }}>
    {icon}
    <span className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{name}</span>
  </motion.div>
);

function SkillsToolsSection() {
  return (
    <div className='lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-[#1A1A1A] dark:bg-secondary dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8'>
      <p className='text-xl tracking-tight font-medium text-primary dark:text-white md:text-4xl mb-2'>Skills & Tools</p>
      <div className='grid grid-cols-1 gap-6'>
        <div>
          <p className='text-lg tracking-tight font-medium text-primary dark:text-white md:text-2xl mb-4'>Skills</p>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-6 text-white'>
            <SkillIcon icon={<i className="text-4xl text-orange-500 fa-brands fa-html5"></i>} name="HTML" />
            <SkillIcon icon={<i className="text-4xl text-blue-500 fa-brands fa-css3-alt"></i>} name="CSS" />
            <SkillIcon icon={<i className="text-4xl text-yellow-400 fa-brands fa-js"></i>} name="JavaScript" />
            <SkillIcon icon={<i className="text-4xl text-teal-400 fa-brands fa-react"></i>} name="React" />
            <SkillIcon icon={<i className="text-4xl text-sky-400 fa-brands fa-twitter"></i>} name="Tailwind" />
            <SkillIcon icon={<i className="text-4xl text-purple-500 fa-solid fa-bolt"></i>} name="Redux" />
            <SkillIcon icon={<i className="text-4xl text-black dark:text-white fa-brands fa-next-js"></i>} name="Next.js" />
          </div>
        </div>
        
        <div className='mt-8'>
          <p className='text-lg tracking-tight font-medium text-primary dark:text-white md:text-2xl mb-4'>Tools</p>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-6 text-white'>
            <SkillIcon icon={<i className="text-4xl text-blue-400 fa-brands fa-github"></i>} name="GitHub" />
            <SkillIcon icon={<i className="text-4xl text-orange-500 fa-brands fa-git-alt"></i>} name="Git" />
            <SkillIcon icon={<i className="text-4xl text-blue-600 fa-brands fa-docker"></i>} name="Docker" />
            <SkillIcon icon={<i className="text-4xl text-purple-400 fa-brands fa-figma"></i>} name="Figma" />
            <SkillIcon icon={<i className="text-4xl text-orange-600 fa-solid fa-laptop-code"></i>} name="VS Code" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsToolsSection;