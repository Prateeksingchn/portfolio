import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiVisualstudiocode, SiRedux, SiGreensock, SiVercel, SiFigma, SiTypescript, SiFirebase, SiOpenai, SiPostman, SiNpm, SiNotion } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const FramerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341 511.492" width="1.3em" height="1.3em">
    <g fillRule="nonzero">
      <path fill="#0162FF" d="M0 340.992h170.5v170.5z"/>
      <path fill="#01A3FF" d="M0 170.5h170.5L341 340.999l-341-.007z"/>
      <path fill="#67DBFF" d="M0 0h341v170.5H170.5z"/>
    </g>
  </svg>
);

const ClaudeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
    <rect fill="#CC9B7A" width="512" height="512" rx="104.187" ry="105.042"/>
    <path fill="#1F1F1E" fill-rule="nonzero" d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z"/>
  </svg>
);

const GeminiIcon = () => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
    <path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#prefix__paint0_radial_980_20147)"/>
    <defs>
      <radialGradient id="prefix__paint0_radial_980_20147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)">
        <stop offset=".067" stop-color="#9168C0"/>
        <stop offset=".343" stop-color="#5684D1"/>
        <stop offset=".672" stop-color="#1BA1E3"/>
      </radialGradient>
    </defs>
  </svg>
);

const PerplexityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 509.64" width="1em" height="1em">
    <path fill="#1F1F1F" d="M115.613 0h280.774C459.974 0 512 52.025 512 115.612v278.415c0 63.587-52.026 115.613-115.613 115.613H115.613C52.026 509.64 0 457.614 0 394.027V115.612C0 52.025 52.026 0 115.613 0z"/>
    <path fill="#fff" fill-rule="nonzero" d="M348.851 128.063l-68.946 58.302h68.946v-58.302zm-83.908 48.709l100.931-85.349v94.942h32.244v143.421h-38.731v90.004l-94.442-86.662v83.946h-17.023v-83.906l-96.596 86.246v-89.628h-37.445V186.365h38.732V90.768l95.309 84.958v-83.16h17.023l-.002 84.206zm-29.209 26.616c-34.955.02-69.893 0-104.83 0v109.375h20.415v-27.121l84.415-82.254zm41.445 0l82.208 82.324v27.051h21.708V203.388c-34.617 0-69.274.02-103.916 0zm-42.874-17.023l-64.669-57.646v57.646h64.669zm13.617 124.076v-95.2l-79.573 77.516v88.731l79.573-71.047zm17.252-95.022v94.863l77.19 70.83c0-29.485-.012-58.943-.012-88.425l-77.178-77.268z"/>
  </svg>
);

const CursorIcon = () => (
  <img src="../public/images/cursorlogo.png" alt="Cursor AI" className="w-6 h-6" />
);

const skillCategories = [
  {
    name: "Skills",
    skills: [
      { Icon: FaHtml5, name: "HTML", color: "#E34F26" },
      { Icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
      { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { Icon: FaJava, name: "Java", color: "#007396" }, // Added Java
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
      { Icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" },
      { Icon: FaReact, name: "React", color: "#61DAFB" },
      { Icon: SiRedux, name: "Redux", color: "#764ABC" },
      { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
      { Icon: SiExpress, name: "Express.js", color: "#000000" },
      { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { Icon: SiGreensock, name: "GSAP", color: "#88CE02" },
      { Icon: FramerIcon, name: "Framer Motion", color: "#0055FF" },
      { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { Icon: FaGitAlt, name: "Git", color: "#F05032" },
      { Icon: FaGithub, name: "GitHub", color: "#181717" },
      { Icon: TbBrandVscode, name: "VS Code", color: "#007ACC" },
      { Icon: SiNotion, name: "Notion", color: "#000000" }, // Replace Cursor with Notion
      { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
      { Icon: FramerIcon, name: "Framer", color: "#0055FF" },
      { Icon: SiVercel, name: "Vercel", color: "#000000" },
      { Icon: SiOpenai, name: "AI Assistants", color: "#412991" },
      { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
      { Icon: SiNpm, name: "npm", color: "#CB3837" },
    ],
  },
];

const SkillItem = ({ Icon, name, color }) => (
  <motion.div
    className="flex flex-col items-center justify-center p-2 w-14 sm:w-16 h-[60px] sm:h-[70px] md:h-[70px] bg-zinc-800 text-gray-300 rounded-lg transition-colors duration-300 hover:bg-gray-700 hover:text-white cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-[3px] sm:mb-[3px] md:mb-[3px] " style={{ color }} />
    <span className="text-[8px] sm:text-[10px] text-center">{name}</span>
  </motion.div>
);

function SkillsSection() {
  return (
    <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-gradient-to-b from-[#1A1A1A] via-[#141414] to-[#141414] dark:bg-secondary dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl py-8 sm:py-10 md:py-12 px-4 sm:px-5 md:px-6">
      <div>
        <motion.h2
          className="text-3xl sm:text-[2rem] md:text-5xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          className="space-y-4 sm:space-y-5 md:space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-6 sm:mb-7 md:mb-8">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-100 mb-3 sm:mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={`${skill.name}-${skillIndex}`} Icon={skill.Icon} name={skill.name} color={skill.color} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SkillsSection;