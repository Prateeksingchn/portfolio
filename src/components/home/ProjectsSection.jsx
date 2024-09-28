import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeText = styled.div`
  white-space: nowrap;
  display: inline-block;
  animation: ${marquee} 20s linear infinite;
`;

const ProjectsSection = ({ onMouseEnter, onMouseLeave }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(() => [
    "https://images.unsplash.com/photo-1658211208906-429cd4aa0e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjByZW5kZXJ8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1668079078320-76dba982b397?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDNkJTIwcmVuZGVyfGVufDB8MXwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1655834648155-f7a98ff3c49d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDNkJTIwcmVuZGVyfGVufDB8MXwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1668319126427-111a3164cf08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fDNkJTIwcmVuZGVyfGVufDB8MXwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1660912354672-42c807fac14c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHwzZCUyMHJlbmRlcnxlbnwwfDF8MHx8fDA%3D",
  ], []);

  const changeImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(changeImage, 3000);
    return () => clearInterval(intervalId);
  }, [changeImage]);

  const renderMarqueeText = useMemo(() => (
    <>
      {[...Array(10)].map((_, index) => (
        <span key={index} className="text-[6rem] sm:text-[9rem] md:text-[12rem] lg:text-[15rem] font-bold opacity-10 inline-block mr-8 text-white">
          Projects
        </span>
      ))}
    </>
  ), []);

  return (
    <Link 
      to="/projects" 
      className="this-ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-4 sm:p-6 md:p-8 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick relative overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background text */}
      <div className="absolute z-0 inset-0 flex items-center justify-center overflow-hidden pointer-events-none mt-28 sm:mt-20 md:mt-24">
        <MarqueeText>
          {renderMarqueeText}
        </MarqueeText>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full w-auto md:w-[87.4vw] lg:w-auto">
        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-white">Projects</h2>
        <p className="text-xs sm:text-sm md:text-sm mb-4 sm:mb-6 lg:mb-8 text-gray-400 font-['roboto']">
          EXPLORE INNOVATIVE EXCELLENCE WITH OUR PORTFOLIO - MODERN, CLEAR, 
          AND MINIMALIST. FROM WEB APPS TO DESIGNS, REDEFINE YOUR 
          JOURNEY EFFORTLESSLY.
        </p>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[520px] flex items-center justify-center mt-4 sm:mt-12 md:mt-16 lg:mt-20 pb-4 md:pb-5 lg:pb-0">
          <AnimatePresence>
            {images.map((image, index) => {
              const offset = (index - currentImageIndex + images.length) % images.length;
              return (
                <motion.div
                  key={index}
                  className="absolute w-[170px] sm:w-[280px] md:w-[320px] lg:w-[370px] h-[270px] sm:h-[400px] md:h-[450px] lg:h-[520px]"
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  animate={{
                    opacity: offset === 0 ? 1 : 0.5,
                    scale: offset === 0 ? 1 : 0.9,
                    rotate: offset * 2,
                    zIndex: images.length - offset,
                    x: offset === 0 ? 0 : offset * 10,
                  }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.5
                  }}
                >
                  <img
                    src={image}
                    alt={`Project Preview ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(ProjectsSection);