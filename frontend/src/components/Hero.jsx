import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from './Slideshow.jsx';

const Hero = () => {
  return (
    <section className="hero" id="about">
      {/* Background decoration */}
      <div className="bg-circle hero-circle-one"></div>
      <div className="bg-circle hero-circle-two"></div>
      
      <div className="wrap hero-grid">
        <div className="hero-content hero-intro">
          <div className="section-label">
            NATIONAL & INTERNATIONAL COMPETITION PREPARATION
            <span></span>
          </div>
          <h1>From<br/>Classroom<br/><span className="orange">to<br/>Competition.</span></h1>
          <p className="lede">Global Robotics Academy prepares students for national and international robotics, STEM, AI, coding, innovation and technology competitions.</p>
          <div className="hero-ctas">
            <Link className="btn" to="/login">Start Your Competition Journey ↗</Link>
            <Link className="btn outline" to="/competitions">Explore Competitions</Link>
          </div>
        </div>
        <div className="hero-card">
          <Slideshow />
        </div>
      </div>
    </section>
  );
};

export default Hero;