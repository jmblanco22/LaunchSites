import React from 'react';
import { Code, Briefcase, Zap } from 'lucide-react';
import Section from '../layout/Section';
import SectionTitle from '../layout/SectionTitle';
import Card from '../layout/Card';

const WhatWeDo = () => {
  const services = [
    { icon: <Code size={40} className="text-blue-600"/>, title: "Website Design", description: "Stunning, modern designs that capture your brand's essence and engage your audience." },
    { icon: <Briefcase size={40} className="text-blue-600"/>, title: "eCommerce Solutions", description: "Robust online stores to sell your products and services securely and efficiently." },
    { icon: <Zap size={40} className="text-blue-600"/>, title: "Hosting & Maintenance", description: "Reliable, fast hosting and ongoing maintenance to keep your site running smoothly." },
  ];

  return (
    <Section id="services" className="bg-white">
      <SectionTitle>What We Do</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default WhatWeDo;