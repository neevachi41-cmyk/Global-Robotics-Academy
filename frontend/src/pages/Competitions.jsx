import React from 'react';
import Hero from '../components/Hero.jsx';
import Competitions from '../components/Competitions.jsx';
import TrainingLoop from '../components/TrainingLoop.jsx';
import Difference from '../components/Difference.jsx';
import Footer from '../components/Footer.jsx';

const CompetitionsPage = () => {
  return (
    <div className="page">
      <Hero />
      <TrainingLoop />
      <Competitions />
      <Difference />
      <Footer />
    </div>
  );
};

export default CompetitionsPage;