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
  'https://images.unsplash.com/photo-1727256311277-10cd4c2ac4df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D',
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
    }, 400);

    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 500);

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