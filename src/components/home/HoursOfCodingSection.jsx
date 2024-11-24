import React, { useState, useEffect, useRef } from 'react';
import { Code2, GitBranch } from 'lucide-react';

const HoursOfCodingSection = () => {
  const [hours, setHours] = useState(10);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetHours = 521;
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
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="relative ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-16 md:p-20 lg:p-10 lg:row-start-4 h-full flex flex-col justify-between bg-gradient-to-r from-[1A1A1A] to-black dark:bg-secondary overflow-hidden group">
      {/* Custom SVG icon (download2.svg) */}
      <div className="absolute bottom-20 left-24 sm:bottom-20 sm:left-32 md:bottom-20 md:left-32 lg:bottom-28 lg:left-24 w-full h-full flex items-center justify-center">
        <img 
          src="/favicons/download2.svg" 
          alt="Custom Code Icon" 
          className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-20 lg:opacity-10 lg:blur-sm lg:group-hover:opacity-20 lg:group-hover:blur-none transition-all duration-300"
        />
      </div>
      
      {/* Custom SVG icon with iOS-style background */}
      <div className="absolute top-20 right-24 sm:top-20 sm:right-28 md:top-20 md:right-36 lg:top-28 lg:right-24 w-full h-full flex items-center justify-center">
        <div className=" rounded-2xl p-3">
          <img 
            src="/favicons/download.svg" 
            alt="Custom Code Icon" 
            className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-20 lg:opacity-10 lg:blur-sm lg:group-hover:opacity-20 lg:group-hover:blur-none transition-all duration-300"
          />
        </div>
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
        {/* <div className="text-xs text-blue-400 mt-1">
          (Wakatime)
        </div> */}
      </div>
    </div>
  );
};

export default HoursOfCodingSection;