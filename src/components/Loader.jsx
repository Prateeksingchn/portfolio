import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1582966772680-860e372bb558?w=800&h=600&fit=crop',
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
    }, 40);

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
            className="absolute object-cover transition-opacity duration-500"
            style={{
              opacity: 1,
              ...getImageStyle(index)
            }}
          />
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-6xl font-bold text-gray-100 mb-4">{count}%</p>
          <h3 className="text-2xl font-serif italic text-gray-100 transition-opacity duration-500">
            {greetings[currentGreeting]}
          </h3>
        </div>
      </div>
      <AnimatePresence>
        {showRevealAnimation && (
          <motion.div
            key="reveal"
            className="absolute inset-0 bg-black origin-bottom"
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => {
              onLoadingComplete();
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function getImageStyle(index) {
  const styles = [
    { top: '0', left: '0', width: '290px', height: '185px' },
    { top: '45px', left: '400px', width: '320px', height: '190px' },
    { top: '0', right: '370px', width: '350px', height: '200px' },
    { top: '60px', right: '0', width: '220px', height: '370px' },
    { bottom: '100px', left: '0', width: '190px', height: '270px' },
    { bottom: '0', left: '270px', width: '220px', height: '270px' },
    { bottom: '110px', left: '620px', width: '300px', height: '170px' },
    { bottom: '0', right: '350px', width: '170px', height: '230px' },
    { bottom: '50px', right: '20px', width: '180px', height: '230px' },
  ];
  return styles[index] || {};
}

export default Loader;