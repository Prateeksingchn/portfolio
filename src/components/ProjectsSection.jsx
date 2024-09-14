import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const nextImageAnimation = keyframes`
  0% { 
    transform: translateY(50%) scale(0.8) rotate(-10deg);
    opacity: 0;
  }
  100% { 
    transform: translateY(0) scale(1) rotate(4deg);
    opacity: 1;
  }
`;

const MarqueeText = styled.div`
  white-space: nowrap;
  display: inline-block;
  animation: ${marquee} 20s linear infinite;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 470px;
  transition: all 0.5s ease-in-out;
`;

const NextImageContainer = styled(ImageContainer)`
  animation: ${nextImageAnimation} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
`;

const ProjectsSection = ({ onMouseEnter, onMouseLeave }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  const images = useMemo(() => [
    "https://images.unsplash.com/photo-1658211208906-429cd4aa0e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjByZW5kZXJ8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1668079078320-76dba982b397?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDNkJTIwcmVuZGVyfGVufDB8MXwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1655834648155-f7a98ff3c49d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDNkJTIwcmVuZGVyfGVufDB8MXwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1668319126427-111a3164cf08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fDNkJTIwcmVuZGVyfGVufDB8MXwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1660912354672-42c807fac14c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHwzZCUyMHJlbmRlcnxlbnwwfDF8MHx8fDA%3D",
  ], []);

  const changeImage = useCallback(() => {
    setIsChanging(true);
    setNextImageIndex((currentImageIndex + 1) % images.length);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsChanging(false);
    }, 500);
  }, [currentImageIndex, images.length]);

  useEffect(() => {
    const intervalId = setInterval(changeImage, 3000);
    return () => clearInterval(intervalId);
  }, [changeImage]);

  const renderMarqueeText = useMemo(() => (
    <>
      {[...Array(10)].map((_, index) => (
        <span key={index} className="text-[15rem] font-bold opacity-10 inline-block mr-8 text-white">
          Projects
        </span>
      ))}
    </>
  ), []);

  return (
    <Link 
      to="/projects" 
      className="this-ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick relative overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background text */}
      <div className="absolute z-0 inset-0 flex items-center justify-center overflow-hidden pointer-events-none mt-20">
        <MarqueeText>
          {renderMarqueeText}
        </MarqueeText>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <h2 className="text-6xl font-bold mb-4 text-white">Projects</h2>
        <p className="text-sm mb-8 text-gray-400 font-sans">
          EXPLORE INNOVATIVE EXCELLENCE WITH OUR PORTFOLIO - MODERN, CLEAR, 
          AND MINIMALIST. FROM WEB APPS TO DESIGNS, REDEFINE YOUR 
          JOURNEY EFFORTLESSLY.
        </p>
        <div className="relative w-full h-[470px] flex items-center justify-center mt-20">
          {images.map((image, index) => (
            <ImageContainer
              key={index}
              style={{
                zIndex: index === currentImageIndex ? 20 : 10 - ((index - currentImageIndex + images.length) % images.length),
                opacity: index === currentImageIndex ? 1 : 0.5,
                transform: `rotate(${((index - currentImageIndex + images.length) % images.length) * 2}deg)`,
              }}
            >
              <img
                src={image}
                alt={`Project Preview ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </ImageContainer>
          ))}
          {isChanging && (
            <NextImageContainer
              style={{
                zIndex: 30,
              }}
            >
              <img
                src={images[nextImageIndex]}
                alt={`Next Project Preview`}
                className="w-full h-full object-cover rounded-lg"
              />
            </NextImageContainer>
          )}
        </div>
      </div>
    </Link>
  );
}

export default React.memo(ProjectsSection);