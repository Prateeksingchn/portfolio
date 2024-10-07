import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarField from "./about/StarField";
import AboutHeader from "./about/AboutHeader";
import PhotoGallery from "./about/PhotoGallery";
import AboutMeSection from "./about/AboutMeSection";
import HobbiesSection from "./about/HobbiesSection";
import VisualJourneySection from "./about/VisualJourneySection";
import ValuesSection from "./about/ValuesSection";
import AboutThisSiteSection from "./about/AboutThisSiteSection";
import AboutFooter from "./about/AboutFooter";
import Navigation from "./about/Navigation"; // Import the new Navigation component

const BackToHomeButton = () => (
  <Link to="/" className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
    <motion.div
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full p-3 shadow-lg"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M19 12H5M12 19L5 12L12 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.svg>
    </motion.div>
  </Link>
);

function AboutPage({ handleProjectsMouseEnter, handleProjectsMouseLeave }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0% {
          opacity: 0.5;
          transform: translateY(0);
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0.5;
          transform: translateY(-20px);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen pt-44 sm:pt-28 md:pt-36 lg:pt-44 pb-14 relative overflow-hidden font-[Roboto]">
      <StarField />
      <Navigation /> {/* Use the new Navigation component */}
      <BackToHomeButton />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <AboutHeader />
        <PhotoGallery />
        <AboutMeSection />
        <HobbiesSection />
        <VisualJourneySection />
        <ValuesSection />
        <AboutThisSiteSection 
          handleProjectsMouseEnter={handleProjectsMouseEnter}
          handleProjectsMouseLeave={handleProjectsMouseLeave}
        />
        <AboutFooter />
      </div>
    </div>
  );
}

export default AboutPage;