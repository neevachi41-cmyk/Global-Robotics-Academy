import React from 'react';
import StatsSlideshow from './StatsSlideshow';

const MomentumStats = () => {
  return (
    <section 
      className="momentum-stats-section" 
      id="momentum"
      style={{
        backgroundColor: '#D0ECE1'
      }}
    >
      <div className="wrap">
        <div className="top-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '60px' }}>
          <div className="left-content" style={{ flex: 1 }}>
            <p className="eyebrow" style={{ color: '#0096B9' }}>MEASURED IN MOMENTUM</p>
            <h2 style={{ color: '#12181c' }}>WHERE STUDENTS<br/>BECOME COMPETITORS.</h2>
            <div className="stats-grid">
              <div className="stat-box">
                <div className="big-num">5,000+</div>
                <div className="cap">Students Trained</div>
              </div>
              <div className="stat-box">
                <div className="big-num">20+</div>
                <div className="cap">Robotics Teams Associated</div>
              </div>
              <div className="stat-box">
                <div className="big-num">11+</div>
                <div className="cap">Schools & Organisations</div>
              </div>
              <div className="stat-box">
                <div className="big-num">100+</div>
                <div className="cap">Competition Participations</div>
              </div>
            </div>
          </div>
          <div className="right-illustration hero-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: '700px' }}>
            <StatsSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumStats;
