import React from 'react';
import Hero from '../components/Hero.jsx';
import StatsBand from '../components/StatsBand.jsx';
import Difference from '../components/Difference.jsx';
import Footer from '../components/Footer.jsx';

const Videos = () => {
  return (
    <div className="page">
      <Hero />
      <StatsBand />
      <Difference />
      <Footer />
    </div>
  );
};

export default Videos;