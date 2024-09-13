import React from 'react';

function ProfileSection() {
  return (
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
      <p className='text-3xl mt-6 font-medium lg:text-3xl tracking-tight leading-14 text-primary dark:text-white'>
        Hey, I'm Prateek, welcome to my site!
      </p>
      <p className='mt-6 leading-16 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl'>
        I am a digital designer and developer based in Bhopal, India. My passion lies in crafting user interfaces and exploring the intricacies of coding. 
        <br />
        <br />
        When I'm not behind the screen, you'll find me on the football field or at the gym. My life is a perfect blend of technology and physical activity, balancing intense coding sessions with moments of creative inspiration.
      </p>
    </div>
  );
}

export default ProfileSection;