import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaTrain } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiVercel, SiShadcnui, SiGreensock } from "react-icons/si";
import { Link } from "react-router-dom";
import Cursor from "./Cursor"; // Import the Cursor component

function AboutPage({ handleProjectsMouseEnter, handleProjectsMouseLeave }) {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-14 relative overflow-hidden">
      <Link to="/route" className="absolute top-4 left-4 z-10">
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.svg>
      </Link>

      <div className="max-w-3xl mx-auto px-8">
        <h1 className="text-6xl font-bold text-start mb-16 flex items-center">
          about me 
          <span className="ml-2 text-5xl">🐳</span>
        </h1>
        
        <div className="grid grid-cols-3 gap-8 mb-16 ">
          <div className="relative">
            <div className="absolute inset-0 bg-white transform rotate-3 shadow-lg"></div>
            <div className="relative bg-gray-200 aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="My First Capture" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
              {/* <span className="absolute bottom-2 left-2 text-sm text-white font-handwritten">My First Capture</span> */}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white transform -rotate-2 shadow-lg"></div>
            <div className="relative bg-gray-200 aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Solitary Wanderer" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
              {/* <span className="absolute bottom-2 left-2 text-sm text-white font-handwritten">Solitary Wanderer</span> */}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white transform rotate-3 shadow-lg"></div>
            <div className="relative bg-gray-200 aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Peace" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
              {/* <span className="absolute bottom-2 left-2 text-sm text-white font-handwritten">Peace</span> */}
            </div>
          </div>
        </div>
        
        <section className="mb-8">
          <p className="mb-4">
            Hey there! I'm Prateek Singh Chouhan, a 20-year-old Full-Stack developer from Bhopal, India who
            thrives on crafting intuitive and dynamic UIs, especially with React.
          </p>
          <p className="mb-4">
            I began my tech journey at the end of 2022, and since then, I've developed a strong
            expertise in building responsive and secure web applications that offer a seamless
            user experience. Along with my love for animation and UI design, I find full-stack
            development incredibly fascinating.
          </p>
          <p className="mb-4">
            I'm especially intrigued by creating scalable backends and robust applications,
            which adds another layer of excitement to my work.
          </p>
          <p className="mb-4">
            Lately, I'm exploring backend technologies like Node.js and GraphQL, with a
            growing curiosity for Web3 on the horizon.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About this site</h2>
          <p>Curious about this site? It features:</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tech stack</h2>
          <p className="mb-4">
            This site is crafted with React, Tailwind CSS, Framer Motion, Shadcn, GSAP, and Locomotive Scroll. 
            It uses Vercel for analytics and hosting. Check out the code on GitHub!
          </p>
          <div className="grid grid-cols-4 gap-4">
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
                <Icon className="text-xl sm:text-2xl md:text-4xl lg:text-4xl mb-2" />
                <span className="text-xs sm:text-base md:text-lg lg:text-xl">{name}</span>
              </div>
            ))}
          </div>    
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Inspiration</h2>
          <p className="mb-4">
            I'm thankful to the fantastic websites listed below for sparking the inspiration behind
            this site:
          </p>
          <ul className="list-disc pl-5">
            <li>anfu.me</li>
            <li>beta.vimfn.in</li>
            <li>bopahobby.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;