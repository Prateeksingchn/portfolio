import React from 'react';

function ResumeSection() {
  return (
    <div className='ring-1 dark:ring-white/10 ring-primary/5 flex flex-col justify-between items-center rounded-3xl shadow-xl dark:shadow-thick p-8 bg-[#1A1A1A] dark:bg-secondary overflow-hidden text-center lg:text-left'>
      <div> 
        <p className='text-xl text-primary dark:text-white lg:text-6xl font-medium tracking-tight'>
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
  );
}

export default ResumeSection;