import React from 'react';

// We import the sections that make up this page
import WhyChooseUs from '../sections/WhyChooseUs';
import Pricing from '../sections/Pricing';

const GetStartedPage = () => {
  return (
    <>
      {/* The "Why Us" section appears first */}
      <WhyChooseUs />
      {/* The "Pricing" section appears second */}
      <Pricing />
    </>
  );
};

export default GetStartedPage;
