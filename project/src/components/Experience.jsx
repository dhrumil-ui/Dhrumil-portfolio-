import React from 'react';
import { Calendar } from 'lucide-react';
import { experience } from '../data/resumeData';
import SectionTitle from './SectionTitle';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gradient-to-r from-slate-800 via-slate-800 to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Experience" subtitle="My Professional Journey" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experience.map((job, index) => (
            <div 
              key={index}
              className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full">
                    <div className="w-full h-full rounded-full bg-slate-800/90 flex items-center justify-center overflow-hidden">
                      <img 
                        src={job.logo} 
                        alt={job.company} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{job.position}</h3>
                  <h4 className="text-blue-300/90 font-medium">{job.company}</h4>
                </div>
              </div>
              
              <div className="flex items-center text-blue-200/70">
                <Calendar size={18} className="mr-2" />
                <span>{job.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;