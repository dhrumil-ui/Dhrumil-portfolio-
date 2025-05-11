import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/resumeData';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
          <p className="text-gray-400 mb-6">{personalInfo.title} in {personalInfo.specialization}</p>
          
          <SocialLinks links={socialLinks} />
          
          <div className="mt-8 text-gray-400 text-center">
            <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
            
          </div>
          
          <a 
            href="#home" 
            className="mt-8 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;