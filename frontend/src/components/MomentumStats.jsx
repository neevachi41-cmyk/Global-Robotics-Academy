import React from 'react';

const MomentumStats = () => {
  return (
    <section 
      className="momentum-stats-section" 
      id="momentum"
      style={{
        backgroundImage: 'linear-gradient(rgba(18, 24, 28, 0.85), rgba(18, 24, 28, 0.75)), url("https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor: '#12181c'
      }}
    >
      <div className="wrap">
        <div className="top-row">
          <div>
            <p className="eyebrow" style={{ color: '#00FFFF' }}>Measured in Momentum</p>
            <h2 style={{ color: '#ffffff' }}>Where Students<br/>Become Competitors.</h2>
          </div>
          <div className="stats-grid">
            <div>
              <div className="big-num" style={{ color: '#00FFFF' }}>5,000+</div>
              <div className="cap" style={{ color: '#f7f6f2' }}>Students Trained</div>
            </div>
            <div>
              <div className="big-num" style={{ color: '#00FFFF' }}>Multiple</div>
              <div className="cap" style={{ color: '#f7f6f2' }}>Robotics Teams</div>
            </div>
            <div>
              <div className="big-num" style={{ color: '#00FFFF' }}>Multiple</div>
              <div className="cap" style={{ color: '#f7f6f2' }}>Competition Pathways</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumStats;
