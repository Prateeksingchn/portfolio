import React, { useState } from 'react';
import { motion } from 'framer-motion';

// You'll need to install framer-motion: npm install framer-motion

const categories = ['All', 'Frontend', 'JavaScript', 'Backend', 'React', 'Next.js', 'Fullstack'];

const projectsData = [
  { id: 1, title: 'E-commerce Website', category: 'Frontend', image: '/path-to-image.jpg' },
  { id: 2, title: 'Task Manager API', category: 'Backend', image: '/path-to-image.jpg' },
  { id: 3, title: 'Weather App', category: 'JavaScript', image: '/path-to-image.jpg' },
  { id: 4, title: 'Social Media Dashboard', category: 'React', image: '/path-to-image.jpg' },
  { id: 5, title: 'Blog Platform', category: 'Next.js', image: '/path-to-image.jpg' },
  { id: 6, title: 'Project Management System', category: 'Fullstack', image: '/path-to-image.jpg' },
  // Add more projects as needed
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
          My Projects
        </h2>
        
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              } transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.category}
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
                  >
                    View Project →
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;