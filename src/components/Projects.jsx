import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import { FaSpaceShuttle } from "react-icons/fa";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: 'Image Gallery',
    date: 'Jan 2024',
    description: 'A responsive image gallery with advanced filtering and lazy loading',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    technologies: ['React', 'CSS Grid', 'Intersection Observer API', 'Unsplash API'],
    sourceCode: 'https://github.com/yourusername/image-gallery',
    liveDemo: 'https://image-gallery.yourdomain.com',
    filters: ['frontend', 'top', 'all'],
  },
  {
    id: 2,
    title: 'Recipe App',
    date: 'Feb 2024',
    description: 'A comprehensive recipe management application with search and filtering',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
    technologies: ['React', 'Redux', 'Firebase', 'Styled Components'],
    sourceCode: 'https://github.com/yourusername/recipe-app',
    liveDemo: 'https://recipe-app.yourdomain.com',
    filters: ['frontend', 'top', 'all'],
  },
  {
    id: 3,
    title: 'E-commerce Store',
    date: 'Mar 2024',
    description: 'Full-stack e-commerce platform with user authentication and payment integration',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    sourceCode: 'https://github.com/yourusername/ecommerce-store',
    liveDemo: 'https://ecommerce-store.yourdomain.com',
    filters: ['fullstack', 'mern', 'top', 'all'],
  },
  {
    id: 4,
    title: 'Social Media (Instagram Clone)',
    date: 'Apr 2024',
    description: 'A feature-rich social media platform inspired by Instagram',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    sourceCode: 'https://github.com/yourusername/social-media-clone',
    liveDemo: 'https://social-media-clone.yourdomain.com',
    filters: ['mern', 'fullstack', 'top', 'all'],
  },
  {
    id: 5,
    title: 'Blog App',
    date: 'May 2024',
    description: 'A full-stack blogging platform with rich text editing and commenting system',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Tailwind CSS'],
    sourceCode: 'https://github.com/yourusername/blog-app',
    liveDemo: 'https://blog-app.yourdomain.com',
    filters: ['fullstack', 'top', 'all'],
  },
  {
    id: 6,
    title: 'Food Delivery Application',
    date: 'Jun 2024',
    description: 'A comprehensive food delivery platform with real-time order tracking',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2',
    technologies: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    sourceCode: 'https://github.com/yourusername/food-delivery-app',
    liveDemo: 'https://food-delivery-app.yourdomain.com',
    filters: ['mern', 'fullstack', 'top', 'all'],
  },
  {
    id: 7,
    title: 'Ochi Clone',
    date: 'Jul 2024',
    description: 'A pixel-perfect clone of the Ochi design agency website',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/ochi-clone',
    liveDemo: 'https://ochi-clone.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 8,
    title: 'S2F',
    date: 'Aug 2024',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
    sourceCode: 'https://github.com/yourusername/s2f',
    liveDemo: 'https://s2f.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 9,
    title: 'Movie Seat Booking App',
    date: 'Sep 2024',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a',
    technologies: ['React', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/yourusername/movie-seat-booking-app',
    liveDemo: 'https://movie-seat-booking-app.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 10,
    title: 'Notes App',
    date: 'Oct 2024',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/yourusername/notes-app',
    liveDemo: 'https://notes-app.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 11,
    title: 'Netflix Clone',
    date: 'Nov 2024',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73',
    technologies: ['React', 'Redux', 'Firebase', 'Styled Components'],
    sourceCode: 'https://github.com/yourusername/netflix-clone',
    liveDemo: 'https://netflix-clone.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 12,
    title: 'Apple Vision Pro Clone',
    date: 'Dec 2024',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/apple-vision-pro-clone',
    liveDemo: 'https://apple-vision-pro-clone.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 13,
    title: 'Apple AirPods Pro',
    date: 'Jan 2025',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/apple-airpods-pro',
    liveDemo: 'https://apple-airpods-pro.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 14,
    title: 'Banana Blossom Salads',
    date: 'Feb 2025',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/banana-blossom-salads',
    liveDemo: 'https://banana-blossom-salads.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 15,
    title: 'Brandium',
    date: 'Mar 2025',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/brandium',
    liveDemo: 'https://brandium.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 16,
    title: 'Duo Studio',
    date: 'Apr 2025',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/duo-studio',
    liveDemo: 'https://duo-studio.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 17,
    title: 'Cuberto',
    date: 'May 2025',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/cuberto',
    liveDemo: 'https://cuberto.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 18,
    title: 'Kikin',
    date: 'Jun 2025',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/kikin',
    liveDemo: 'https://kikin.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 19,
    title: 'Hotel Odisej',
    date: 'Jul 2025',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/hotel-odisej',
    liveDemo: 'https://hotel-odisej.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 20,
    title: 'Miranda Portfolio Clone',
    date: 'Aug 2025',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/miranda-portfolio-clone',
    liveDemo: 'https://miranda-portfolio-clone.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 21,
    title: 'Planet Dial',
    date: 'Sep 2025',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/planet-dial',
    liveDemo: 'https://planet-dial.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 22,
    title: 'Spain Collection',
    date: 'Oct 2025',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/spain-collection',
    liveDemo: 'https://spain-collection.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 23,
    title: 'Sidclub',
    date: 'Nov 2025',
    description: 'A fictional project description',
    image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a',
    technologies: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    sourceCode: 'https://github.com/yourusername/sidclub',
    liveDemo: 'https://sidclub.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 24,
    title: 'Lagunitas',
    date: 'Dec 2025',
    description: 'An interactive brewery tour and product showcase',
    image: 'https://images.unsplash.com/photo-1505075106905-fb052892c116',
    technologies: ['Gatsby.js', 'WebGL', 'Framer Motion', 'GraphQL'],
    sourceCode: 'https://github.com/yourusername/lagunitas-experience',
    liveDemo: 'https://lagunitas-experience.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 25,
    title: 'Ames Foundation',
    date: 'Jan 2026',
    description: 'A non-profit organization website with donation integration',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6',
    technologies: ['WordPress', 'PHP', 'SCSS', 'Stripe API'],
    sourceCode: 'https://github.com/yourusername/ames-foundation',
    liveDemo: 'https://ames-foundation.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 26,
    title: 'Mario Game',
    date: 'Feb 2026',
    description: 'A browser-based tribute to the classic Super Mario Bros.',
    image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd',
    technologies: ['JavaScript', 'HTML5 Canvas', 'Howler.js', 'Webpack'],
    sourceCode: 'https://github.com/yourusername/mario-tribute',
    liveDemo: 'https://mario-tribute.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 27,
    title: 'Parallax Effect GSAP',
    date: 'Mar 2026',
    description: 'A showcase of advanced parallax scrolling techniques',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
    technologies: ['React', 'GSAP', 'ScrollTrigger', 'CSS Modules'],
    sourceCode: 'https://github.com/yourusername/parallax-gsap',
    liveDemo: 'https://parallax-gsap.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 28,
    title: 'Sundown',
    date: 'Apr 2026',
    description: 'A weather app with beautiful sunset predictions',
    image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869',
    technologies: ['React Native', 'Expo', 'OpenWeatherMap API', 'Redux'],
    sourceCode: 'https://github.com/yourusername/sundown-app',
    liveDemo: 'https://sundown-app.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 29,
    title: 'Two Good Co',
    date: 'May 2026',
    description: 'An e-commerce site for a social enterprise',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad',
    technologies: ['Next.js', 'Stripe', 'Contentful', 'Tailwind CSS'],
    sourceCode: 'https://github.com/yourusername/two-good-co',
    liveDemo: 'https://two-good-co.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 30,
    title: 'Budget App',
    date: 'Jun 2026',
    description: 'A comprehensive personal finance management tool',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    technologies: ['Vue.js', 'Vuex', 'Chart.js', 'Firebase'],
    sourceCode: 'https://github.com/yourusername/budget-tracker',
    liveDemo: 'https://budget-tracker.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 31,
    title: 'QR Code Generator',
    date: 'Jul 2026',
    description: 'A simple yet powerful QR code creation tool',
    image: 'https://images.unsplash.com/photo-1595079676077-f88a2029f979',
    technologies: ['JavaScript', 'qrcode.js', 'HTML5', 'CSS3'],
    sourceCode: 'https://github.com/yourusername/qr-code-generator',
    liveDemo: 'https://qr-code-generator.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 32,
    title: 'To-Do List',
    date: 'Aug 2026',
    description: 'A feature-rich task management application',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
    technologies: ['React', 'Redux Toolkit', 'Material-UI', 'LocalStorage API'],
    sourceCode: 'https://github.com/yourusername/to-do-list',
    liveDemo: 'https://todo-app.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 33,
    title: 'Password Generator',
    date: 'Sep 2026',
    description: 'A secure password generation tool with customizable options',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7',
    technologies: ['JavaScript', 'Crypto API', 'CSS Grid', 'PWA'],
    sourceCode: 'https://github.com/yourusername/password-generator',
    liveDemo: 'https://password-generator.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 34,
    title: 'BMI Calculator',
    date: 'Oct 2026',
    description: 'An interactive Body Mass Index calculator with health insights',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    technologies: ['Svelte', 'Chart.js', 'CSS Variables', 'Web Animations API'],
    sourceCode: 'https://github.com/yourusername/bmi-calculator',
    liveDemo: 'https://bmi-calculator.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 35,
    title: 'TinyWins Clone',
    date: 'Nov 2026',
    description: 'A productivity app inspired by the TinyWins methodology',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
    technologies: ['React Native', 'Redux', 'Async Storage', 'React Navigation'],
    sourceCode: 'https://github.com/yourusername/tinywins-clone',
    liveDemo: 'https://tinywins-clone.yourdomain.com',
    filters: ['frontend', 'all'],
  },
  {
    id: 36,
    title: 'Finsense (All-In-One Financial Assistant)',
    date: 'Dec 2026',
    description: 'A comprehensive financial management and advisory platform',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e',
    technologies: ['Angular', 'NgRx', 'D3.js', 'Node.js', 'MongoDB'],
    sourceCode: 'https://github.com/yourusername/finsense',
    liveDemo: 'https://finsense.yourdomain.com',
    filters: ['frontend', 'all'],
  },
];

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
    if (projectType === 'top projects') return project.filters.includes('top');
    if (projectType === 'all projects') return true;
    return project.filters.includes(projectType);
  });

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
          {filteredProjects.map((project, index) => (
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
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-[220px] object-cover rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-80"
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