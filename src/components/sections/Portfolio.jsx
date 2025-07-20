import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../layout/SectionTitle';

const Portfolio = () => {
  const projects = [
    { title: "Artisan Coffee House", category: "Cafe & Restaurant", image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=Artisan+Coffee" },
    { title: "Modern Real Estate", category: "Real Estate", image: "https://placehold.co/600x400/10B981/FFFFFF?text=Modern+Homes" },
    { title: "Urban Fitness Gym", category: "Health & Wellness", image: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Urban+Fitness" },
    { title: "Smith Legal Services", category: "Professional Services", image: "https://placehold.co/600x400/6366F1/FFFFFF?text=Smith+Legal" },
  ];

  return (
    <Section id="portfolio" className="bg-blue-50">
      <SectionTitle>Our Recent Work</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group rounded-xl overflow-hidden shadow-lg">
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-center text-white p-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-lg">{project.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;