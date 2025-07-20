import React from 'react';

const SectionTitle = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;