import React from 'react';
import { Button } from "./ui/Button";

const SocialButton = ({ href, icon: Icon }) => (
  <Button
    variant="outline"
    size="icon"
    asChild
    className='w-12 h-12 rounded-lg bg-zinc-50 dark:bg-tertiary shadow-lg dark:shadow-thick hover:bg-primary dark:hover:bg-primary ring-1 ring-primary/5 dark:ring-white/10 hover:ring-primary/5 dark:hover:ring-white/20 transition-all duration-300 group'
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className='w-5 h-5 text-primary dark:text-white group-hover:text-white transition-colors duration-300' />
    </a>
  </Button>
);

export default SocialButton;