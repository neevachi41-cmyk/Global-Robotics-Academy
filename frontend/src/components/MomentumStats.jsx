import React from 'react';

const MomentumStats = () => {
  return (
    <section className="momentum-stats-section" id="momentum" style={{ backgroundColor: '#E3F2FD' }}>
      <div className="wrap">
        <div className="top-row">
          <div>
            <p className="eyebrow" style={{ color: '#0096B9' }}>Measured in Momentum</p>
            <h2 style={{ color: '#12181c' }}>Where Students<br/>Become Competitors.</h2>
          </div>
          <div className="stats-grid">
            <div>
              <div className="big-num" style={{ color: '#12181c' }}>5,000+</div>
              <div className="cap" style={{ color: '#6b7178' }}>Students Trained</div>
            </div>
            <div>
              <div className="big-num" style={{ color: '#12181c' }}>Multiple</div>
              <div className="cap" style={{ color: '#6b7178' }}>Robotics Teams</div>
            </div>
            <div>
              <div className="big-num" style={{ color: '#12181c' }}>Multiple</div>
              <div className="cap" style={{ color: '#6b7178' }}>Competition Pathways</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumStats;
