import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Projects
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;