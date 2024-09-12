import React from 'react';
import { IoMdMail } from "react-icons/io";
import { motion } from 'framer-motion';

const SocialIcon = ({ href, icon }) => (
  <motion.a 
    href={href}
    className='flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

function SocialMediaSection() {
  return (
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
  );
}

export default SocialMediaSection;