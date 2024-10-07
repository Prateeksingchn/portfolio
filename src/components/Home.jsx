import React, { useEffect, useState } from "react"; // Added useState
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

  useEffect(() => {
    // Apply smooth scrolling and set background color
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = "#101010";
    document.documentElement.style.backgroundColor = "#101010";

    // Ensure the content pushes the body to full height
    const setFullHeight = () => {
      const vh = window.innerHeight;
      document.body.style.minHeight = `${vh}px`;
    };

    setFullHeight();
    window.addEventListener("resize", setFullHeight);

    // Clean up function
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.backgroundColor = "";
      document.documentElement.style.backgroundColor = "";
      document.body.style.minHeight = "";
      window.removeEventListener("resize", setFullHeight);
    };
  }, []);

  return (
    <div className="home-container">
      {cursorJSX}
      <div className="pb-10 block md:hidden lg:hidden">
        <FloatingNavigation className="block md:hidden" />
      </div>

      {/* Main Home components */}
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
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

export default Home;
