import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data/skills';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      skillRefs.current.forEach((skill, index) => {
        gsap.fromTo(
          skill,
          { 
            opacity: 0,
            scale: 0.9,
            y: 30
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: skill,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Skills & <span className="text-blue-600">Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.technical.map((category, index) => (
            <div 
              key={category.category}
              ref={el => skillRefs.current[index] = el}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-600">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                        {skill}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out group-hover:opacity-80"
                        style={{ 
                          width: `${Math.floor(Math.random() * 30 + 70)}%`,
                          transition: 'width 1s ease-out'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-16 bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-lg"
          ref={el => skillRefs.current[skills.technical.length] = el}
        >
          <h3 className="text-xl font-semibold mb-6 text-blue-600">Soft Skills</h3>
          <div className="flex flex-wrap gap-4">
            {skills.soft.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;