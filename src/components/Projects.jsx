import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const categories = ['All', 'Frontend', 'JavaScript', 'Backend', 'React', 'Next.js', 'Fullstack', 'Mobile', 'AI/ML'];

const projectsData = [
    { id: 1, title: 'E-commerce Website', category: 'Frontend', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbW1lcmNlfGVufDB8fDB8fHww', description: 'A responsive online store with modern UI/UX' },
    { id: 2, title: 'Task Manager API', category: 'Backend', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFzayUyMG1hbmFnZXJ8ZW58MHx8MHx8fDA%3D', description: 'RESTful API for managing tasks and projects' },
    { id: 3, title: 'Weather App', category: 'JavaScript', image: 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D', description: 'Real-time weather forecasts using geolocation' },
    { id: 4, title: 'Social Media Dashboard', category: 'React', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFzaGJvYXJkfGVufDB8fDB8fHww', description: 'Analytics dashboard for social media platforms' },
    { id: 5, title: 'Blog Platform', category: 'Next.js', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D', description: 'SEO-optimized blogging platform with CMS' },
    { id: 6, title: 'Project Management System', category: 'Fullstack', image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D', description: 'Comprehensive tool for managing projects and teams' },
    { id: 7, title: 'Fitness Tracker App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1510016983361-db3361530dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzcyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D', description: 'Mobile app for tracking workouts and nutrition' },
    { id: 8, title: 'AI Image Generator', category: 'AI/ML', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D', description: 'Generate unique images using machine learning' },
    { id: 9, title: 'Cryptocurrency Dashboard', category: 'React', image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8fDA%3D', description: 'Real-time crypto prices and portfolio tracker' },
    { id: 10, title: 'Smart Home IoT Platform', category: 'Fullstack', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBob21lfGVufDB8fDB8fHww', description: 'Control and monitor smart home devices' },
    { id: 11, title: 'Language Learning Game', category: 'JavaScript', image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZ3VhZ2UlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D', description: 'Interactive game for learning new languages' },
    { id: 12, title: 'Video Streaming Service', category: 'Fullstack', image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBzdHJlYW1pbmd8ZW58MHx8MHx8fDA%3D', description: 'Netflix-like platform for streaming content' },
    { id: 13, title: 'AI-powered Chatbot', category: 'AI/ML', image: 'https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhdGJvdHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 14, title: 'Real Estate Marketplace', category: 'Fullstack', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D', description: 'Platform for buying, selling, and renting properties' },
    { id: 15, title: 'Music Streaming App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBhcHB8ZW58MHx8MHx8fDA%3D', description: 'Mobile app for streaming and discovering music' },
    { id: 16, title: 'Online Learning Platform', category: 'Fullstack', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D', description: 'E-learning platform with courses and quizzes' },
    { id: 17, title: 'Inventory Management System', category: 'Backend', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW52ZW50b3J5fGVufDB8fDB8fHww', description: 'Track and manage inventory for businesses' },
    { id: 18, title: 'Travel Booking Platform', category: 'Fullstack', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww', description: 'Book flights, hotels, and activities for trips' },
    { id: 19, title: 'Personal Finance Tracker', category: 'React', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D', description: 'Manage personal finances and track expenses' },
    { id: 20, title: 'Job Board Portal', category: 'Fullstack', image: 'https://images.unsplash.com/photo-1653669487003-7d89b2020f3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpvYiUyMHBvcnRhbHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 21, title: 'Recipe Sharing Community', category: 'Next.js', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8fHww', description: 'Share and discover recipes from around the world' },
    { id: 22, title: 'Virtual Event Platform', category: 'Fullstack', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlydHVhbCUyMGV2ZW50fGVufDB8fDB8fHww', description: 'Host and attend virtual events and conferences' },
    { id: 23, title: 'Car Rental Service', category: 'Fullstack', image: 'https://plus.unsplash.com/premium_photo-1661391730563-5a43e35acdf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fENhciUyMFJlbnRhbCUyMFNlcnZpY2V8ZW58MHx8MHx8fDA%3D' },
    { id: 24, title: 'Task Automation Tool', category: 'Python', image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21hdGlvbnxlbnwwfHwwfHx8MA%3D%3D', description: 'Automate repetitive tasks and workflows' },
    { id: 25, title: 'Task Automation Tool', category: 'Python', image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21hdGlvbnxlbnwwfHwwfHx8MA%3D%3D', description: 'Automate repetitive tasks and workflows' },
    { id: 26, title: 'Task Automation Tool', category: 'Python', image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21hdGlvbnxlbnwwfHwwfHx8MA%3D%3D', description: 'Automate repetitive tasks and workflows' },
    { id: 27, title: 'Task Automation Tool', category: 'Python', image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21hdGlvbnxlbnwwfHwwfHx8MA%3D%3D', description: 'Automate repetitive tasks and workflows' },
    { id: 28, title: 'Online Learning Platform', category: 'Fullstack', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D', description: 'E-learning platform with courses and quizzes' },
    { id: 29, title: 'Inventory Management System', category: 'Backend', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW52ZW50b3J5fGVufDB8fDB8fHww', description: 'Track and manage inventory for businesses' },
    { id: 30, title: 'Inventory Management System', category: 'Backend', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW52ZW50b3J5fGVufDB8fDB8fHww', description: 'Track and manage inventory for businesses' },
  ];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const getProjectSize = (index) => {
    if (index === 0) return 'lg:col-span-2 lg:row-span-2';
    if (index === 1 || index === 2) return 'lg:col-span-1 lg:row-span-2';
    return '';
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-[#101010] to-[#1A1A1A] py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </motion.div>

        <motion.h2 
          className="text-5xl font-bold text-white text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          My Projects
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-[#1A1A1A] text-white hover:bg-primary hover:text-black'
              } transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`bg-[#1A1A1A] rounded-3xl overflow-hidden shadow-xl dark:shadow-thick ring-1 dark:ring-white/10 ring-primary/5 ${getProjectSize(index)}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative h-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm mb-2">
                      {project.category}
                    </p>
                    <p className="text-zinc-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href="#"
                        className="inline-flex items-center text-white hover:text-primary transition-colors duration-300"
                      >
                        View Project <ExternalLink className="ml-2" size={16} />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;