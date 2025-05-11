import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-blue-600 text-lg">{subtitle}</p>
      <div className="mx-auto w-24 h-1 bg-blue-600 mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;