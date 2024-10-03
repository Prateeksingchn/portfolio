import React from 'react';

const BrowserContainer = ({ children, title }) => (
  <div className="rounded-lg overflow-hidden bg-gradient-to-b from-[#1e1e1e] to-[#121212] shadow-2xl">
    {/* Browser Header */}
    <div className="bg-[#0f0f0f] px-[12px] py-1 flex items-center justify-between border-b border-black">
      <div className="flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-red-500 opacity-80 hover:opacity-100 transition-opacity"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-80 hover:opacity-100 transition-opacity"></div>
        <div className="w-2 h-2 rounded-full bg-green-500 opacity-80 hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="flex-grow mx-4">
        <div className="w-2/3 h-4 bg-[#2a2a2a] rounded-lg mx-auto flex items-center justify-center">
          <span className="text-xs text-gray-400 truncate">{title}</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="w-[16px] h-[16px] rounded-md border border-gray-700 flex items-center justify-center">
          <div className="w-[5px] h-[5px] bg-gray-400"></div>
        </div>
        <div className="w-[16px] h-[16px] rounded-md border border-gray-700 flex items-center justify-center">
          <svg className="w-3 h-3 text-gray-400 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    
    {/* Browser Content */}
    <div className="p-1">
      {children}
    </div>
  </div>
);

export default BrowserContainer;