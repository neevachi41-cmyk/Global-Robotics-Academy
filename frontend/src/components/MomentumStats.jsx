import React from 'react';

const MomentumStats = () => {
  return (
    <section className="momentum-stats-section" id="momentum" style={{ backgroundColor: '#4AA3D1' }}>
      <div className="wrap">
        <div className="top-row">
          <div>
            <p className="eyebrow" style={{ color: '#000000' }}>Measured in Momentum</p>
            <h2 style={{ color: '#000000' }}>Where Students<br/>Become Competitors.</h2>
          </div>
          <div className="stats-grid">
            <div>
              <div className="big-num" style={{ color: '#000000' }}>5,000+</div>
              <div className="cap" style={{ color: '#000000' }}>Students Trained</div>
            </div>
            <div>
              <div className="big-num" style={{ color: '#000000' }}>Multiple</div>
              <div className="cap" style={{ color: '#000000' }}>Robotics Teams</div>
            </div>
            <div>
              <div className="big-num" style={{ color: '#000000' }}>Multiple</div>
              <div className="cap" style={{ color: '#000000' }}>Competition Pathways</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumStats;
