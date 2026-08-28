import React from 'react';
import { useNavigate } from 'react-router-dom';

const Difference = () => {
  const navigate = useNavigate();

  const handleSeeMore = (path) => {
    navigate(path);
  };

  return (
    <section className="difference">
      <div className="wrap diff-grid">
        <div>
          <p className="eyebrow">The GRA Difference</p>
          <h2>Train<br/>With<br/><span className="orange">Intent.</span></h2>
          <p className="lede">Don't just learn robotics. Train to compete.</p>
          <button className="btn" onClick={() => handleSeeMore('/impact')}>Our Impact ↗</button>
        </div>
        <div className="diff-cards">
          <div className="diff-card">
            <div className="n">01</div>
            <h4>Competition-Focused Training</h4>
            <p>Real challenges, rules, strategy and performance.</p>
            <span className="arrow" onClick={() => handleSeeMore('/programs')}>see more</span>
          </div>
          <div className="diff-card">
            <div className="n">02</div>
            <h4>Real Robot Building</h4>
            <p>Design, assemble, program, test and improve.</p>
            <span className="arrow" onClick={() => handleSeeMore('/programs')}>see more</span>
          </div>
          <div className="diff-card">
            <div className="n">03</div>
            <h4>Team Development</h4>
            <p>Form and develop competition-ready teams.</p>
            <span className="arrow" onClick={() => handleSeeMore('/teams')}>see more</span>
          </div>
          <div className="diff-card">
            <div className="n">04</div>
            <h4>National &amp; International Exposure</h4>
            <p>Prepare for opportunities beyond the classroom.</p>
            <span className="arrow" onClick={() => handleSeeMore('/competitions')}>see more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;