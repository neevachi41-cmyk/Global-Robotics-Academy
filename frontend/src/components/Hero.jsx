import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">National &amp; International Competition Preparation</p>
          <h1>From<br/>Classroom<br/><span className="orange">to<br/>Competition.</span></h1>
          <p className="lede">Global Robotics Academy prepares students for national and international robotics, STEM, AI, coding, innovation and technology competitions.</p>
          <div className="hero-ctas">
            <a className="btn" href="#contact">Start Your Competition Journey ↗</a>
            <a className="btn outline" href="#competitions">Explore Competitions</a>
          </div>
          <div className="tickers">
            <span>Robotics</span><span>AI</span><span>STEM</span><span>Coding</span><span>Innovation</span>
          </div>
        </div>
        <div className="hero-card">
          <div className="diamond-wrap">
            <div className="ring"></div>
            <h3 className="arena-text">build systems that enter the arena</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;