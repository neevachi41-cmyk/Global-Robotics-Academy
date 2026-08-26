import React from 'react';

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
        <div className="top-row">
          <div className="left-content">
            <p className="eyebrow" style={{ color: '#0096B9' }}>MEASURED IN MOMENTUM</p>
            <h2 style={{ color: '#12181c' }}>WHERE STUDENTS<br/>BECOME COMPETITORS.</h2>
            <div className="stats-grid">
              <div>
                <div className="big-num" style={{ color: '#0096B9' }}>5,000+</div>
                <div className="cap" style={{ color: '#6b7178' }}>Students Trained</div>
              </div>
              <div>
                <div className="big-num" style={{ color: '#0096B9' }}>20+</div>
                <div className="cap" style={{ color: '#6b7178' }}>Robotics Teams Associated</div>
              </div>
              <div>
                <div className="big-num" style={{ color: '#0096B9' }}>11+</div>
                <div className="cap" style={{ color: '#6b7178' }}>Schools & Organisations</div>
              </div>
              <div>
                <div className="big-num" style={{ color: '#0096B9' }}>100+</div>
                <div className="cap" style={{ color: '#6b7178' }}>Competition Participations</div>
              </div>
              <div>
                <div className="big-num" style={{ color: '#0096B9' }}>3+</div>
                <div className="cap" style={{ color: '#6b7178' }}>International Stages (India Represents)</div>
              </div>
              <div>
                <div className="big-num" style={{ color: '#0096B9' }}>5+</div>
                <div className="cap" style={{ color: '#6b7178' }}>Industry Partners</div>
              </div>
            </div>
            <div className="bottom-branding">
              <h3 style={{ color: '#12181c' }}>GLOBAL ROBOTICS ACADEMY</h3>
              <p style={{ color: '#6b7178' }}>Innovate, Build, Compete, Represent.</p>
              <p className="tagline" style={{ color: '#0096B9' }}>Next Gen Tech Leaders.</p>
            </div>
          </div>
          <div className="right-illustration">
            <div className="illustration-container">
              <img 
                src="/Image 1.jpeg" 
                alt="Students becoming competitors - innovation, build, compete, represent"
                className="students-illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentumStats;
