import React from 'react';

const Momentum = () => {
  return (
    <section className="momentum">
      <div className="wrap momentum-inner">
        <p className="eyebrow">Measured in Momentum</p>
        <h2>Where Students<br/><span className="accent">Become Competitors.</span></h2>
        <div className="momentum-stats">
          <div><div className="num">5,000+</div><div className="cap">Students Trained</div></div>
          <div><div className="num">Multiple</div><div className="cap">Robotics Teams</div></div>
          <div><div className="num">Multiple</div><div className="cap">Competition Pathways</div></div>
        </div>
        <div className="ghost-word">GRA</div>
      </div>
      <div className="partner-band" id="partners">
        <div className="wrap">
          <p className="eyebrow">For Schools &amp; Institutions</p>
          <h2>Build a Competition-Ready<br/><span className="teal">Robotics Culture.</span></h2>
          <a className="btn" href="#contact">Partner With Us ↗</a>
        </div>
      </div>
    </section>
  );
};

export default Momentum;