import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { FaSpaceShuttle } from "react-icons/fa";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const projectsData = [
  {
    id: 1,
    title: 'Space',
    date: 'Aug 2024',
    description: 'My personal website and blog',
    image: 'https://images.unsplash.com/photo-1652456374997-1781458e2a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjByZW5kZXJ8ZW58MHx8MHx8fDA%3D',
    technologies: ['Portfolio', 'Next.js', 'Framer motion', 'TypeScript', 'Shadcn UI', 'TailwindCSS'],
    sourceCode: 'https://github.com/yourusername/space',
    liveDemo: 'https://space.yourdomain.com',
    type: 'frontend',
  },
  {
    id: 2,
    title: 'Fit Flow',
    date: 'Jan 2024 - July 2024',
    description: 'StackOverFlow for Gym rat',
    image: 'https://images.unsplash.com/photo-1654015064357-0437ef521b0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind', 'TailwindCSS', 'Shadcn UI'],
    sourceCode: 'https://github.com/yourusername/fit-flow',
    liveDemo: 'https://fitflow.yourdomain.com',
    type: 'fullstack',
  },
  {
    id: 3,
    title: 'Recipes App',
    date: 'Jan 2024 - July 2024',
    description: 'StackOverFlow for Gym rat',
    image: 'https://images.unsplash.com/photo-1652992252915-f9b6592a61a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind', 'TailwindCSS', 'Shadcn UI'],
    sourceCode: 'https://github.com/yourusername/fit-flow',
    liveDemo: 'https://fitflow.yourdomain.com',
    type: 'frontend',
  },
  {
    id: 4,
    title: 'Image Gallery',
    date: 'Jan 2024 - July 2024',
    description: 'StackOverFlow for Gym rat',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind', 'TailwindCSS', 'Shadcn UI'],
    sourceCode: 'https://github.com/yourusername/fit-flow',
    liveDemo: 'https://fitflow.yourdomain.com',
    type: 'frontend',
  },
  // ... (other projects)
];

// Browser Container
const BrowserContainer = ({ children }) => (
  <div className="rounded-lg overflow-hidden bg-gradient-to-b from-[#1e1e1e] to-[#121212] shadow-2xl">

    {/* Browser Header */}

    <div className="bg-[#0f0f0f] px-[12px] py-1 flex items-center justify-between border-b border-black">
      <div className="flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-red-500 opacity-80 hover:opacity-100 transition-opacity"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-80 hover:opacity-100 transition-opacity"></div>
        <div className="w-2 h-2 rounded-full bg-green-500 opacity-80 hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="flex-grow mx-4">
        <div className="w-2/3 h-2 bg-[#2a2a2a] rounded-full mx-auto"></div>
      </div>
      <div className="flex space-x-2">
        <div className="w-[16px] h-[16px] rounded-md border border-gray-700 flex items-center justify-center">
          <div className="w-[5px] h-[5px] bg-gray-400"></div>
        </div>
        <div className="w-[16px] h-[16px] rounded-md border border-gray-700 flex items-center justify-center">
          <svg className="w-3 h-3 text-gray-400 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    
    {/* Browser Content */}
    <div className="p-1">
      {children}
    </div>
  </div>
);

// Planet Filter
const PlanetFilter = ({ activeOption, onToggle }) => {
  const options = ['all', 'frontend', 'backend', 'fullstack', 'mern'];
  
  return (
    <Select onValueChange={onToggle} defaultValue={activeOption}>
      <SelectTrigger className="w-[180px] bg-black text-white border-2 border-zinc-500">
        <SelectValue placeholder="Select a planet" />
      </SelectTrigger>
      <SelectContent className="bg-black text-white border-zinc-500">
        {options.map((option) => (
          <SelectItem key={option} value={option} className="hover:bg-[#121212]">
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};


// Space Shuttle Back Button
const SpaceShuttleBackButton = () => (
  <Link to="/" className="group flex items-center space-x-3 px-5 py-3 rounded-full transition-all duration-300">
    <motion.div
      whileHover={{ rotate: -90, scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="group-hover:text-blue-400"
    >
      <FaSpaceShuttle className="text-white text-2xl transition-colors duration-300" />
    </motion.div>
    <motion.span 
      className="text-white font-medium relative text-base tracking-wide transition-colors duration-300 group-hover:text-blue-400"
      whileHover={{ x: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      Return to Launch Pad
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  </Link>
);

const Projects = () => {
  const [stars, setStars] = useState([]);
  const [projectType, setProjectType] = useState('all');

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 200 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.05 + 0.01,
      }));
    };

    setStars(generateStars());

    const moveStars = () => {
      setStars(prevStars => prevStars.map(star => ({
        ...star,
        x: (star.x + star.speed) % 100,
        y: (star.y + star.speed * 0.5) % 100, // Diagonal movement
      })));
    };

    const intervalId = setInterval(moveStars, 50);
    return () => clearInterval(intervalId);
  }, []);

  const filteredProjects = projectsData.filter(project => {
    if (projectType === 'all') return true;
    return project.type === projectType;
  });

  return (
    <div className="relative min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Space Shuttle Back button */}
      <motion.div
        className="absolute top-4 left-4 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SpaceShuttleBackButton />
      </motion.div>

      {/* Planet Filter in top right corner */}
      <motion.div
        className="absolute top-4 right-4 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PlanetFilter
          activeOption={projectType}
          onToggle={setProjectType}
        />
      </motion.div>

      {/* Animated starfield */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1 
          className="text-6xl font-bold text-center mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Projects
        </motion.h1>
        <motion.p 
          className="text-lg font-bold text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Projects I've Crafted
        </motion.p>

        {/* Improved gradient line */}
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

        <motion.h2 
          className="text-3xl font-semibold mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Top Projects
        </motion.h2>


        {/* Projects  */}
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex flex-col md:flex-row gap-8 items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:w-1/2">
                <BrowserContainer>
                  <Link to={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-[220px] object-cover rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80"
                    />
                  </Link>
                </BrowserContainer>
              </div>
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-100 to-pink-600 bg-clip-text text-transparent">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.date}</p>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-zinc-900 text-gray-100 px-3 py-[3px] text-xs rounded-lg border border-black">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                      <Github className="mr-2" size={16} />
                      Source
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                      Demo
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="https://github.com/prateeksingchn" target="_blank" rel="noopener noreferrer" className="text-[#4fff4b] hover:text-[#4fff4b]/80 inline-flex items-center">
            View more on GitHub <ExternalLink className="ml-2" size={16} />
          </a>
        </motion.div>

        <motion.h2
          className="text-6xl font-bold text-center mt-32 mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Shipping More Soon
        </motion.h2>
      </div>
    </div>
  );
};

export default Projects;