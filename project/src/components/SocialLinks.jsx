import React from 'react';
import * as LucideIcons from 'lucide-react';

const SocialLinks = ({ links }) => {
  return (
    <div className="flex items-center justify-center md:justify-start space-x-4">
      {links.map((link) => {
        const Icon = LucideIcons[link.icon];
        
        return (
          <a 
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label={link.name}
          >
            {Icon && <Icon size={20} />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;