import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import StarfieldBackground from './projectspage/StarfieldBackground';
import ProjectsHeader from './projectspage/ProjectsHeader';
import ProjectFilter from './projectspage/ProjectFilter';
import ProjectItem from './projectspage/ProjectItem';
import ProjectFooter from './projectspage/ProjectFooter';

const projectsData = [
  {
    id: 1,
    title: 'Space',
    date: 'Aug 2024',
    description: 'My personal portfolio website',
    image: 'https://images.unsplash.com/photo-1652456374997-1781458e2a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjByZW5kZXJ8ZW58MHx8MHx8fDA%3D',
    technologies: ['Portfolio', 'Next.js', 'Framer motion', 'TypeScript', 'Shadcn UI', 'TailwindCSS'],
    sourceCode: 'https://github.com/yourusername/space',
    liveDemo: 'https://space.yourdomain.com',
    filters: ['frontend', 'top'],
  },
  {
    id: 2,
    title: 'Pixel Perfect',
    date: 'Jan 2024 - July 2024',
    description: 'A responsive image gallery with advanced filtering and lazy loading',
    image: 'https://images.unsplash.com/photo-1654015064357-0437ef521b0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind', 'TailwindCSS', 'Shadcn UI'],
    sourceCode: 'https://github.com/yourusername/fit-flow',
    liveDemo: 'https://fitflow.yourdomain.com',
    filters: ['fullstack', 'top'],
  },
  {
    id: 3,
    title: 'Recipes Ranch',
    date: 'Jan 2024 - July 2024',
    description: 'A comprehensive recipe management application with search and filtering',
    image: 'https://images.unsplash.com/photo-1652992252915-f9b6592a61a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    sourceCode: 'https://github.com/yourusername/recipes-app',
    liveDemo: 'https://recipes-app.yourdomain.com',
    filters: ['frontend', 'mern', 'top'],
  },
  {
    id: 4,
    title: 'E-commerce Store',
    date: 'Jan 2024 - July 2024',
    description: 'Full-stack e-commerce platform with user authentication and payment integration',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'Sass'],
    sourceCode: 'https://github.com/yourusername/image-gallery',
    liveDemo: 'https://image-gallery.yourdomain.com',
    filters: ['frontend', 'top'],
  },
  {
    id: 5,
    title: 'Social Media',
    date: 'Jan 2024 - July 2024',
    description: 'A feature-rich social media platform inspired by Instagram',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'Sass'],
    sourceCode: 'https://github.com/yourusername/image-gallery',
    liveDemo: 'https://image-gallery.yourdomain.com',
    filters: ['frontend', 'top'],
  },
  {
    id: 6,
    title: 'Blog Application',
    date: 'Jan 2024 - July 2024',
    description: 'A full-stack blogging platform with rich text editing and commenting system',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'Sass'],
    sourceCode: 'https://github.com/yourusername/image-gallery',
    liveDemo: 'https://image-gallery.yourdomain.com',
    filters: ['frontend', 'top'],
  },
  {
    id: 7,
    title: 'Food Delivery Application',
    date: 'Jan 2024 - July 2024',
    description: 'A comprehensive food delivery platform with real-time order tracking',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'Sass'],
    sourceCode: 'https://github.com/yourusername/image-gallery',
    liveDemo: 'https://image-gallery.yourdomain.com',
    filters: ['frontend'],
  },
  {
    id: 8,
    title: 'S2F',
    date: 'Jan 2024 - July 2024',
    description: 'Website for a local gym',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'Sass'],
    sourceCode: 'https://github.com/yourusername/image-gallery',
    liveDemo: 'https://image-gallery.yourdomain.com',
    filters: ['frontend'],
  },
  {
    id: 9,
    title: 'Movie Seat Booking App',
    date: 'Jan 2024 - July 2024',
    description: 'A movie seat booking app with seat selection and seat reservation',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'Sass'],
    sourceCode: 'https://github.com/yourusername/image-gallery',
    liveDemo: 'https://image-gallery.yourdomain.com',
    filters: ['frontend'],
  },
  {
    id: 10,
    title: 'Notes App',
    date: 'Jan 2024 - July 2024',
    description: 'A notes app with note creation, deletion, and editing',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'Sass'],
    sourceCode: 'https://github.com/yourusername/image-gallery',
    liveDemo: 'https://image-gallery.yourdomain.com',
    filters: ['frontend'],
  },
  {
    id: 11,
    title: 'Netflix Clone',
    date: 'Jan 2024 - July 2024',
    description: 'A Netflix clone with movie browsing and search functionality',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'Sass'],
    sourceCode: 'https://github.com/yourusername/image-gallery',
    liveDemo: 'https://image-gallery.yourdomain.com',
    filters: ['frontend'],
  },
  {
    id: 12,
    title: 'Apple Vision Pro Clone',
    date: 'Jan 2024 - July 2024',
    description: 'A clone of the Apple Vision Pro website',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Vue.js', 'Vuex', 'Firebase', 'Sass'],
    sourceCode: 'https://github.com/yourusername/image-gallery',
    liveDemo: 'https://image-gallery.yourdomain.com',
    filters: ['frontend'],
  },
  // javascript projects
  {
    id: 13,
    title: 'Budget App',
    date: 'Jan 2024 - July 2024',
    description: 'A budget app with expense and income tracking',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/yourusername/javascript-projects',
    liveDemo: 'https://javascript-projects.yourdomain.com',
    filters: ['javascript', 'frontend'],
  },
  {
    id: 14,
    title: 'To-Do List',
    date: 'Jan 2024 - July 2024',
    description: 'A feature-rich task management application',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/yourusername/javascript-projects',
    liveDemo: 'https://javascript-projects.yourdomain.com',
    filters: ['javascript', 'frontend'],
  },
  {
    id: 15,
    title: 'BMI Calculator',
    date: 'Jan 2024 - July 2024',
    description: 'An interactive Body Mass Index calculator with health insights',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['Svelte', 'Chart.js', 'CSS Variables', 'Web Animations API'],
    sourceCode: 'https://github.com/yourusername/bmi-calculator',
    liveDemo: 'https://bmi-calculator.yourdomain.com',
    filters: ['javascript', 'frontend'],
  },
  {
    id: 16,
    title: 'Password Generator',
    date: 'Jan 2024 - July 2024',
    description: 'A password generator with customizable options',
    image: 'https://images.unsplash.com/photo-1653393337202-81b93e1e316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww',
    technologies: ['React Native', 'Redux', 'Async Storage', 'React Navigation'],
    sourceCode: 'https://github.com/yourusername/tinywins-clone',
    liveDemo: 'https://tinywins-clone.yourdomain.com',
    filters: ['javascript', 'frontend'],
  }
  // ... (you can add more projects here)
];

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-black bg-opacity-50 text-white rounded-full shadow-lg border border-gray-600 backdrop-blur-sm group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp 
            size={24} 
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </motion.button>
      )}
    </>
  );
};

const Projects = () => {
  const [projectType, setProjectType] = useState('top projects');

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
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Clean up function to reset scroll behavior
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white py-16 px-4 sm:px-16 lg:px-8 overflow-hidden">
      <StarfieldBackground />

      <ProjectsHeader />

      <motion.div
        className="absolute top-48 md:top-60 lg:top-72 right-4 z-20 hidden md:block lg:block xl:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectFilter
          activeOption={projectType}
          onToggle={setProjectType}
        />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto pt-16">
        <div className='flex flex-col sm:flex-row-reverse md:flex-col gap-4 items-center justify-center sm:items-center sm:justify-between md:items-start md:justify-start lg:items-start lg:justify-start xl:items-start xl:justify-start'>
          <motion.div
            className="mb-4 block md:hidden lg:hidden xl:hidden z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectFilter
              activeOption={projectType}
              onToggle={setProjectType}
            />
          </motion.div>

          <motion.h2 
            key={projectType}
            className="text-3xl font-semibold mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {capitalizeWords(projectType)}
          </motion.h2>
        </div>

        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <ProjectFooter />
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default Projects;