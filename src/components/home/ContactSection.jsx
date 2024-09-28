import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ContactSection() {
  return (
    // Adjusted column spans and height for better responsiveness
    <div className='col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-1 h-auto min-h-[200px] sm:h-[40%] md:h-[50%] lg:h-[40%] bg-[#1A1A1A] dark:bg-secondary rounded-3xl p-4 flex flex-col justify-between'>
      <Link to="/contact" className='flex flex-col justify-between h-full'>
        <div className='flex justify-between items-start w-full'>
          {/* Adjusted text size for better readability on smaller screens */}
          <p className='text-[14px] sm:text-[12px] text-gray-300'>Have some <br /> questions?</p>
          {/* Made icon size responsive */}
          <ArrowUpRight className='text-gray-300' size={24} />
        </div>
        <div className='self-start pb-2'> 
          {/* Adjusted text size for better scaling on different screen sizes */}
          <p className='text-3xl sm:text-4xl font-normal text-white'>Contact me</p>
        </div>
      </Link>
    </div>
  );
}

export default ContactSection;