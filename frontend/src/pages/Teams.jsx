import React from 'react';
import Hero from '../components/Hero.jsx';
import Teams from '../components/Teams.jsx';
import StatsBand from '../components/StatsBand.jsx';
import Difference from '../components/Difference.jsx';
import Footer from '../components/Footer.jsx';

const TeamsPage = () => {
  return (
    <div className="page">
      <Hero />
      <StatsBand />
      <Teams />
      <Difference />
      <Footer />
    </div>
  );
};

export default TeamsPage;