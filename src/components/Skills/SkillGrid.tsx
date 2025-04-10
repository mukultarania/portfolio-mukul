import React from 'react';
import { motion } from 'framer-motion';
import { mainSkills } from '../../data/skills';

const SkillGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {mainSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center space-y-4"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-32 h-32 rounded-full bg-gray-900 dark:bg-gray-800 flex items-center justify-center shadow-lg relative group cursor-pointer"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="text-3xl text-cyan-400 font-mono">{skill.icon}</span>
          </motion.div>
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillGrid;