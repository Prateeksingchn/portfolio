import React, { useEffect, useState, useCallback } from "react"; // Added useState and useCallback
import "../App.css";

import Cursor from "./Cursor";
import ProfileSection from "./home/ProfileSection";
import SocialMediaSection from "./home/SocialMediaSection";
import ProjectsSection from "./home/ProjectsSection";
import ResumeSection from "./home/ResumeSection";
import SkillsSection from "./home/SkillsSection";
import DesignifySection from "./home/DesignifySection";
import AnimatedInfographic from "./home/AnimatedInfographic";
import HoursOfCodingSection from "./home/HoursOfCodingSection";
import AboutSection from "./home/AboutSection";
import ContactSection from "./home/ContactSection";
import FloatingNavigation from "./FloatingNavigation";

function Home() {
  const {
    cursorJSX,
    handleProjectsMouseEnter,
    handleProjectsMouseLeave,
    handleAboutMouseEnter,
    handleAboutMouseLeave,
  } = Cursor();

  // New state for toggling the navbar
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Memoize the setFullHeight function
  const setFullHeight = useCallback(() => {
    const vh = window.innerHeight;
    requestAnimationFrame(() => {
      document.body.style.minHeight = `${vh}px`;
    });
  }, []);

  useEffect(() => {
    // Apply smooth scrolling and set background color
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = "#101010";
    document.documentElement.style.backgroundColor = "#101010";

    setFullHeight();

    // Add a debounced resize listener for better performance
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setFullHeight, 100);
    };
    window.addEventListener("resize", handleResize);

    // Clean up function
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.backgroundColor = "";
      document.documentElement.style.backgroundColor = "";
      document.body.style.minHeight = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [setFullHeight]);

  return (
    <div className="home-container">
      {cursorJSX}
      <div className="pb-10 block md:hidden lg:hidden">
        <FloatingNavigation className="block md:hidden" />
      </div>

      {/* Main Home components */}
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
          {/* Wrap each component in a React.memo() call */}
          <ProfileSection />
          <SocialMediaSection />
          <ProjectsSection
            onMouseEnter={handleProjectsMouseEnter}
            onMouseLeave={handleProjectsMouseLeave}
          />
          <ResumeSection />
          <SkillsSection />
          <DesignifySection />
          <AnimatedInfographic />
          <HoursOfCodingSection />
          <div className="lg:col-span-2 xl:col-span-1 lg:row-span-2 flex flex-col gap-4">
            <AboutSection
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            />
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);
