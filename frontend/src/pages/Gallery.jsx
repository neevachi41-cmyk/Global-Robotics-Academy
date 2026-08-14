import React from 'react';
import Hero from '../components/Hero.jsx';
import Gallery from '../components/Gallery.jsx';
import TrainingLoop from '../components/TrainingLoop.jsx';
import Difference from '../components/Difference.jsx';
import Footer from '../components/Footer.jsx';

const GalleryPage = () => {
  return (
    <div className="page">
      <Hero />
      <TrainingLoop />
      <Gallery />
      <Difference />
      <Footer />
    </div>
  );
};

export default GalleryPage;