import React from 'react';
import Hero from '../components/Hero.jsx';
import Competitions from '../components/Competitions.jsx';
import StatsBand from '../components/StatsBand.jsx';
import Difference from '../components/Difference.jsx';
import Footer from '../components/Footer.jsx';

const CompetitionsPage = () => {
  return (
    <div className="page">
      <Hero />
      <StatsBand />
      <Competitions />
      <Difference />
      <Footer />
    </div>
  );
};

export default CompetitionsPage;