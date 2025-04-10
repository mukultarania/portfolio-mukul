import React from 'react';
import { motion } from 'framer-motion';
import { frameworks } from '../../data/skills';

const SkillMarquee = () => {
  return (
    <div className="relative overflow-hidden py-10 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div className="flex space-x-12 animate-marquee whitespace-nowrap">
        {[...frameworks, ...frameworks].map((framework, index) => (
          <motion.div
            key={`${framework}-${index}`}
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.1 }}
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
              {framework}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillMarquee;