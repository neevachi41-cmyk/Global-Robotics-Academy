import React from 'react';
import Hero from '../components/Hero.jsx';
import Contact from '../components/Contact.jsx';
import StatsBand from '../components/StatsBand.jsx';
import Difference from '../components/Difference.jsx';
import Footer from '../components/Footer.jsx';

const ContactPage = () => {
  return (
    <div className="page">
      <Hero />
      <StatsBand />
      <Contact />
      <Difference />
      <Footer />
    </div>
  );
};

export default ContactPage;