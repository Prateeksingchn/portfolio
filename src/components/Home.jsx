import React from 'react';
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import CodePlaygroundSection from './CodePlaygroundSection';
import GitHubActivitySection from './GitHubActivitySection';

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href}
    className='flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12'
  >
    {icon}
  </a>
);

const SkillIcon = ({ icon, name }) => (
  <div className="flex flex-col items-center">
    {icon}
    <span className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">{name}</span>
  </div>
);

function Home() {
  return (
    <section className='dark:bg-[#101010] w-full min-h-screen'>
      <div className='p-4'>
        <div className='grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4'>
          {/* Profile Section */}
          <div className='lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8'>
            <div className='relative flex items-center gap-x-4'>
              <img
                className='h-10 w-10 rounded-full object-cover ring-1 dark:ring-white/10 ring-primary/5'
                src="./public/images/avatardp.jpg" alt="Prateek Singh Chouhan" />
              <div className='text-sm leading-6'>
                <p className='font-semibold text-primary dark:text-white ml-12'>
                  <a href="#">
                    <span className='absolute inset-0 ml-14 '>
                      Prateek Singh Chouhan
                    </span>
                  </a>
                </p>
                <p className='text-zinc-500 dark:text-zinc-400 mt-5'>
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className='text-3xl mt-6 font-medium lg:text-4xl tracking-tight leading-16 text-primary dark:text-white'>
              Hey, I'm Prateek, welcome to my site!
            </p>
            <p className='mt-8 leading-16 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl'>
              I am a digital designer and developer based in Bhopal, India. My passion lies in crafting user interfaces and exploring the intricacies of coding. 
              <br />
              <br />
              When I'm not behind the screen, you'll find me on the football field or at the gym. My life is a perfect blend of technology and physical activity, balancing intense coding sessions with moments of creative inspiration.
            </p>
          </div>

          {/* Social Media Section */}
          <div className='ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-[#1A1A1A] dark:bg-secondary'>
            <div className='w-full'>
              <p className='text-6xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl'>
                Find <br /> me on
              </p>
            </div>
            <div className='grid mt-8 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center items-center w-full'>
              <SocialIcon href="mailto:email@prateeksinghchouhan007.com" icon={<IoMdMail className='icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50' />} />
              <SocialIcon href="https://github.com/Prateeksingchn" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-github"></i>} />
              <SocialIcon href="https://www.linkedin.com/in/prateek-singh-chouhan-7a511b1b7" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-linkedin"></i>} />
              <SocialIcon href="https://www.instagram.com/prateeksinghchouhan007" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-instagram"></i>} />
              <SocialIcon href="https://twitter.com/prateeksinghchouhan" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-twitter"></i>} />
              <SocialIcon href="https://www.behance.net/prateeksinghc1" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-behance"></i>} />
              <SocialIcon href="https://dribbble.com/prateeeeek" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-dribbble"></i>} />
              <SocialIcon href="https://in.pinterest.com/prateekchouhan96483/" icon={<i className="icon icon-tabler h-6 w-6 ml-[5.5px] text-[22px] mt-[2px]  group-hover:scale-125 duration-300  text-primary hover:text-primary dark:text-black group-hover text-primary:dark:text-white/50 fa-brands fa-pinterest"></i>} />
            </div>
          </div>

          {/* Projects Section */}
          <Link 
            to="/projects"
            className='ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick'
          >
            <div>
              <p className='text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl'>
              Projects   
              </p>
              <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400'>
                Explore my portfolio of innovative web applications and design projects.
              </p>
            </div>
            <div className='mt-8'>
              <img 
                src="/images/Projectsnew.png"
                className='rounded-2xl h-auto group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10 object-cover' 
                alt="Projects Preview" 
              />
            </div>
          </Link>

          {/* Resume Section */}
          <div className='ring-1 dark:ring-white/10 ring-primary/5 flex flex-col justify-between items-center rounded-3xl shadow-xl dark:shadow-thick p-8 bg-[#1A1A1A] dark:bg-secondary overflow-hidden text-center lg:text-left'>
            <div> 
              <p className='text-xl text-primary dark:text-white lg:text-5xl tracking-tight'>
                Grab my résumé!
              </p>
              <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none'>
                Discover my professional journey and achievements.
              </p>
            </div>
            <div className='w-full mt-8 md:max-w-xs lg:max-w-none'>
              <a href="https://drive.google.com/file/d/14Kgva0jVB4b-4knPzhpDPGV5rtkJVnsI/view?usp=drive_link">
                <button 
                  type='button'
                  className='text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-[#ECECEC] dark:text-black dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between'> 
                  Download my CV
                  <i className="icon icon-tabler icon-tabler-download w-4 h-4 fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>

          {/* Skills Section */}
<div className='lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-[#1A1A1A] dark:bg-secondary dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8'>
  <p className='text-xl tracking-tight font-medium text-primary dark:text-white md:text-4xl mb-6'>
    Skills & Tools
  </p>
  <div className='grid grid-cols-1 gap-6'>
    {/* Skills */}
    <div>
      <p className='text-lg tracking-tight font-medium text-primary dark:text-white md:text-2xl mb-4'>
        Skills
      </p>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-6 text-white'>
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-orange-500 fa-brands fa-html5"></i>} name="HTML" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-blue-500 fa-brands fa-css3-alt"></i>} name="CSS" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-yellow-400 fa-brands fa-js"></i>} name="JavaScript" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-teal-400 fa-brands fa-react"></i>} name="React" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-purple-600 fa-brands fa-bootstrap"></i>} name="Bootstrap" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-sky-400 fa-brands fa-twitter"></i>} name="Tailwind CSS" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-purple-500 fa-solid fa-bolt"></i>} name="Redux" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-black dark:text-white fa-brands fa-next-js"></i>} name="Next.js" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-green-600 fa-brands fa-node-js"></i>} name="Node.js" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-gray-500 fa-solid fa-server"></i>} name="Express.js" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-green-500 fa-solid fa-database"></i>} name="MongoDB" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-red-500 fa-brands fa-java"></i>} name="Java" />
      </div>
    </div>
    
    {/* Tools */}
    <div className='mt-8'>
      <p className='text-lg tracking-tight font-medium text-primary dark:text-white md:text-2xl mb-4'>
        Tools
      </p>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-6 text-white'>
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-blue-400 fa-brands fa-github"></i>} name="GitHub" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-orange-500 fa-brands fa-git-alt"></i>} name="Git" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-blue-600 fa-brands fa-docker"></i>} name="Docker" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-purple-400 fa-brands fa-figma"></i>} name="Figma" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-blue-500 fa-solid fa-pen-ruler"></i>} name="Photoshop" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-orange-600 fa-solid fa-laptop-code"></i>} name="VS Code" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-green-500 fa-solid fa-leaf"></i>} name="GSAP" />
        <SkillIcon icon={<i className="text-5xl hover:scale-125 duration-300 text-blue-400 fa-solid fa-cube"></i>} name="Framer Motion" />
      </div>
    </div>
  </div>
</div>

          {/* Designify Section */}
          <Link 
            to="/designify"
            className='ring-1 lg:row-start-3 items-center h-full flex px-8 pb-8 pt-2 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick'
          >
            <p className='text-xl hover:underline hover:scale-105 duration-500 text-primary w-full text-start dark:text-white lg:text-2xl mt-2'>
              Designify
            </p>
            <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400'>
              Design & development subscriptions for startups. Streamlined process with fixed monthly rates and unlimited design requests.
            </p>
            <img 
              src="/images/Desginifynew.png"
              className='rounded-3xl hover:scale-105 duration-300 w-[250px] mt-4'
              alt="Designify" 
            />
          </Link>

          <CodePlaygroundSection />

          <GitHubActivitySection />

          {/* About Section */}
          <div className='lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8'>
            <div>
              <p className='text-xl tracking-tight font-medium text-primary dark:text-white md:text-3xl mb-4'>
                About Me
              </p>
              <p className='text-lg text-zinc-500 dark:text-zinc-400'>
                As a digital designer and full-stack developer, I specialize in creating unique visual identities and functional interfaces for digital products. My approach combines aesthetics with user-centric design principles, ensuring that each project not only looks great but also delivers an exceptional user experience.
                <br /><br />
                I believe that great design stems from a deep understanding of the client's vision, open communication, and a genuine respect for the end-users. My goal is to bridge the gap between complex functionalities and intuitive user interfaces, making technology more accessible and enjoyable for everyone.
              </p>
            </div>
            <p className='text-primary dark:text-white mt-4'>Prateek Singh Chouhan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;