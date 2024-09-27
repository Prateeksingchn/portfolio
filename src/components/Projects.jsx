import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import { FaSpaceShuttle } from "react-icons/fa";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { db } from '../firebase';
import { collection, query, where, getDocs, limit, orderBy } from "firebase/firestore";

// Browser Container
const BrowserContainer = ({ children, title }) => (
  <div className="rounded-lg overflow-hidden bg-gradient-to-b from-[#1e1e1e] to-[#121212] shadow-2xl">
    {/* Browser Header */}
    <div className="bg-[#0f0f0f] px-[12px] py-1 flex items-center justify-between border-b border-black">
      <div className="flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-red-500 opacity-80 hover:opacity-100 transition-opacity"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-80 hover:opacity-100 transition-opacity"></div>
        <div className="w-2 h-2 rounded-full bg-green-500 opacity-80 hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="flex-grow mx-4">
        <div className="w-2/3 h-4 bg-[#2a2a2a] rounded-lg mx-auto flex items-center justify-center">
          <span className="text-xs text-gray-400 truncate">{title}</span>
        </div>
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

// Galaxy Filter
const GalaxyFilter = ({ activeOption, onToggle }) => {
  const options = ['top projects', 'all projects', 'frontend', 'backend', 'fullstack', 'mern'];
  
  return (
    <div className="relative group">
      <button
        className="flex items-center justify-between w-[160px] md:w-[150px] lg:w-[150px] px-4 py-2 text-white bg-[#0a0a0a] border-2 border-[#333] rounded-lg hover:bg-[#252525] transition-colors duration-300"
      >
        <span>{activeOption.charAt(0).toUpperCase() + activeOption.slice(1)}</span>
        <ChevronDown className="ml-2 transition-transform duration-300 group-hover:transform group-hover:rotate-180" size={16} />
      </button>
      <div className="absolute right-0 mt-2 w-[160px] md:w-[150px] lg:w-[150px] bg-[#1a1a1a] border-2 border-[#333] rounded-lg shadow-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onToggle(option)}
            className={`block w-full text-left px-4 py-2 hover:bg-[#252525] transition-colors duration-300 ${
              option === activeOption ? 'text-blue-400' : 'text-white'
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </div>
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
  const [projectType, setProjectType] = useState('top projects');
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(5);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

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

  const loadProjects = useCallback(async () => {
    setLoading(true);
    try {
      let q;
      if (projectType === 'top projects') {
        q = query(
          collection(db, "projects"),
          where("filters", "array-contains", "top"),
          orderBy("date", "desc"),
          limit(visibleProjects)
        );
      } else if (projectType === 'all projects') {
        q = query(
          collection(db, "projects"),
          orderBy("date", "desc"),
          limit(visibleProjects)
        );
      } else {
        q = query(
          collection(db, "projects"),
          where("filters", "array-contains", projectType),
          orderBy("date", "desc"),
          limit(visibleProjects)
        );
      }

      const querySnapshot = await getDocs(q);
      const fetchedProjects = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(fetchedProjects);
      setHasMore(fetchedProjects.length === visibleProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  }, [projectType, visibleProjects]);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const loadMoreProjects = () => {
    setVisibleProjects(prevVisible => prevVisible + 5);
  };

  // Function to capitalize the first letter of each word
  const capitalizeWords = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white py-16 px-4 sm:px-16 lg:px-8 overflow-hidden">
      {/* Space Shuttle Back button */}
      <motion.div
        className="absolute top-4 left-4 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SpaceShuttleBackButton />
      </motion.div>

      {/* Galaxy Filter */}
      <motion.div
        className="absolute top-48 md:top-60 lg:top-60 right-4 z-20 hidden md:block lg:block xl:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GalaxyFilter
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
            
        <div className='flex flex-col sm:flex-row-reverse md:flex-col gap-4 items-center justify-center sm:items-center sm:justify-between md:items-start md:justify-start lg:items-start lg:justify-start xl:items-start xl:justify-start'>
          {/* Galaxy Filter for small screens */}
          <motion.div
            className="mb-4 block md:hidden lg:hidden xl:hidden z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GalaxyFilter
            activeOption={projectType}
              onToggle={setProjectType}
            />
          </motion.div>

          <motion.h2 
            key={projectType} // Add this to trigger animation on change
            className="text-3xl font-semibold mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {capitalizeWords(projectType)}
          </motion.h2>
        </div>

        {/* Projects */}
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {loading ? (
            <div className="text-center">Loading projects...</div>
          ) : projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="flex flex-col md:flex-row gap-8 items-start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full md:w-1/2">
                  <BrowserContainer title={project.title}>
                    <Link to={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <LazyLoadImage 
                        src={project.image} 
                        alt={project.title} 
                        effect="blur"
                        className="w-[425px] h-[220px] object-cover rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80"
                      />
                    </Link>
                  </BrowserContainer>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-100 to-pink-600 bg-clip-text text-transparent">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.date}</p>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-zinc-900 text-gray-100 px-3 py-[6px] text-xs rounded-lg border border-black">
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
            ))
          ) : (
            <div className="text-center">No projects found for the selected filter.</div>
          )}
        </motion.div>

        {/* View More Projects button */}
        {hasMore && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={loadMoreProjects}
              className="bg-zinc-800 text-white hover:bg-zinc-700"
            >
              View More Projects
            </Button>
          </motion.div>
        )}

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
          className="text-6xl font-bold text-center mt-32 mb-16 text-white font-[anton]"
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