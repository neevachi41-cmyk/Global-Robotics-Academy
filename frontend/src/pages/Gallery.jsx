import React from 'react';
import Hero from '../components/Hero.jsx';
import Gallery from '../components/Gallery.jsx';
import StatsBand from '../components/StatsBand.jsx';
import Difference from '../components/Difference.jsx';
import Footer from '../components/Footer.jsx';

const GalleryPage = () => {
  return (
    <div className="page">
      <Hero />
      <StatsBand />
      <Gallery />
      <Difference />
      <Footer />
    </div>
  );
};

export default GalleryPage;