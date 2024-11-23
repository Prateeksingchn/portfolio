import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://plus.unsplash.com/premium_photo-1686050878751-89499d28d153?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1674718013659-6930c469e641?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmslMjAlMkIlMjBzcGFjZXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.unsplash.com/photo-1505160984683-51670af82409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ja3xlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1727224280190-d7e55acb068e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D',
  'https://images.pexels.com/photos/596132/pexels-photo-596132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://plus.unsplash.com/premium_photo-1680391380341-b67592040e21?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const totalDuration = 5700; // 5.7 seconds for the entire loading process
    const countDuration = 5400; // Ensure count reaches 100 before loader completes
    const countInterval = countDuration / 100; // Adjust interval to reach 100 in countDuration
    const imageInterval = 600; // Show a new image every 600ms (5400ms total for 9 images)
    const greetingInterval = totalDuration / greetings.length;

    const countTimer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(countTimer);
          return 100;
        }
        return prevCount + 1;
      });
    }, countInterval);

    const imageTimer = setInterval(() => {
      setVisibleImages((prev) => {
        if (prev.length >= 9) {
          clearInterval(imageTimer);
          return prev;
        }
        return [...prev, images[prev.length]];
      });
    }, imageInterval);

    const greetingTimer = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, greetingInterval);

    const loaderCompleteTimer = setTimeout(() => {
      setLoaderComplete(true);
    }, totalDuration);

    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true);
    }, totalDuration + 500); // Show welcome screen 0.5s after loader completes

    const completionTimer = setTimeout(() => {
      onLoadingComplete();
    }, totalDuration + 2500); // Call onLoadingComplete 2.5s after loader completes

    return () => {
      clearInterval(countTimer);
      clearInterval(imageTimer);
      clearInterval(greetingTimer);
      clearTimeout(loaderCompleteTimer);
      clearTimeout(welcomeTimer);
      clearTimeout(completionTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const revealVariants = {
    initial: { scaleY: 1 },
    animate: {
      scaleY: 0,
      transition: { 
        duration: 1.5,
        ease: [0.645, 0.045, 0.355, 1],
        when: "afterChildren",
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
        ease: [0.55, 0.055, 0.675, 0.19],
      }
    }
  };

  const lineVariants = {
    initial: { scaleX: 0 },
    animate: { 
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!loaderComplete ? (
        <motion.div 
          key="loader"
          className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="relative w-full h-full">
            {visibleImages.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Loader image ${index + 1}`}
                className={`absolute object-cover ${getImageClasses(index)}`}
                style={{ zIndex: 9 - index }} // Ensure correct stacking order
                variants={itemVariants}
              />
            ))}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center"
              variants={itemVariants}
            >
              <motion.p 
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Raleway'] tracking-wider text-gray-100 mb-2 sm:mb-4"
                variants={itemVariants}
              >
                {count}%
              </motion.p>
              <motion.h3 
                className="text-xl  md:text-xl lg:text-xl font-['Atkinson_Hyperlegible'] italic text-gray-100"
                variants={itemVariants}
              >
                {greetings[currentGreeting]}
              </motion.h3>
            </motion.div>
          </div>
        </motion.div>
      ) : showWelcome ? (
        <motion.div
          key="welcome"
          className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={revealVariants}
        >
          <div className="relative z-10 text-white text-center px-4">
            <motion.div variants={textVariants} className="overflow-hidden">
              <motion.h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-['Raleway'] font-bold mb-4" variants={textVariants}>
                Welcome to My Digital World
              </motion.h2>
            </motion.div>
            <motion.div className="w-24 h-1 bg-white mx-auto mb-4" variants={lineVariants} />
            <motion.div variants={textVariants} className="overflow-hidden">
              <motion.p className="text-xl sm:text-xl md:text-xl font-['Atkinson_Hyperlegible']" variants={textVariants}>
                Explore my work and let's create something amazing together
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
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
    'top-0 left-0 w-[90px] h-[130px]',
    'top-[35px] left-[180px] w-[130px] h-[115px]',
    'top-[170px] left-[5px] w-[130px] h-[90px]',
    'top-[180px] right-0 w-[140px] h-[120px]',
    'bottom-[270px] left-0 w-[115px] h-[90px]',
    'bottom-[190px] right-[20px] w-[140px] h-[120px]',
    'bottom-[100px] left-[5px] w-[80px] h-[100px]',
    'bottom-[5px] right-[150px] w-[110px] h-[80px]',
    'bottom-[65px] right-0 w-[105px] h-[70px]',
  ];

  return {
    mb: mbStyles[index] || '',
    sm: smStyles[index] || '',
    md: mdStyles[index] || '',
    lg: LgStyles[index] || '',
  };
}

export default Loader;