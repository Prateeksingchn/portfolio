import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsSection() {
  return (
    <Link 
      to="/projects"
      className='group flex flex-col justify-between h-full p-8 rounded-3xl bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick ring-1 ring-primary/5 dark:ring-white/10 hover:ring-primary/10 dark:hover:ring-white/20 transition-all duration-300 lg:row-span-2 lg:row-start-2 lg:col-start-2 lg:col-span-2'
    >
      <div className="mb-6 lg:mb-0">
        <h2 className='text-2xl md:text-4xl lg:text-6xl font-medium text-primary dark:text-white tracking-tight'>Projects</h2>
        <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400'>Explore my portfolio of innovative web applications and design projects.</p>
      </div>
      <div className='mt-0'>
        <img 
          src="/images/Projectsnew.png"
          className='w-full h-auto rounded-2xl object-cover aspect-square bg-primary/5 dark:bg-primary ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-300 invert dark:invert-0'
          alt="Projects Preview"
          loading="lazy"
        />
      </div>
    </Link>
  );
}

export default ProjectsSection;