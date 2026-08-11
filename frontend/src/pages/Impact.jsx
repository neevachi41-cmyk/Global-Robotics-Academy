import React from 'react';
import Hero from '../components/Hero.jsx';
import StatsBand from '../components/StatsBand.jsx';
import Momentum from '../components/Momentum.jsx';
import Difference from '../components/Difference.jsx';
import Footer from '../components/Footer.jsx';

const Impact = () => {
  return (
    <div className="page">
      <Hero />
      <StatsBand />
      <Momentum />
      <Difference />
      <Footer />
    </div>
  );
};

export default Impact;