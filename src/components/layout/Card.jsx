import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out ${className}`}>
    <div className="p-6 md:p-8">{children}</div>
  </div>
);

export default Card;