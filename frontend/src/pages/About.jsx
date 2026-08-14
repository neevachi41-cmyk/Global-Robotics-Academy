import React from 'react';
import Hero from '../components/Hero.jsx';
import Difference from '../components/Difference.jsx';
import Momentum from '../components/Momentum.jsx';
import TrainingLoop from '../components/TrainingLoop.jsx';
import Footer from '../components/Footer.jsx';

const About = () => {
  return (
    <div className="page">
      <Hero />
      <TrainingLoop />
      <Difference />
      <Momentum />
      <Footer />
    </div>
  );
};

export default About;