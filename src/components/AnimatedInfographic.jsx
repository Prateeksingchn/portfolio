import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
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
  return (
    <motion.div
      className="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-between items-start rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-[#04040475] dark:bg-secondary shadow-xl dark:shadow-thick"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full ">
        <h2 className="text-3xl font-bold text-white mb-2">GitHub Insights</h2>
        <div className='flex gap-4'>
        <div className='w-1/2'>
          <p className="text-gray-400 mb-4">A snapshot of my development journey and impact</p>
          <div className="h-64 w-full mx-auto overflow-hidden rounded-3xl">
            <div className="transform scale-[0.5] origin-top-left w-[200%] h-[200%]">
              <Spline scene="https://prod.spline.design/wb47z7mtEN-uBLKY/scene.splinecode" />
            </div>
          </div>
        </div>
        {/* GitHub Statistics */}
        <div className="w-1/2 space-y-1">
          <h3 className="text-lg font-semibold text-white">GitHub Statistics</h3>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectStats} layout="horizontal">
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                <YAxis type="number" hide />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '0.5rem' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {projectStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedInfographic;