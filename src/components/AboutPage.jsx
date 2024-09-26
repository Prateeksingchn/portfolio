import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaReact, FaGithub, FaTrain } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiVercel, SiShadcnui, SiGreensock } from "react-icons/si";
import { Link } from "react-router-dom";

function AboutPage({ handleProjectsMouseEnter, handleProjectsMouseLeave }) {
  const photosRef = useRef(null);
  const photosControls = useAnimation();

  const hobbies = [
    { icon: "🎮", name: "Gaming"},
    { icon: "📸", name: "Photography"},
    { icon: "⚽", name: "Football"},
    { icon: "🏊", name: "Swimming"},
    { icon: "🏏", name: "Cricket"},
  ];


  // photos array for the photography section
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
                    duration: 100, // Adjusted duration for slower speed
                    ease: "linear",
                },
            },
        });
    };

    scrollPhotos();
}, [photosControls]);

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="bg-black text-white min-h-screen pt-44 pb-14 relative overflow-hidden font-[Roboto] ">
      
      {/* back to home button */}
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

      <div className="max-w-3xl mx-auto px-10">
        <h1 className="text-[3.75rem] font-bold text-start mb-8 flex items-center">
          about me 
          <span className="ml-2 text-5xl">🐳</span>
        </h1>
        
        {/* image section - polaroid style with rotation */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          <div className="relative group">
            <div className="bg-white p-2 shadow-lg transform transition-all duration-300 rotate-3 group-hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img src="./images/avatardp.jpg" alt="My First Capture" className="w-full h-[220px] object-cover mb-2 filter grayscale transition-all duration-300 group-hover:filter-none" />
              </div>
              <p className="text-center text-gray-700 font-['Gloria_Hallelujah'] ">Me</p>
            </div>
          </div>
          <div className="relative group">
            <div className="bg-white p-2 shadow-lg transform transition-all duration-300 -rotate-2 group-hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img src="./photography/1.jpg" alt="Solitary Wanderer" className="w-full h-[220px] object-cover mb-2 filter grayscale transition-all duration-300 group-hover:filter-none" />
              </div>
              <p className="text-center text-gray-700 font-['Gloria_Hallelujah'] ">Wanderlust</p>
            </div>
          </div>
          <div className="relative group">
            <div className="bg-white p-2 shadow-lg transform transition-all duration-300 rotate-1 group-hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img src="./photography/17.jpg" alt="Peace" className="w-full h-[220px] object-cover mb-2 filter grayscale transition-all duration-300 group-hover:filter-none" />
              </div>
              <p className="text-center text-gray-700 font-['Gloria_Hallelujah'] ">Serenity</p>
            </div>
          </div>
        </div>
        
        {/* about me section */}
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

        {/* Updated Hobbies and Interests section */}
        <motion.section 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2">Hobbies & Interests</h2>
          <div className="flex overflow-x-auto space-x-6 p-1">
            {hobbies.map((hobby, index) => (
              <motion.div 
                key={index}
                className="flex-shrink-0 w-auto rounded-lg p-2 shadow-lg"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
              >
                <div className="text-4xl mb-4">{hobby.icon}</div>
                <h3 className="text-sm font-bold mb-2">{hobby.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Updated Photography showcase with Polaroid style */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Visual Journey</h2>
          <p className="text-sm text-gray-400 mb-6">
            This collection captures both the world through my lens and moments from my personal life. It's a visual representation of my experiences, creativity, and the beauty I've encountered along the way.
          </p>
          <div className="overflow-hidden">
            <motion.div 
              ref={photosRef}
              className="flex space-x-6 p-4"
              animate={photosControls}
            >
              {[...photos, ...photos].map((photo, index) => (
                <motion.div 
                  key={index}
                  className="flex-shrink-0 w-[200px] h-[270px] bg-white p-2 shadow-lg transform transition-all duration-300 rotate-0 hover:rotate-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={photo} 
                      alt={`Photography sample ${index + 1}`} 
                      className="w-full h-[220px] object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Values & Work Philosophy */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-2">Values & Work Philosophy</h2>
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

        {/* about this site section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">About this site</h2>
          <p className="text-sm mb-8">Curious about this site? It features:</p>
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-1">Tech stack</h2>
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
            <h2 className="text-xl font-bold mb-2">Inspiration</h2>
            <p className="mb-4">
              I'm thankful to the fantastic websites listed below for sparking the inspiration behind
              this site:
            </p>
            <ul className="list-disc pl-5 grid grid-cols-1 gap-2">
              <li>beta.vimfn.in</li>
              <li>Pinterest</li>
              <li>Awwwards.com</li>
              <li>Star Wars</li>
              <li>Dribbble.com</li>
              <li>Behance.net</li>
              <li>acternity ui</li>
              <li>Apple greeting animation</li>
            </ul>
          </section>
        </section>
        
      </div>
    </div>
  );
}

export default AboutPage;