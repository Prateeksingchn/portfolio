import React from 'react';
import { motion } from 'framer-motion';

const StarField = ({ stars }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;