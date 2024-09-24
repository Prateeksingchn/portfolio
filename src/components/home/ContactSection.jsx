import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ContactSection() {
  return (
    <div className='lg:col-span-2 xl:col-span-1 h-[40%] bg-[#1A1A1A] dark:bg-secondary rounded-3xl p-4 flex flex-col justify-between'>
      <Link to="/contact" className='flex flex-col justify-between h-full'>
        <div className='flex justify-between items-start w-full'>
          <p className='text-[12px] text-gray-300'>Have some <br /> questions?</p>
          <ArrowUpRight className='text-gray-300' size={30} />
        </div>
        <div className='self-start pb-2'>
          <p className='text-4xl font-normal text-white'>Contact me</p>
        </div>
      </Link>
    </div>
  );
}

export default ContactSection;