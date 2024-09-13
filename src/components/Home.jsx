import React from 'react';
import ProfileSection from './ProfileSection';
import SocialMediaSection from './SocialMediaSection';
import ProjectsSection from './ProjectsSection';
import ResumeSection from './ResumeSection';
import SkillsSection from './SkillsSection';
import DesignifySection from './DesignifySection';
import AnimatedInfographic from './AnimatedInfographic';
import GitHubActivitySection from './GitHubActivitySection';
import AboutSection from './AboutSection';

function Home() {
  return (
    <section className='dark:bg-[#101010] w-full min-h-screen'>
      <div className='p-4'>
        <div className='grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4'>
          <ProfileSection />
          <SocialMediaSection />
          <ProjectsSection />
          <ResumeSection />
          <SkillsSection />
          <DesignifySection />
          <AnimatedInfographic />
          <GitHubActivitySection />
          <AboutSection />
        </div>
      </div>
    </section>
  );
}

export default Home;