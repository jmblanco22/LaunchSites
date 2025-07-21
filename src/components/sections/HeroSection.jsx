import React from 'react';
import Section from '../layout/Section';

const HeroSection = ({ navigateTo }) => (
  <Section id="home" className="relative bg-blue-50 min-h-screen flex items-center justify-center pt-20">
    <div className="absolute inset-0 bg-grid-blue-100 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
    <div className="relative text-center z-10 p-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        <span className="block">Powerful Websites Built for</span>
        <span className="block text-blue-600">Small Businesses.</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
        Launch your business online today with an affordable, high-quality website designed to attract customers and grow your brand.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        {/* "Get Started" now navigates to the 'get-started' page */}
        <button onClick={() => navigateTo('get-started')} className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
          Get Started
        </button>
        <button onClick={() => navigateTo('contact')} className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
          Book a Demo
        </button>
      </div>
    </div>
  </Section>
);

export default HeroSection;
