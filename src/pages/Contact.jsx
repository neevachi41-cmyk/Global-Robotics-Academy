import React from 'react';
import Hero from '../components/Hero.jsx';
import Contact from '../components/Contact.jsx';
import TrainingLoop from '../components/TrainingLoop.jsx';
import Difference from '../components/Difference.jsx';
import Footer from '../components/Footer.jsx';

const ContactPage = () => {
  return (
    <div className="page">
      <Hero />
      <TrainingLoop />
      <Contact />
      <Difference />
      <Footer />
    </div>
  );
};

export default ContactPage;