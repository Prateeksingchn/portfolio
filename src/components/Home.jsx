import React, { useEffect } from 'react';
import '../App.css';

import Cursor from './Cursor';
import ProfileSection from './home/ProfileSection';
import SocialMediaSection from './home/SocialMediaSection';
import ProjectsSection from './home/ProjectsSection';
import ResumeSection from './home/ResumeSection';
import SkillsSection from './home/SkillsSection';
import DesignifySection from './home/DesignifySection';
import AnimatedInfographic from './home/AnimatedInfographic';
import HoursOfCodingSection from './home/HoursOfCodingSection';
import AboutSection from './home/AboutSection';
import ContactSection from './home/ContactSection';

function Home() {
  const { cursorJSX, handleProjectsMouseEnter, handleProjectsMouseLeave } = Cursor();

  useEffect(() => {
    // Apply smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Clean up function to remove the style when component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <section className='dark:bg-[#101010] w-full min-h-screen'>
      {cursorJSX}
      <div className='p-4'>
        <div className='grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4'>
          <ProfileSection />
          <SocialMediaSection />
          <ProjectsSection onMouseEnter={handleProjectsMouseEnter} onMouseLeave={handleProjectsMouseLeave} />
          <ResumeSection />
          <SkillsSection />
          <DesignifySection />
          <AnimatedInfographic />
          <HoursOfCodingSection />
          <div className='lg:col-span-2 xl:col-span-1 lg:row-span-2 flex flex-col gap-4'>
            <AboutSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;