import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from './Slideshow.jsx';

const Hero = () => {
  return (
    <section className="hero" id="about" style={{ minHeight: '100vh', maxHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 0' }}>
      {/* Background decoration */}
      <div className="bg-circle hero-circle-one"></div>
      <div className="bg-circle hero-circle-two"></div>
      
      <div className="wrap hero-grid" style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(30px, 5vw, 60px)', alignItems: 'center' }}>
        <div className="hero-content hero-intro">
          <div className="section-label" style={{ fontSize: 'var(--font-size-xs)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'clamp(16px, 2vw, 20px)', color: '#0096B9' }}>
            NATIONAL & INTERNATIONAL COMPETITION PREPARATION
            <span></span>
          </div>
          <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: '800', lineHeight: '1.1', marginBottom: 'clamp(16px, 2.5vw, 24px)', color: '#12181c' }}>From<br/>Classroom<br/><span className="orange" style={{ color: '#0096B9' }}>to<br/>Competition.</span></h1>
          <p className="lede" style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', marginBottom: 'clamp(20px, 3vw, 32px)', color: '#5a6067' }}>Global Robotics Academy prepares students for national and international robotics, STEM, AI, coding, innovation and technology competitions.</p>
          <div className="hero-ctas">
            <Link className="btn" to="/login" style={{whiteSpace: 'nowrap'}}>Start Your Competition Journey↗</Link>
            <Link className="btn outline" to="/competitions" style={{whiteSpace: 'nowrap'}}>Explore Competitions</Link>
          </div>
        </div>
        <div className="hero-card" style={{ height: 'clamp(300px, 40vh, 500px)' }}>
          <Slideshow />
        </div>
      </div>
    </section>
  );
};

export default Hero;