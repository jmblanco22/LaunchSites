import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../layout/SectionTitle';
import Card from '../layout/Card';

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah L.", company: "The Local Bakery", quote: "LaunchSites made the process so simple! Our new website has brought in so many new customers. I couldn't be happier.", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=SL" },
    { name: "Mike R.", company: "Mike's Plumbing", quote: "The team was professional, fast, and affordable. They understood exactly what my business needed. Highly recommended!", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=MR" },
    { name: "Jessica P.", company: "Creative Blooms", quote: "Our online store is beautiful and easy to manage. Sales have increased by 40% since we launched with them!", avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=JP" },
  ];

  return (
    <Section id="testimonials" className="bg-white">
      <SectionTitle>Trusted by Small Businesses</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;