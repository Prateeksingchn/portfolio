import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('javascript', js);

function CodePlaygroundSection() {
  const [code, setCode] = useState(`function greet(name) {
  return \`Hello, ${name}!\`;
}

console.log(greet('World'));`);
  const [output, setOutput] = useState('');

  useEffect(() => {
    handleRunCode();
  }, []);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleRunCode = () => {
    try {
      const result = new Function(code)();
      setOutput(result !== undefined ? String(result) : 'Code executed successfully!');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <motion.div 
      className='ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-between items-start rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-[#1A1A1A] dark:bg-secondary shadow-xl dark:shadow-thick'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='w-full'>
        <h2 className='text-xl tracking-tight font-medium text-primary dark:text-white md:text-4xl mb-4'>
          Interactive Code Playground
        </h2>
        <p className='text-sm text-zinc-500 dark:text-zinc-400 mb-4'>
          Experiment with JavaScript in this live code editor. Edit the code and see the results in real-time!
        </p>
        <div className='bg-[#1E1E1E] rounded-lg overflow-hidden'>
          <div className='flex justify-between items-center px-4 py-2 bg-[#252526]'>
            <span className='text-xs text-zinc-400'>script.js</span>
            <div className='flex space-x-2'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
            </div>
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '1rem',
              borderRadius: '0 0 0.5rem 0.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
            }}
            wrapLines={true}
            wrapLongLines={true}
          >
            {code}
          </SyntaxHighlighter>
        </div>
        <textarea
          value={code}
          onChange={handleCodeChange}
          className='hidden'
        />
      </div>
      {/* <div className='w-full mt-4'>
        <h3 className='text-lg font-medium text-primary dark:text-white mb-2'>Output:</h3>
        <div className='bg-[#1E1E1E] p-4 rounded-lg'>
          <pre className='text-green-400 text-sm whitespace-pre-wrap'>{output}</pre>
        </div>
      </div> */}
      {/* <motion.button 
        className='mt-4 text-sm py-2 px-6 font-semibold rounded-lg bg-primary hover:bg-primary-dark dark:bg-white text-black dark:text-primary dark:hover:bg-gray-200 flex items-center space-x-2 duration-200'
        onClick={handleRunCode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
        <span>Run Code</span>
      </motion.button> */}
    </motion.div>
  );
}

export default CodePlaygroundSection;