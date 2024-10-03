import React from 'react';
import { ChevronDown } from 'lucide-react';

const ProjectFilter = ({ activeOption, onToggle }) => {
  const options = ['top projects', 'all projects', 'frontend', 'javascript', 'fullstack', 'mern'];
  
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

export default ProjectFilter;