import React from 'react';
import Section from '../layout/Section';
import SectionTitle from '../layout/SectionTitle';

const Contact = () => {
  return (
    <Section id="contact">
      <SectionTitle
        title="Get Started on Your Mission"
        subtitle="Ready to launch? Send us a message, and let's chart the course for your new website."
      />
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn btn-primary">
          Transmit Message
        </button>
      </form>
    </Section>
  );
};

export default Contact;