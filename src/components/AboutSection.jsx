import React from 'react';

function AboutSection() {
  return (
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
  );
}

export default AboutSection;