import React from 'react';
import { Award } from 'lucide-react';
import { achievements } from '../data/resumeData';
import SectionTitle from './SectionTitle';

const Achievements = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Achievements" subtitle="Recognition & Awards" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;