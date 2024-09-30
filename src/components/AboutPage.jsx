import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaReact, FaGithub, FaTrain } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiVercel, SiShadcnui, SiGreensock } from "react-icons/si";
import { Link } from "react-router-dom";

// New StarField component
const StarField = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 30 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.05 + 0.01,
      }));
    };

    setStars(generateStars());

    const moveStars = () => {
      setStars(prevStars => prevStars.map(star => ({
        ...star,
        x: (star.x + star.speed) % 100,
        y: (star.y + star.speed * 0.5) % 100, // Diagonal movement
      })));
    };

    const intervalId = setInterval(moveStars, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

// New Navigation component
const Navigation = () => (
  <nav className="absolute top-4 right-4 z-20">
    <ul className="flex space-x-6">
      <li>
        <Link to="/" className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm">
          Home
        </Link>
      </li>
      <li>
        <Link to="/projects" className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-white hover:text-blue-400 transition-colors duration-300 font-['Space_Mono'] text-sm">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

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
    <div className="bg-black text-white min-h-screen pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-14 relative overflow-hidden font-[Roboto] ">
      <StarField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Modern and aesthetic back to home button */}
      <Link to="/" className="absolute top-4 left-4 sm:top-6 sm:left-6">
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        <h1 className="text-[2.6rem] sm:text-[3rem] md:text-[3rem] lg:text-[3.75rem] font-bold text-start mb-6 sm:mb-8 md:mb-5 flex items-center">
          about me 
          <span className="ml-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl">🐳</span>
        </h1>
        
        {/* image section - polaroid style with rotation */}
        <div className="flex sm:flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible gap-6 sm:gap-8 mb-12 sm:mb-16 pb-4 sm:pb-4 py-4 px-3" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="relative group flex-shrink-0 md:flex-shrink w-[200px] sm:w-[200px] md:w-auto">
            <div className="bg-white p-2 shadow-lg transform transition-all duration-300 rotate-3 group-hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img src="./images/avatardp.jpg" alt="My First Capture" className="w-full h-[210px] sm:h-[220px] md:h-[220px] object-cover mb-2 filter grayscale transition-all duration-300 group-hover:filter-none" />
              </div>
              <p className="text-center text-gray-700 font-['Gloria_Hallelujah'] text-sm sm:text-base">Me</p>
            </div>
          </div>
          <div className="relative group flex-shrink-0 md:flex-shrink w-[200px] sm:w-[200px] md:w-auto">
            <div className="bg-white p-2 shadow-lg transform transition-all duration-300 -rotate-2 group-hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img src="./photography/1.jpg" alt="Solitary Wanderer" className="w-full h-[210px] sm:h-[220px] object-cover mb-2 filter grayscale transition-all duration-300 group-hover:filter-none" />
              </div>
              <p className="text-center text-gray-700 font-['Gloria_Hallelujah'] text-sm sm:text-base">Wanderlust</p>
            </div>
          </div>
          <div className="relative group flex-shrink-0 md:flex-shrink w-[200px] sm:w-[200px] md:w-auto">
            <div className="bg-white p-2 shadow-lg transform transition-all duration-300 rotate-1 group-hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img src="./photography/17.jpg" alt="Peace" className="w-full h-[210px] sm:h-[220px] object-cover mb-2 filter grayscale transition-all duration-300 group-hover:filter-none" />
              </div>
              <p className="text-center text-gray-700 font-['Gloria_Hallelujah'] text-sm sm:text-base">Serenity</p>
            </div>
          </div>
        </div>
        
        {/* about me section */}
        <section className="mb-10 sm:mb-12">
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
            Off-screen, I'm all about balance: hitting the gym, playing football, swimming, 
            and diving into video games. These activities keep me energized and sharp for 
            tackling the latest web development challenges.
          </p>
        </section>

        {/* Updated Hobbies and Interests section */}
        <motion.section 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Hobbies & Interests</h2>
          <div className="flex flex-wrap justify-start sm:justify-start gap-4">
            {hobbies.map((hobby, index) => (
              <motion.div 
                key={index}
                className="w-20 lg:w-24 sm:w-auto rounded-lg p-2 shadow-lg flex flex-col items-center"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{hobby.icon}</div>
                <h3 className="text-xs sm:text-sm font-bold">{hobby.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Updated Photography showcase with Polaroid style */}
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

        {/* Values & Work Philosophy */}
        <motion.section 
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Values & Work Philosophy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6">
            {[
              { title: "User-Centric Design", description: "I believe in creating intuitive and accessible interfaces that prioritize the end-user's experience." },
              { title: "Continuous Learning", description: "I'm committed to staying updated with the latest technologies and best practices in web development." },
              { title: "Attention to Detail", description: "I strive for pixel-perfect designs and clean, efficient code in every project." },
              { title: "Collaborative Approach", description: "I value open communication and teamwork to achieve the best possible outcomes." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-4 lg:p-6 rounded-lg shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-[1rem] md:text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* about this site section */}
        <section className="mb-8">
          <h2 className="text-[1.6rem] sm:text-2xl font-bold mb-2">About this site</h2>
          <p className="text-sm sm:text-sm mb-6 sm:mb-8">Curious about this site? It features:</p>
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
        
          <section className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Inspiration</h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-sm">
              I'm thankful to the fantastic websites listed below for sparking the inspiration behind
              this site:
            </p>
            <ul className="list-disc pl-5 grid grid-cols-2 sm:grid-cols-1 gap-1 sm:gap-2 text-xs sm:text-sm">
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
        </section>

        {/* Made with Love section */}
        <motion.footer 
          className="text-center pt-5 mt-12 bg-black border-t border-[#808080]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center max-w-3xl mx-auto px-4 text-sm text-gray-200">
            <p className="text-sm text-[#808080]">2024 © Prateek Singh Chouhan</p>
            <a 
              href="https://github.com/Prateeksingchn/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors duration-300"
            >
              <FaGithub className="mr-2" />
              <span>Space#4b67bbb</span>
            </a>
          </div>
        </motion.footer>
        
      </div>
    </div>
  );
}

export default AboutPage;