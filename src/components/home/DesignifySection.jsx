import React from 'react';
import { Link } from 'react-router-dom';

function DesignifySection() {
  return (
    <Link 
      to="/designify"
      className='group ring-1 lg:row-start-3 items-center h-full flex px-6 pb-8 pt-3 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick transition-all duration-300 ease-in-out'
    >
      <p className='text-2xl sm:text-[2rem] md:text-2xl lg:text-2xl text-primary w-full text-start dark:text-white  mt-2 font-semibold group-hover:text-primary/80 dark:group-hover:text-white/80 transition-colors duration-300'>
        Designify
      </p>
      <p className='mt-4 text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-400 dark:group-hover:text-zinc-300 transition-colors duration-300'>
        Design & development subscriptions for startups. Streamlined process with fixed monthly rates and unlimited design requests.
      </p>
      <img 
        src="/images/Desginifynew.png"
        className='rounded-3xl w-[250px] mt-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg'
        alt="Designify" 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Link>
  );
}

export default DesignifySection;