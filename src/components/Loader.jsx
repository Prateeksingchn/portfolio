import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const randomImages = [
  'https://plus.unsplash.com/premium_vector-1725393400939-11ed984b0b90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1547103106-9a0e718bb2d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1726853546092-6a2f2c2cf652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1726767305248-e3cfaf9c98b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
  './public/photography/5.png',
];

function Loader({ onLoadingComplete }) {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return prevCount;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      if (images.length < 5) {
        setImages((prevImages) => [
          ...prevImages,
          {
            src: randomImages[Math.floor(Math.random() * randomImages.length)],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          },
        ]);
      }
    }, 800);

    return () => clearInterval(imageInterval);
  }, [images]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex justify-center items-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            className="absolute w-[200px] h-[200px] object-cover"
            initial={{ opacity: 0, x: img.x, y: img.y, scale: 0 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        ))}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <motion.div
            className="text-white text-7xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {count}
          </motion.div>
          <motion.div
            className="mt-6 w-48 h-0.5 bg-gray-800 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: '12rem' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full bg-white"
              initial={{ width: '0%' }}
              animate={{ width: `${count}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;