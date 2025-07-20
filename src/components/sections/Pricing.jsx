import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../layout/SectionTitle';

const Pricing = () => {
  const plans = [
    { name: "Bronze", price: "299", features: ["2-Page Website", "Mobile-Responsive", "Contact Form", "Basic SEO Setup", "1 Year Hosting"], popular: false },
    { name: "Silver", price: "599", features: ["3-Page Website", "CMS Integration", "Blog Setup", "Advanced SEO", "Priority Support", "1 Year Hosting"], popular: true },
    { name: "Gold", price: "999", features: ["4-Page Website", "Advanced Features", "eCommerce Ready", "Premium Support", "Advanced Analytics", "1 Year Hosting"], popular: false },
  ];
  
  const paymentLink = "https://square.link/u/PBCjyhKk";

  return (
    <Section id="pricing" className="bg-white">
      <SectionTitle>Simple, Transparent Pricing</SectionTitle>
      <div className="grid lg:grid-cols-3 gap-8 items-center">
        {plans.map((plan, index) => (
          <div key={index} className={`relative rounded-xl shadow-lg p-8 border-2 ${plan.popular ? 'border-blue-600 scale-105' : 'border-transparent'}`}>
            {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">MOST POPULAR</div>}
            <h3 className="text-2xl font-bold text-center text-gray-800">{plan.name}</h3>
            <p className="text-center my-4">
              <span className="text-5xl font-extrabold text-gray-900">${plan.price}</span>
              <span className="text-gray-500">/one-time</span>
            </p>
            <ul className="space-y-4 my-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <a 
              href={paymentLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Pricing;