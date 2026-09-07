import React from 'react';

const TrainingLoop = () => {
  return (
    <section className="statsband" id="impact">
      <div className="wrap loop-grid">
        <div>
          <p className="eyebrow" style={{ color: '#0096B9' }}>The Training Loop</p>
          <h2>Robotics is more<br/>than a class.</h2>
          <p className="lede">At Global Robotics Academy, students move beyond classroom projects and train for real competition environments where engineering, programming, teamwork, strategy, problem-solving and innovation come together.</p>
        </div>
        <div className="loop-steps">
          <div className="loop-step"><div className="t">Learn</div></div>
          <div className="loop-step"><div className="t">Build</div></div>
          <div className="loop-step"><div className="t">Program</div></div>
          <div className="loop-step"><div className="t">Test</div></div>
          <div className="loop-step"><div className="t">Optimize</div></div>
          <div className="loop-step"><div className="t">Compete</div></div>
          <div className="loop-step"><div className="t">Qualify</div></div>
          <div className="loop-step"><div className="t">Go Global</div></div>
        </div>
      </div>
    </section>
  );
};

export default TrainingLoop;