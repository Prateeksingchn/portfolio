import React from "react";
import { FaReact, FaGithub, FaTrain } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiVercel, SiShadcnui, SiGreensock } from "react-icons/si";

const TechStackSection = ({ handleProjectsMouseEnter, handleProjectsMouseLeave }) => (
  <section className="mb-8 sm:mb-10">
    <h2 className="text-lg sm:text-xl font-bold mb-1">Tech stack</h2>
    <p className="mb-4 text-sm sm:text-sm">
      This site is crafted with React, Tailwind CSS, Framer Motion, Shadcn, GSAP, and Locomotive Scroll. 
      It uses Vercel for analytics and hosting. Check out the code on GitHub!
    </p>
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
      {[ 
        { Icon: FaReact, name: "React" },
        { Icon: SiTailwindcss, name: "Tailwind" },
        { Icon: SiFramer, name: "Framer Motion" },
        { Icon: SiVercel, name: "Vercel" },
        { Icon: SiShadcnui, name: "Shadcn" },
        { Icon: FaGithub, name: "GitHub" },
        { Icon: SiGreensock, name: "GSAP" },
        { Icon: FaTrain, name: "Locomotive" },
      ].map(({ Icon, name }) => (
        <div 
          key={name}
          className="p-2 rounded text-center flex flex-col items-center"
          onMouseEnter={handleProjectsMouseEnter}
          onMouseLeave={handleProjectsMouseLeave}
        >
          <Icon className="text-[1.7rem] sm:text-[2rem] md:text-3xl lg:text-3xl mb-1 sm:mb-2" />
          <span className="text-[10px] sm:text-xs md:text-sm">{name}</span>
        </div>
      ))}
    </div>    
  </section>
);

const InspirationSection = () => (
  <section className="mb-6 sm:mb-8">
    <h2 className="text-lg sm:text-xl font-bold mb-2">Inspiration</h2>
    <p className="mb-3 sm:mb-4 text-sm sm:text-sm">
      I'm thankful to the fantastic websites listed below for sparking the inspiration behind
      this site:
    </p>
    <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-1 gap-1 sm:gap-2 text-sm sm:text-sm">
      <li>beta.vimfn.in</li>
      <li>antfu.me</li>
      <li>magicui.design</li>
      <li>Pinterest</li>
      <li>Awwwards.com</li>
      <li>Star Wars</li>
      <li>Dribbble.com</li>
      <li>Behance.net</li>
      <li>acternity ui</li>
      <li>Apple</li>
      <li>Bento grid</li>
      <li>The Pande</li>
      <li>rohitsinghrawat.tech</li>
      <li>darkmodedesign</li>
      <li>rekhchandsahu</li>
    </ul>
  </section>
);

const AboutThisSiteSection = ({ handleProjectsMouseEnter, handleProjectsMouseLeave }) => (
  <section className="mb-8">
    <h2 className="text-[1.6rem] sm:text-2xl font-bold mb-2">About this site</h2>
    <p className="text-sm sm:text-sm mb-6 sm:mb-8">Curious about this site? It features:</p>
    <TechStackSection 
      handleProjectsMouseEnter={handleProjectsMouseEnter}
      handleProjectsMouseLeave={handleProjectsMouseLeave}
    />
    <InspirationSection />
  </section>
);

export default AboutThisSiteSection;