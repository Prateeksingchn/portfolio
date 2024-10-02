import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Link } from 'react-router-dom';
import BrowserContainer from './BrowserContainer';

const ProjectCard = ({ project, index }) => {
  return (
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
        <h3 className="text-3xl font-bold bg-gradient-to-b from-cyan-50 via-purple-300 to-zinc-900 bg-clip-text text-transparent">{project.title}</h3>
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
  );
};

export default ProjectCard;