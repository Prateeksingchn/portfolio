import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2V8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcnN8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/uploads/1411400493228e06a6315/ad711a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvcml6b258ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1517639493569-5666a7b2f494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2t5fGVufDB8fDB8fHww',
  'https://plus.unsplash.com/premium_photo-1676218968741-8179dd7e533f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1505160984683-51670af82409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ja3xlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1727224280190-d7e55acb068e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1727091462554-a36e6136b6ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1673285286254-d0d0e465e0fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGphcGFufGVufDB8fDB8fHww',
];

const greetings = [
  'Hello',
  'Namaste🙏',
  'Hola',
  'Bonjour',
  'Ciao',
  'Konnichiwa',
  'Salaam',
  'Ni hao',
  'Aloha',
  'Zdravstvuyte'
];

function Loader({ onLoadingComplete }) {
  const [count, setCount] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [showRevealAnimation, setShowRevealAnimation] = useState(false);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(countInterval);
          setShowRevealAnimation(true);
          return 100;
        }
        return prevCount + 1;
      });
    }, 55);

    const imageInterval = setInterval(() => {
      setVisibleImages((prev) => {
        if (prev.length >= images.length) {
          clearInterval(imageInterval);
          return prev;
        }
        return [...prev, images[prev.length]];
      });
    }, 500);

    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 600);

    return () => {
      clearInterval(countInterval);
      clearInterval(imageInterval);
      clearInterval(greetingInterval);
    };
  }, []);

  const revealVariants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1] } },
  };

  return (
    <AnimatePresence>
      {!showRevealAnimation && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full">
            {visibleImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Loader image ${index + 1}`}
                className={`absolute object-cover transition-opacity duration-500 ${getImageClasses(index)}`}
                style={{
                  opacity: 1,
                  zIndex: images.length - index,
                }}
              />
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[Raleway] tracking-wider text-gray-100 mb-2 sm:mb-4">{count}%</p>
              <h3 className="text-sm sm:text-xl md:text-xl font-['Atkinson_Hyperlegible'] italic text-gray-100 transition-opacity duration-500">
                {greetings[currentGreeting]}
              </h3>
            </div>
          </div>
        </motion.div>
      )}
      {showRevealAnimation && (
        <motion.div
          key="reveal"
          className="fixed inset-0 bg-black origin-bottom"
          variants={revealVariants}
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => {
            onLoadingComplete();
          }}
        />
      )}
    </AnimatePresence>
  );
}

function getImageClasses(index) {
  const { mb, sm, md, lg } = getImageStyle(index);
  return `${mb} ${sm} ${md} ${lg}`;
}

function getImageStyle(index) {
  const LgStyles = [
    'lg:top-0 lg:right-[350px] lg:w-[350px] lg:h-[200px]',
    'lg:top-[45px] lg:left-[400px] lg:w-[320px] lg:h-[190px]',
    'lg:top-0 lg:left-[800px] lg:w-[350px] lg:h-[200px]',
    'lg:top-[60px] lg:right-0 lg:w-[220px] lg:h-[370px]',
    'lg:bottom-[100px] lg:left-0 lg:w-[190px] lg:h-[270px]',
    'lg:bottom-0 lg:left-[270px] lg:w-[270px] lg:h-[220px]',
    'lg:bottom-[110px] lg:left-[620px] lg:w-[300px] lg:h-[170px]',
    'lg:bottom-0 lg:right-[350px] lg:w-[190px] lg:h-[230px]',
    'lg:bottom-[50px] lg:right-[20px] lg:w-[180px] lg:h-[230px]',
  ];

  const mdStyles = [
    'md:top-0 md:left-0 md:w-[180px] md:h-[115px]',
    'md:top-[50px] md:left-[200px] md:w-[190px] md:h-[120px]',
    'md:top-0 md:right-[140px] md:w-[210px] md:h-[135px]',
    'md:top-[40px] md:right-0 md:w-[130px] md:h-[230px]',
    'md:bottom-[260px] md:left-0 md:w-[120px] md:h-[170px]',
    'md:bottom-0 md:left-[90px] md:w-[170px] md:h-[150px]',
    'md:bottom-[170px] md:left-[270px] md:w-[185px] md:h-[110px]',
    'md:bottom-0 md:right-[220px] md:w-[150px] md:h-[155px]',
    'md:bottom-[65px] md:right-[15px] md:w-[135px] md:h-[155px]',
  ];

  const smStyles = [
    'sm:top-0 sm:left-0 sm:w-[150px] sm:h-[155px]',
    'sm:top-[60px] sm:left-[200px] sm:w-[170px] sm:h-[160px]',
    'sm:top-[90px] sm:left-[400px] sm:w-[180px] sm:h-[165px]',
    'sm:top-[5px] sm:right-0 sm:w-[120px] sm:h-[190px]',
    'sm:bottom-[200px] sm:left-0 sm:w-[130px] sm:h-[175px]',
    'sm:bottom-0 sm:left-[85px] sm:w-[170px] sm:h-[125px]',
    'sm:bottom-[155px] sm:left-[260px] sm:w-[180px] sm:h-[135px]',
    'sm:bottom-0 sm:right-[170px] sm:w-[125px] sm:h-[140px]',
    'sm:bottom-[90px] sm:right-[10px] sm:w-[150px] sm:h-[220px]',
  ];

  const mbStyles = [
    'top-0 left-0 w-[100px] h-[140px]',
    'top-[35px] left-[180px] w-[140px] h-[125px]',
    'top-[170px] left-[5px] w-[140px] h-[100px]',
    'top-[180px] right-0 w-[150px] h-[130px]',
    'bottom-[270px] left-0 w-[125px] h-[100px]',
    'bottom-[190px] right-[20px] w-[150px] h-[130px]',
    'bottom-[100px] left-[5px] w-[90px] h-[110px]',
    'bottom-[5px] right-[150px] w-[120px] h-[90px]',
    'bottom-[65px] right-0 w-[115px] h-[80px]',
  ];

  return {
    mb: mbStyles[index] || '',
    sm: smStyles[index] || '',
    md: mdStyles[index] || '',
    lg: LgStyles[index] || '',
  };
}

export default Loader;