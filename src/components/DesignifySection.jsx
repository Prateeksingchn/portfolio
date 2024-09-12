import React from 'react';
import { Link } from 'react-router-dom';

function DesignifySection() {
  return (
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
  );
}

export default DesignifySection;