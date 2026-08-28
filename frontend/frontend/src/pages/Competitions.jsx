import React from 'react';
import Competitions from '../components/Competitions.jsx';
import Footer from '../components/Footer.jsx';

const CompetitionsPage = () => {
  return (
    <div className="page">
      <Competitions showAllCompetitions={true} />
      <Footer />
    </div>
  );
};

export default CompetitionsPage;