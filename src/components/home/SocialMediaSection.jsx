import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaInstagram, FaTwitter, FaBehance, FaDiscord, FaSpotify } from 'react-icons/fa';

const SocialIcon = ({ href, icon: Icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center transition-all duration-300"
  >
    <Icon className="w-6 h-6 text-black transition-all duration-200 hover:scale-110" />
  </a>
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
    <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-[#1A1A1A] dark:bg-secondary border-none">
      <h2 className="text-7xl w-full text-start font-semibold mb-8 text-white">
        Find <br /> mé on
      </h2>
      <div className="grid grid-cols-4 gap-4 w-full">
        {socialLinks.map((link, index) => (
          <SocialIcon key={index} {...link} />
        ))}
      </div>
    </div>
  );
}

export default SocialMediaSection;