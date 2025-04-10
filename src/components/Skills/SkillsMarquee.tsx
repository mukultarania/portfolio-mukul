import React from 'react';
import { motion } from 'framer-motion';
import { frameworks } from '../../data/skills';

const SkillsMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-10 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
      <div className="flex space-x-8 animate-marquee whitespace-nowrap">
        {[...frameworks, ...frameworks].map((framework, index) => (
          <motion.span
            key={`${framework}-${index}`}
            className="text-lg font-medium text-gray-600 dark:text-gray-400"
            whileHover={{ scale: 1.1, color: '#3B82F6' }}
          >
            {framework}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;