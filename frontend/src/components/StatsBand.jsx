import React from 'react';

const StatsBand = () => {
  return (
    <section className="statsband" id="impact">
      <div className="wrap">
        <div className="top-row">
          <div>
            <div className="big-num">5,000+</div>
            <div className="cap">Students Trained</div>
          </div>
          <div className="scroll-hint">Scroll to Enter the Arena ↓</div>
        </div>
      </div>
      <div className="wrap loop-block">
        <p className="eyebrow">The Training Loop</p>
        <h2>Robotics is more<br/>than a class.</h2>
        <p className="lede">Learning robotics is only the beginning. At Global Robotics Academy, students move beyond classroom projects and train for real competition environments where engineering, programming, teamwork, strategy, problem-solving and innovation come together.</p>
        <div className="loop-steps">
          <div className="loop-step"><div className="n">01</div><div className="t">Learn</div></div>
          <div className="loop-step"><div className="n">02</div><div className="t">Build</div></div>
          <div className="loop-step"><div className="n">03</div><div className="t">Program</div></div>
          <div className="loop-step"><div className="n">04</div><div className="t">Test</div></div>
          <div className="loop-step"><div className="n">05</div><div className="t">Optimize</div></div>
          <div className="loop-step"><div className="n">06</div><div className="t">Compete</div></div>
          <div className="loop-step"><div className="n">07</div><div className="t">Qualify</div></div>
          <div className="loop-step"><div className="n">08</div><div className="t">Go Global</div></div>
        </div>
      </div>
    </section>
  );
};

export default StatsBand;