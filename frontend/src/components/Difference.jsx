import React from 'react';

const Difference = () => {
  return (
    <section className="difference">
      <div className="wrap diff-grid">
        <div>
          <p className="eyebrow">The GRA Difference</p>
          <h2>Train<br/>With<br/><span className="orange">Intent.</span></h2>
          <p className="lede">Don't just learn robotics. Train to compete.</p>
        </div>
        <div className="diff-cards">
          <div className="diff-card">
            <div className="n">01</div>
            <h4>Competition-Focused Training</h4>
            <p>Real challenges, rules, strategy and performance.</p>
            <a href="/competitions" className="arrow">explore</a>
          </div>
          <div className="diff-card">
            <div className="n">02</div>
            <h4>5,000+ Students Trained</h4>
            <p>Experience developed through robotics and STEM education.</p>
            <a href="/impact" className="arrow">explore</a>
          </div>
          <div className="diff-card">
            <div className="n">03</div>
            <h4>Real Robot Building</h4>
            <p>Design, assemble, program, test and improve.</p>
            <a href="/programs" className="arrow">explore</a>
          </div>
          <div className="diff-card">
            <div className="n">04</div>
            <h4>Team Development</h4>
            <p>Form and develop competition-ready teams.</p>
            <a href="/teams" className="arrow">explore</a>
          </div>
          <div className="diff-card">
            <div className="n">05</div>
            <h4>National &amp; International Exposure</h4>
            <p>Prepare for opportunities beyond the classroom.</p>
            <a href="/competitions" className="arrow">explore</a>
          </div>
          <div className="diff-card">
            <div className="n">06</div>
            <h4>School Partnerships</h4>
            <p>Build long-term robotics ecosystems.</p>
            <a href="/partners" className="arrow">explore</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;