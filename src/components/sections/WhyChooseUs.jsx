import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../layout/SectionTitle';
import Card from '../layout/Card';

const WhyChooseUs = () => {
    const benefits = [
        { title: "Affordable Pricing", description: "Get a professional website without breaking the bank. Transparent, fair pricing for small businesses.", icon: "💰" },
        { title: "Fast Turnaround", description: "We work efficiently to get your website live quickly, so you can start seeing results sooner.", icon: "🚀" },
        { title: "Responsive Design", description: "Your site will look and work perfectly on all devices—desktops, tablets, and smartphones.", icon: "📱" },
        { title: "Local Support", description: "Friendly, dedicated support from our team. We're here to help you succeed online.", icon: "🤝" },
    ];

    return (
        <Section id="why-us" className="bg-blue-50">
            <SectionTitle>Why Choose LaunchSites?</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <Card key={index} className="text-center">
                        <div className="text-4xl mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default WhyChooseUs;