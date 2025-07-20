import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Section from '../layout/Section';
import SectionTitle from '../layout/SectionTitle';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        // Simulate form submission
        setTimeout(() => {
            setStatus('Your message has been sent!');
            e.target.reset();
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

  return (
    <Section id="contact" className="bg-blue-50">
      <SectionTitle>Get in Touch</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <textarea placeholder="Your Message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Submit
              </button>
              {status && <p className="text-center text-gray-600 mt-4">{status}</p>}
            </div>
          </form>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Contact Information</h3>
          <p className="text-gray-600 text-lg">
            Ready to start your project? Give us a call, send an email, or fill out the form. We're excited to hear from you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <Mail className="w-6 h-6 mr-4 text-blue-600"/>
              {/* Updated Email */}
              <span>launchsitesco@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Phone className="w-6 h-6 mr-4 text-blue-600"/>
              {/* Updated Phone Number */}
              <span>(332) 877-7501</span>
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin className="w-6 h-6 mr-4 text-blue-600"/>
              <span>123 Innovation Drive, Tech City, USA</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
