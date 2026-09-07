import React from 'react';
import StatsSlideshow from './StatsSlideshow';

const MomentumStats = () => {
  return (
    <section 
      className="momentum-stats-section" 
      id="momentum"
      style={{
        backgroundColor: '#D0ECE1',
        padding: '100px 0'
      }}
    >
      <div className="wrap">
        <div className="momentum-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p className="eyebrow" style={{ color: '#0096B9', fontSize: '14px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>MEASURED IN MOMENTUM</p>
          <h2 style={{ color: '#12181c', fontSize: '56px', fontWeight: '700', margin: '0', lineHeight: '1.1' }}>WHERE STUDENTS<br/>BECOME COMPETITORS.</h2>
        </div>
        
        <div className="stats-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '60px' }}>
          <div className="stat-item" style={{ textAlign: 'center', padding: '36px 24px', background: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <div className="big-num" style={{ fontSize: '52px', fontWeight: '700', color: '#0096B9', marginBottom: '12px', lineHeight: '1' }}>5,000+</div>
            <div className="cap" style={{ fontSize: '15px', color: '#5a6067', fontWeight: '500', lineHeight: '1.4' }}>Students Trained</div>
          </div>
          <div className="stat-item" style={{ textAlign: 'center', padding: '36px 24px', background: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <div className="big-num" style={{ fontSize: '52px', fontWeight: '700', color: '#0096B9', marginBottom: '12px', lineHeight: '1' }}>20+</div>
            <div className="cap" style={{ fontSize: '15px', color: '#5a6067', fontWeight: '500', lineHeight: '1.4' }}>Robotics Teams Associated</div>
          </div>
          <div className="stat-item" style={{ textAlign: 'center', padding: '36px 24px', background: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <div className="big-num" style={{ fontSize: '52px', fontWeight: '700', color: '#0096B9', marginBottom: '12px', lineHeight: '1' }}>11+</div>
            <div className="cap" style={{ fontSize: '15px', color: '#5a6067', fontWeight: '500', lineHeight: '1.4' }}>Schools & Organisations</div>
          </div>
          <div className="stat-item" style={{ textAlign: 'center', padding: '36px 24px', background: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
            <div className="big-num" style={{ fontSize: '52px', fontWeight: '700', color: '#0096B9', marginBottom: '12px', lineHeight: '1' }}>100+</div>
            <div className="cap" style={{ fontSize: '15px', color: '#5a6067', fontWeight: '500', lineHeight: '1.4' }}>Competition Participations</div>
          </div>
        </div>

        <div className="slideshow-wrapper" style={{ display: 'flex', justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <div className="hero-card" style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }}>
            <StatsSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumStats;
