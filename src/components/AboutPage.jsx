import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaReact, FaGithub, FaTrain } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiVercel, SiShadcnui, SiGreensock } from "react-icons/si";
import { Link } from "react-router-dom";

function AboutPage({ handleProjectsMouseEnter, handleProjectsMouseLeave }) {
  const photosRef = useRef(null);
  const photosControls = useAnimation();

  const journeyItems = [
    { year: '2022', event: 'Embarked on my web development journey', details: 'Learned HTML, CSS, and JavaScript fundamentals' },
    { year: '2023', event: 'Dove deep into React and Node.js', details: 'Built my first full-stack application and contributed to open-source projects' },
    { year: '2024', event: 'Expanding my skillset', details: 'Exploring advanced React patterns, GraphQL, and diving into Web3 technologies' },
  ];

  const hobbies = [
    { icon: "🎮", name: "Gaming", description: "Exploring new game mechanics and getting UI/UX inspiration" },
    { icon: "📸", name: "Photography", description: "Capturing moments and sharpening my eye for detail" },
    { icon: "⚽", name: "Football", description: "Enjoying the thrill of the beautiful game" },
    { icon: "🏊", name: "Swimming", description: "Staying fit and finding tranquility in the water" },
    { icon: "🏏", name: "Cricket", description: "Embracing the spirit of teamwork and strategy" },
  ];

  const photos = [
    "https://images.unsplash.com/photo-1500531279542-fc8490c8ea4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1574&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
  ];

  useEffect(() => {
    const scrollPhotos = async () => {
      await photosControls.start({
        x: [0, -photosRef.current.scrollWidth + window.innerWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    };

    scrollPhotos();
  }, [photosControls]);

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-14 relative overflow-hidden">
      <Link to="/" className="absolute top-4 left-4 z-10">
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
        
        {/* image section - made smaller */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-white transform rotate-3 shadow-lg"></div>
            <div className="relative bg-gray-200 aspect-[3/4] overflow-hidden">
              <img src="./images/avatardp.jpg" alt="My First Capture" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white transform -rotate-2 shadow-lg"></div>
            <div className="relative bg-gray-200 aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Solitary Wanderer" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-white transform rotate-3 shadow-lg"></div>
            <div className="relative bg-gray-200 aspect-[3/4] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Peace" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
        </div>
        
        <section className="mb-12">
          <p className="mb-4 text-[15px]">
            Hey there! I'm Prateek Singh Chouhan, a 20-year-old Full-Stack developer from Bhopal, India who
            thrives on crafting intuitive and dynamic UIs, especially with React.
          </p>
          <p className="mb-4 text-[15px]">
            I began my tech journey at the end of 2022, and since then, I've developed a strong
            expertise in building responsive and secure web applications that offer a seamless
            user experience. Along with my love for animation and UI design, I find full-stack
            development incredibly fascinating.
          </p>
          <p className="mb-4 text-[15px]">
            I'm especially intrigued by creating scalable backends and robust applications,
            which adds another layer of excitement to my work.
          </p>
          <p className="mb-4 text-[15px]">
            Lately, I'm exploring backend technologies like Node.js and GraphQL, with a
            growing curiosity for Web3 on the horizon.
          </p>
          <p className="mb-4 text-[15px]">
            When I'm not coding, you can find me exploring nature trails, experimenting with new recipes in the kitchen,
            or diving into a good book. I believe in continuous learning and always strive to stay updated with the latest
            trends in web development.
          </p>
        </section>

        {/* New Hobbies and Interests section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-8">Hobbies & Interests</h2>
          <div className="relative">
            {/* Hobby cards */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {hobbies.map((hobby, index) => (
                <motion.div 
                  key={index}
                  className="w-40 h-40 flex flex-col items-center justify-center text-center"
                  initial={{ y: 50, opacity: 0, rotate: -5 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <div className="text-4xl mb-2">{hobby.icon}</div>
                  <h3 className="text-lg font-bold mb-1">{hobby.name}</h3>
                  <p className="text-xs text-gray-300">{hobby.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Photography showcase */}
            <motion.div 
              className="mt-12 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">My Photography</h3>
              <motion.div 
                ref={photosRef}
                className="flex space-x-4 p-2"
                animate={photosControls}
              >
                {[...photos, ...photos].map((photo, index) => (
                  <motion.div 
                    key={index}
                    className="flex-shrink-0 w-[200px] h-[200px] relative overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.05, rotate: Math.random() * 5 - 2.5 }}
                  >
                    <motion.img 
                      src={photo} 
                      alt={`Photography sample ${index + 1}`} 
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Updated Static and Minimalistic Timeline with Line */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-8">My Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[87px] top-0 bottom-0 w-px bg-gray-800"></div>
            
            {journeyItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="mb-8 flex items-start pl-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-14 flex-shrink-0">
                  <div className="text-sm font-medium text-gray-400">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow pl-8 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-lg font-bold mb-1">{item.event}</h3>
                  <p className="text-gray-400 text-sm">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values & Work Philosophy */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8">Values & Work Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "User-Centric Design", description: "I believe in creating intuitive and accessible interfaces that prioritize the end-user's experience." },
              { title: "Continuous Learning", description: "I'm committed to staying updated with the latest technologies and best practices in web development." },
              { title: "Attention to Detail", description: "I strive for pixel-perfect designs and clean, efficient code in every project." },
              { title: "Collaborative Approach", description: "I value open communication and teamwork to achieve the best possible outcomes." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-lg shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-3">About this site</h2>
          <p className="text-sm">Curious about this site? It features:</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Tech stack</h2>
          <p className="mb-4 text-sm">
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
                <Icon className="text-xl sm:text-2xl md:text-4xl lg:text-3xl mb-2" />
                <span className="text-xs sm:text-base md:text-sm lg:text-sm">{name}</span>
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
          <ul className="list-disc pl-5 grid grid-cols-2 gap-2">
            <li>anfu.me</li>
            <li>beta.vimfn.in</li>
            <li>bopahobby.com</li>
            <li>Pinterest</li>
            <li>Awwwards.com</li>
            <li>Star Wars</li>
            <li>Dribbble.com</li>
            <li>Behance.net</li>
            <li>Apple.com (for minimalist design)</li>
            <li>acternity ui</li>
          </ul>
        </section>

        {/* Collaboration Call-to-Action */}
        <motion.section 
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-3">Collaborate</h2>
          <p className="mb-4 text-sm text-gray-300">Open for new projects. Let's create something together.</p>
          <motion.button
            className="border border-gray-400 text-gray-200 px-4 py-2 rounded-md text-sm transition-colors duration-300 hover:bg-gray-700"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Connect
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
}

export default AboutPage;