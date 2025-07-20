import React, { useState } from 'react';

// Import layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import page/section components
import HeroSection from './components/sections/HeroSection';
import WhatWeDo from './components/sections/WhatWeDo';
import Testimonials from './components/sections/Testimonials';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import GetStartedPage from './components/pages/GetStartedPage'; // <-- New page component

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <WhatWeDo />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'get-started':
        return <GetStartedPage />; // <-- Render the new Get Started page
      case 'home':
      default:
        // The home page combines multiple sections
        return (
          <>
            <HeroSection navigateTo={navigateTo} />
            <WhatWeDo />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="bg-white font-sans">
      <Header navigateTo={navigateTo} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
