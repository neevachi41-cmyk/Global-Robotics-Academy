import React from 'react';
import TeamSection from '../components/TeamSection.jsx';
import Footer from '../components/Footer.jsx';

const TeamsPage = () => {
  return (
    <div className="page">
      <TeamSection showAll={true} />
      <Footer />
    </div>
  );
};

export default TeamsPage;