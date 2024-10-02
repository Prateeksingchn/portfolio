import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bar } from '../../components/ui/Bar';
import { FaGithub, FaCode, FaStar, FaCodeBranch } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';

const projectStats = [
  { name: 'Repositories', value: 77, icon: <FaGithub /> },
  { name: 'Stars', value: 7, icon: <FaStar /> },
  { name: 'Commits', value: 1250, icon: <FaCodeBranch /> },
  { name: 'Pull Requests', value: 42, icon: <FaCode /> },
];

const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444'];

const AnimatedInfographic = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplineLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-4 sm:p-6 h-full justify-between items-start rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-[#04040475] dark:bg-secondary shadow-xl dark:shadow-thick"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full space-y-4 pb-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">GitHub Insights</h2>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='w-full md:w-1/2 space-y-4'>
            <p className="text-sm sm:text-base text-gray-400">A snapshot of my development journey and impact</p>
            <div className="h-64 sm:h-64 w-full mx-auto overflow-hidden rounded-2xl bg-black/20 relative">
              {splineLoaded && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '200%',
                  height: '200%',
                  transform: 'translate(-50%, -50%) scale(0.5)',
                  overflow: 'hidden',
                }}>
                  <Spline 
                    scene="https://prod.spline.design/wb47z7mtEN-uBLKY/scene.splinecode"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              )}
            </div>
          </div>
          {/* GitHub Statistics */}
          <div className="w-full md:w-1/2 space-y-4 mt-4 md:mt-0">
            <h3 className="text-lg sm:text-xl font-semibold text-white">GitHub Statistics</h3>
            <div className="space-y-3">
              {projectStats.map((stat, index) => (
                <div key={stat.name} className="flex items-center space-x-2">
                  <div className="w-8 h-8 flex items-center justify-center text-white bg-gray-700/50 rounded-full">
                    {stat.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs sm:text-sm text-gray-300">{stat.name}</span>
                      <span className="text-xs sm:text-sm font-medium text-white">{stat.value}</span>
                    </div>
                    <Bar 
                      value={stat.value} 
                      className="w-full h-2 rounded-full" 
                      style={{ 
                        '--bar-bg': 'rgba(255,255,255,0.1)', 
                        '--bar-color': COLORS[index % COLORS.length] 
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedInfographic;