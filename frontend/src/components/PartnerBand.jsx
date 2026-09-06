import React from 'react';
import PartnerSlideshow from './PartnerSlideshow';

const PartnerBand = () => {
  return (
    <section className="partner-band" id="partners" style={{ backgroundColor: '#E3F2FD' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <div>
          <p className="eyebrow" style={{ color: '#0096B9' }}>For Schools &amp; Institutions</p>
          <h2 style={{ color: '#12181c' }}>Build a Competition-Ready<br/><span className="teal" style={{ color: '#0096B9' }}>Robotics Culture.</span></h2>
          <a className="btn" href="#contact" style={{ backgroundColor: '#0096B9', color: '#FFFFFF' }}>Partner With Us ↗</a>
        </div>
        <div className="hero-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '500px' }}>
          <PartnerSlideshow />
        </div>
      </div>
    </section>
  );
};

export default PartnerBand;