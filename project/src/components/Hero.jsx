import React from 'react';
import { ArrowDown, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/resumeData';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Profile Photo */}
          <div className="w-full md:w-2/5 flex justify-center animate-fade-in-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
          
          {/* Info */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <div className="animate-fade-in-up animation-delay-100">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-600 font-medium mb-4">
                {personalInfo.title} in {personalInfo.specialization}
              </h2>
            </div>
            
            <div className="animate-fade-in-up animation-delay-200">
              <p className="text-gray-600 text-lg mb-6 max-w-2xl">
                {personalInfo.summary}
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in-up animation-delay-300">
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <MapPin size={18} className="text-blue-600" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <Mail size={18} className="text-blue-600" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                <Phone size={18} className="text-blue-600" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-600 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-400">
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a 
            href="#experience" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <ArrowDown size={20} className="text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;