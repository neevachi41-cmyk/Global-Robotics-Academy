import React from 'react';
import StatsSlideshow from './StatsSlideshow';

const MomentumStats = () => {
  return (
    <section 
      className="momentum-stats-section" 
      id="momentum"
      style={{
        backgroundColor: '#D0ECE1',
        padding: '80px 0'
      }}
    >
      <div className="wrap">
        <div className="momentum-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p className="eyebrow" style={{ color: '#0096B9', fontSize: '14px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>MEASURED IN MOMENTUM</p>
          <h2 style={{ color: '#12181c', fontSize: '48px', fontWeight: '700', margin: '0', lineHeight: '1.2' }}>WHERE STUDENTS<br/>BECOME COMPETITORS.</h2>
        </div>
        
        <div className="stats-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginBottom: '50px' }}>
          <div className="stat-item" style={{ textAlign: 'center', padding: '30px 20px', background: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}>
            <div className="big-num" style={{ fontSize: '48px', fontWeight: '700', color: '#0096B9', marginBottom: '8px' }}>5,000+</div>
            <div className="cap" style={{ fontSize: '16px', color: '#5a6067', fontWeight: '500' }}>Students Trained</div>
          </div>
          <div className="stat-item" style={{ textAlign: 'center', padding: '30px 20px', background: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}>
            <div className="big-num" style={{ fontSize: '48px', fontWeight: '700', color: '#0096B9', marginBottom: '8px' }}>20+</div>
            <div className="cap" style={{ fontSize: '16px', color: '#5a6067', fontWeight: '500' }}>Robotics Teams Associated</div>
          </div>
          <div className="stat-item" style={{ textAlign: 'center', padding: '30px 20px', background: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}>
            <div className="big-num" style={{ fontSize: '48px', fontWeight: '700', color: '#0096B9', marginBottom: '8px' }}>11+</div>
            <div className="cap" style={{ fontSize: '16px', color: '#5a6067', fontWeight: '500' }}>Schools & Organisations</div>
          </div>
          <div className="stat-item" style={{ textAlign: 'center', padding: '30px 20px', background: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}>
            <div className="big-num" style={{ fontSize: '48px', fontWeight: '700', color: '#0096B9', marginBottom: '8px' }}>100+</div>
            <div className="cap" style={{ fontSize: '16px', color: '#5a6067', fontWeight: '500' }}>Competition Participations</div>
          </div>
        </div>

        <div className="slideshow-wrapper" style={{ display: 'flex', justifyContent: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <div className="hero-card" style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <StatsSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumStats;
