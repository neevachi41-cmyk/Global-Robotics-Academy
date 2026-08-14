import React from 'react';

const MomentumStats = () => {
  return (
    <section className="momentum-stats-section" id="momentum" style={{ backgroundColor: '#E8F5E9' }}>
      <div className="wrap">
        <div className="top-row">
          <div>
            <p className="eyebrow" style={{ color: '#0096B9' }}>Measured in Momentum</p>
            <h2>Where Students<br/>Become Competitors.</h2>
          </div>
          <div className="stats-grid">
            <div>
              <div className="big-num">5,000+</div>
              <div className="cap">Students Trained</div>
            </div>
            <div>
              <div className="big-num">Multiple</div>
              <div className="cap">Robotics Teams</div>
            </div>
            <div>
              <div className="big-num">Multiple</div>
              <div className="cap">Competition Pathways</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumStats;
