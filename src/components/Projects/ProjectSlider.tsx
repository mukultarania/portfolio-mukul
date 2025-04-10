import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import type { Project } from '../../types/project';

interface ProjectSliderProps {
  onOpenModal: (project: Project) => void;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ onOpenModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2 >= projects.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? projects.length - 2 : prev - 2));
  };

  return (
    <div className="relative px-20">
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
          aria-label="Previous projects"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.slice(currentIndex, currentIndex + 2).map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      
      {currentIndex + 2 < projects.length && (
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
          aria-label="Next projects"
        >
          <ChevronRight size={24} />
        </button>
      )}
      
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx * 2)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex / 2 ? 'bg-blue-600 w-4' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;