import React from 'react';
import Hero from '../components/Hero.jsx';
import Difference from '../components/Difference.jsx';
import Momentum from '../components/Momentum.jsx';
import StatsBand from '../components/StatsBand.jsx';
import Footer from '../components/Footer.jsx';

const About = () => {
  return (
    <div className="page">
      <Hero />
      <StatsBand />
      <Difference />
      <Momentum />
      <Footer />
    </div>
  );
};

export default About;