import React from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import type { Project } from '../../types/project';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-gray-700/90 hover:bg-white dark:hover:bg-gray-700 transition-colors z-10"
        >
          <X size={24} className="text-gray-900 dark:text-white" />
        </button>
        
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
            <p className="text-gray-500 dark:text-gray-400">{project.date}</p>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">{project.description}</p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href={project.link}
              className="flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} className="mr-2" />
              View Source
            </a>
            {project.appLink && (
              <a 
                href={project.appLink}
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} className="mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;