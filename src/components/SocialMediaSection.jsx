import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaInstagram, FaTwitter, FaBehance, FaDiscord, FaSpotify } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";

const SocialIcon = ({ href, icon: Icon }) => (
  <Button
    variant="outline"
    size="icon"
    asChild
    className='w-12 h-12 rounded-lg bg-zinc-50 dark:bg-tertiary shadow-lg dark:shadow-thick hover:text-zinc-50 dark:hover:bg-primary ring-1 ring-primary/5 dark:ring-white/10 hover:ring-primary/5 dark:hover:ring-white/20 transition-all duration-300 group'
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className='w-5 h-5 text-primary dark:text-black group-hover:scale-125 duration-300 group-hover:text-primary dark:group-hover:text-white/800' />
    </a>
  </Button>
);

const socialLinks = [
  { href: "mailto:email@prateeksinghchouhan007.com", icon: FaEnvelope },
  { href: "https://github.com/Prateeksingchn", icon: FaGithub },
  { href: "https://www.linkedin.com/in/prateek-singh-chouhan-7a511b1b7", icon: FaLinkedinIn },
  { href: "https://www.instagram.com/prateeksinghchouhan007", icon: FaInstagram },
  { href: "https://twitter.com/prateeksinghchouhan", icon: FaTwitter },
  { href: "https://www.behance.net/prateeksinghc1", icon: FaBehance },
  { href: "https://discord.gg/your-discord-invite", icon: FaDiscord },
  { href: "https://open.spotify.com/user/your-spotify-username", icon: FaSpotify },
];

function SocialMediaSection() {
  return (
    <Card className='ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-[#1A1A1A] dark:bg-secondary'>
      <CardContent className='w-full p-0 flex flex-col justify-between h-full'>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-6xl font-medium tracking-tight leading-[50px] text-primary dark:text-white lg:text-7xl'
        >
          Find <br /> mé on
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='grid mt-8 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center items-center w-full'
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <SocialIcon {...link} />
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}

export default SocialMediaSection;