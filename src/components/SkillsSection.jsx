import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaDocker, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiVisualstudiocode, SiRedux, SiFramer, SiAdobephotoshop, SiGreensock } from 'react-icons/si';
import { TbBrandHtml5 } from 'react-icons/tb';

const skillCategories = [
  {
    name: "Frontend",
    skills: [FaReact, SiNextdotjs, SiTailwindcss, SiJavascript, TbBrandHtml5],
  },
  {
    name: "Backend",
    skills: [FaNodeJs, SiExpress, SiMongodb, FaJava],
  },
  {
    name: "Tools",
    skills: [FaGitAlt, FaDocker, SiVisualstudiocode, FaFigma],
  },
  {
    name: "Other",
    skills: [SiRedux, SiGreensock, SiFramer, SiAdobephotoshop],
  },
];

const SkillItem = ({ Icon }) => (
  <motion.div
    className="flex items-center justify-center p-2 w-12 h-12  text-gray-300 rounded-lg transition-colors duration-300 hover:bg-gray-700 hover:text-white"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-8 h-8" />
  </motion.div>
);

const MarqueeSkills = ({ skills }) => (
  <div className="overflow-hidden py-2">
    <motion.div
      className="flex"
      animate={{
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      }}
    >
      {skills.concat(skills).map((Icon, index) => (
        <SkillItem key={`${Icon.name}-${index}`} Icon={Icon} />
      ))}
    </motion.div>
  </div>
);

function SkillsSection() {
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-[#1A1A1A] dark:bg-secondary dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl py-12 px-6">
      <div>
        <motion.h2
          className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          className="space-y-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-2">
              <h3 className="text-2xl font-medium text-gray-100 mb-2">
                {category.name}
              </h3>
              <MarqueeSkills skills={category.skills} />
            </div>
          ))}
        </motion.div>
        <motion.p
          className="text-lg text-gray-400 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Continuously learning and expanding my skill set to stay at the
          forefront of web development.
        </motion.p>
      </div>
    </div>
  );
}

export default SkillsSection;