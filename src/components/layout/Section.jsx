import React from 'react';

const Section = ({ children, className = '' }) => (
  <section className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

export default Section;