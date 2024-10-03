import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const VisualJourneySection = () => {
  const photosRef = useRef(null);
  const photosControls = useAnimation();

  const photos = [
    "./photography/1.jpg",
    "./photography/2.jpg",
    "./photography/10.jpg",
    "./photography/3.jpg",
    "./photography/4.jpg",
    "./photography/5.jpg",
    "./photography/9.jpg",
    "./photography/6.jpg",
    "./photography/7.jpg",
    "./photography/8.jpg",
    "./photography/12.jpg",
    "./photography/13.jpg",
    "./photography/14.jpg",
    "./photography/16.jpg",
    "./photography/17.jpg",
    "./photography/18.jpg",
    "./photography/19.jpg",
    "./photography/11.jpg",
    "./photography/21.jpg",
    "./photography/22.jpg",
    "./photography/23.jpg",
    "./photography/20.jpg",
    "./photography/24.jpg",
    "./photography/25.png",
    "./photography/26.jpg",
    "./photography/27.jpg",
    "./photography/28.jpg",
    "./photography/29.jpg",
    "./photography/30.jpg",
    "./photography/31.jpg",
    "./photography/32.jpg",
    "./photography/33.jpg",
    "./photography/34.jpg",
    "./photography/35.jpg",
    "./photography/36.jpg",
    "./photography/40.jpg",
    "./photography/37.jpg",
    "./photography/38.jpg",
    "./photography/39.jpg",
  ];

  useEffect(() => {
    const scrollPhotos = async () => {
      await photosControls.start({
        x: [0, -photosRef.current.scrollWidth + window.innerWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          },
        },
      });
    };

    scrollPhotos();
  }, [photosControls]);

  return (
    <motion.section 
      className="mb-12 sm:mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Visual Journey</h2>
      <p className="text-sm sm:text-sm text-gray-400 mb-4 sm:mb-6">
        This collection captures both the world through my lens and moments from my personal life. It's a visual representation of my experiences, creativity, and the beauty I've encountered along the way.
      </p>
      <div className="overflow-hidden">
        <motion.div 
          ref={photosRef}
          className="flex space-x-4 sm:space-x-6 p-2 sm:p-4"
          animate={photosControls}
        >
          {[...photos, ...photos].map((photo, index) => (
            <motion.div 
              key={index}
              className="flex-shrink-0 w-[150px] sm:w-[200px] md:w-[225px] h-[200px] sm:h-[260px] md:h-[290px] bg-white p-2 shadow-lg transform transition-all duration-300 rotate-0 hover:rotate-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={photo} 
                  alt={`Photography sample ${index + 1}`} 
                  className="w-full h-[170px] sm:h-[220px] md:h-[250px] object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisualJourneySection;