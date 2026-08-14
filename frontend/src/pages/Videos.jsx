import React from 'react';
import Hero from '../components/Hero.jsx';
import TrainingLoop from '../components/TrainingLoop.jsx';
import Difference from '../components/Difference.jsx';
import Footer from '../components/Footer.jsx';

const Videos = () => {
  return (
    <div className="page">
      <Hero />
      <TrainingLoop />
      <Difference />
      <Footer />
    </div>
  );
};

export default Videos;