import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/resumeData';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-slate-800 via-slate-800 to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Projects" subtitle="My Notable Work" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-700/50 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-blue-400/40 transform hover:scale-105 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-200/70 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-300 hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-300 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;