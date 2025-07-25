import React from 'react';
import Section from '../components/layout/Section';
import Card from '../components/layout/Card';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

// More detailed plans for the full page
const fullPlans = [
    { 
        name: 'Ignition', 
        fee: '$500', 
        monthly: '$40 / month', 
        features: ['Up to 5 Pages', 'Mobile Responsive Design', 'Basic SEO Setup', 'Contact Form', '1 Month Support'] 
    },
    { 
        name: 'Booster', 
        fee: '$700', 
        monthly: '$70 / month', 
        features: ['Up to 10 Pages', 'Advanced SEO', 'E-Commerce Ready', 'Content Management System (CMS)', '3 Months Support'] 
    },
    { 
        name: 'Orbit', 
        fee: '$900', 
        monthly: '$100 / month', 
        features: ['Unlimited Pages', 'Full SEO & Marketing Suite', 'Custom Web Application', 'Dedicated Project Manager', 'Ongoing Support'] 
    },
];

const PricingPage = () => {
  return (
    <Section id="full-pricing">
        <div className="section-header" style={{ paddingTop: '5rem' }}>
            <div className="section-header-title">
                <h2>Our Mission Plans</h2>
            </div>
            <div className="section-header-subtitle">
                <p>We offer flexible and transparent plans designed to meet your business needs at any stage of growth. Find the perfect trajectory for your project.</p>
            </div>
        </div>
        <motion.div 
            className="card-grid"
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.2 } }
            }}
        >
            {fullPlans.map(plan => (
                <Card key={plan.name} title={plan.name}>
                    <div className="price-details">
                        <div className="price-item">
                            <span className="price-label">One-Time Fee</span>
                            <span className="price-value">{plan.fee}</span>
                        </div>
                        <div className="price-item">
                            <span className="price-label">Maintenance</span>
                            <span className="price-value">{plan.monthly}</span>
                        </div>
                    </div>
                    <ul className="pricing-card-features">
                        {plan.features.map(feature => (
                            <li key={feature}><FaCheckCircle /> {feature}</li>
                        ))}
                    </ul>
                    <button className="btn btn-primary">
                        Select Plan
                    </button>
                </Card>
            ))}
        </motion.div>
    </Section>
  );
};

export default PricingPage;