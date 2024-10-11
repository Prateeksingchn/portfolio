import React from "react";

const PhotoGallery = () => (
  <div className="flex sm:flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible gap-6 sm:gap-8 mb-12 sm:mb-16 pb-4 sm:pb-4 py-4 px-3" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
    <div className="relative group flex-shrink-0 md:flex-shrink w-[200px] sm:w-[200px] md:w-auto">
      <div className="bg-white p-2 shadow-lg transform transition-all duration-300 rotate-3 group-hover:shadow-xl">
        <div className="relative overflow-hidden">
          <img src="./images/avatardp.jpg" alt="My First Capture" className="w-full h-[210px] sm:h-[220px] md:h-[220px] object-cover mb-2 lg:filter lg:grayscale transition-all duration-300 lg:group-hover:filter-none" />
        </div>
        <p className="text-center text-gray-700 font-['Gloria_Hallelujah'] text-sm sm:text-base">Me</p>
      </div>
    </div>
    <div className="relative group flex-shrink-0 md:flex-shrink w-[200px] sm:w-[200px] md:w-auto">
      <div className="bg-white p-2 shadow-lg transform transition-all duration-300 -rotate-2 group-hover:shadow-xl">
        <div className="relative overflow-hidden">
          <img src="./photography/1.jpg" alt="Solitary Wanderer" className="w-full h-[210px] sm:h-[220px] object-cover mb-2 lg:filter lg:grayscale transition-all duration-300 lg:group-hover:filter-none" />
        </div>
        <p className="text-center text-gray-700 font-['Gloria_Hallelujah'] text-sm sm:text-base">Wanderlust</p>
      </div>
    </div>
    <div className="relative group flex-shrink-0 md:flex-shrink w-[200px] sm:w-[200px] md:w-auto">
      <div className="bg-white p-2 shadow-lg transform transition-all duration-300 rotate-1 group-hover:shadow-xl">
        <div className="relative overflow-hidden">
          <img src="./photography/17.jpg" alt="Peace" className="w-full h-[210px] sm:h-[220px] object-cover mb-2 lg:filter lg:grayscale transition-all duration-300 lg:group-hover:filter-none" />
        </div>
        <p className="text-center text-gray-700 font-['Gloria_Hallelujah'] text-sm sm:text-base">Serenity</p>
      </div>
    </div>
  </div>
);

export default PhotoGallery;