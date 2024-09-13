import React, { useState, useEffect } from 'react';
import { Code2, GitBranch } from 'lucide-react';

const HoursOfCodingSection = () => {
  const [hours, setHours] = useState(10);

  useEffect(() => {
    const targetHours = 137;
    const duration = 2000; // 2 seconds
    const increment = (targetHours - 10) / (duration / 16); // 60 FPS

    let currentHours = 10;
    const timer = setInterval(() => {
      currentHours += increment;
      if (currentHours >= targetHours) {
        clearInterval(timer);
        setHours(targetHours);
      } else {
        setHours(Math.floor(currentHours));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-[#1A1A1A] dark:bg-secondary overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <svg className="w-32 h-32 text-blue-500 opacity-10 blur-sm group-hover:opacity-20 group-hover:blur-none transition-all duration-300" viewBox="0 0 100 100" fill="currentColor">
          <path d="M95.9 2.9c-2.3-1.3-5.2-1.3-7.6 0L3.4 47.4c-2.3 1.3-3.7 3.8-3.4 6.5.3 2.7 2.1 4.9 4.7 5.7l20.8 6.1v23.9c0 2.8 1.5 5.3 3.9 6.6 2.4 1.3 5.3 1.2 7.6-.3l14.2-9.5 18.2 5.3c.7.2 1.4.3 2.1.3 1.6 0 3.2-.5 4.5-1.4 1.8-1.3 2.9-3.3 3-5.5l4.6-76.9c.3-3.1-1.4-6-4.1-7.3zM78.5 80.5L32.9 66.7 68.4 31c1.4-1.4.4-3.7-1.5-3.7-.5 0-1 .2-1.4.6L25.8 68.5l-20.3-6L90.4 17.9l-11.9 62.6z"/>
        </svg>
      </div>
      
      <div className="absolute top-4 left-4">
        <Code2 className="text-gray-600" size={24} />
      </div>
      
      <div className="absolute bottom-4 right-4">
        <GitBranch className="text-gray-600" size={24} />
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center relative z-10">
        <div className="text-7xl font-bold text-primary dark:text-white mb-2">
          {hours}
        </div>
        <div className="text-xl text-green-500">
          hrs
        </div>
        <div className="text-sm text-gray-400 mt-2">
          coding
        </div>
        <div className="text-xs text-blue-400 mt-1">
          (Wakatime)
        </div>
      </div>
    </div>
  );
};

export default HoursOfCodingSection;