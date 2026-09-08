import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from './Slideshow.jsx';

const Hero = () => {
  return (
    <section className="hero" id="about" style={{ minHeight: '100vh', maxHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 0' }}>
      {/* Background decoration */}
      <div className="bg-circle hero-circle-one"></div>
      <div className="bg-circle hero-circle-two"></div>
      
      <div className="wrap hero-grid" style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <div className="hero-content hero-intro">
          <div className="section-label" style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
            NATIONAL & INTERNATIONAL COMPETITION PREPARATION
            <span></span>
          </div>
          <h1 style={{ fontSize: '72px', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px' }}>From<br/>Classroom<br/><span className="orange">to<br/>Competition.</span></h1>
          <p className="lede" style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '32px' }}>Global Robotics Academy prepares students for national and international robotics, STEM, AI, coding, innovation and technology competitions.</p>
          <div className="hero-ctas">
            <Link className="btn" to="/login" style={{whiteSpace: 'nowrap'}}>Start Your Competition Journey↗</Link>
            <Link className="btn outline" to="/competitions" style={{whiteSpace: 'nowrap'}}>Explore Competitions</Link>
          </div>
        </div>
        <div className="hero-card" style={{ height: '500px' }}>
          <Slideshow />
        </div>
      </div>
    </section>
  );
};

export default Hero;