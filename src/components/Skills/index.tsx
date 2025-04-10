import React from 'react';
import { motion } from 'framer-motion';
import SkillGrid from './SkillGrid';
import SkillMarquee from './SkillMarquee';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Core technologies I specialize in
          </p>
        </motion.div>

        <SkillGrid />
        
        <div className="mt-20">
          <SkillMarquee />
        </div>
      </div>
    </section>
  );
};

export default Skills;