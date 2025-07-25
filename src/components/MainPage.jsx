import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import WhatWeDoSection from './sections/WhatWeDoSection';
import PortfolioSection from './sections/PortfolioSection';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import ContactSection from './sections/ContactSection';
import Footer from './layout/Footer';

// Animation variants for each section
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};
const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};
const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
};
const rotateIn = {
  hidden: { opacity: 0, rotate: -10, scale: 0.95 },
  visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
};

const MainPage = ({ navigateTo }) => (
  <div style={{ overflowX: 'hidden' }}>
    <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      <HeroSection navigateTo={navigateTo} />
    </motion.div>

    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeLeft}>
      <WhatWeDoSection />
    </motion.div>

    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={scaleIn}>
      <WhyChooseUsSection />
    </motion.div>

    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
      <PortfolioSection />
    </motion.div>

    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={rotateIn}>
      <PricingSection />
    </motion.div>

    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
      <TestimonialsSection />
    </motion.div>

    <motion.div initial="hidden" animate="visible" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
      <ContactSection />
    </motion.div>

    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Footer />
    </motion.div>
  </div>
);

export default MainPage;