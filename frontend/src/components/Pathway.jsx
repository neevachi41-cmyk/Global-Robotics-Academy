import React, { useEffect, useState } from 'react';
import { programsAPI } from '../services/api';

const Pathway = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await programsAPI.getAll();
      setPrograms(response.data);
    } catch (error) {
      console.error('Error fetching programs:', error);
      // Fallback to static data if API fails
      setPrograms([
        { name: 'Drone Competition Preparation', description: 'Structured preparation from foundations to competition readiness.' },
        { name: 'Innovation Challenge Preparation', description: 'Structured preparation from foundations to competition readiness.' },
        { name: 'Coding Competition Preparation', description: 'Structured preparation from foundations to competition readiness.' },
        { name: 'STEM Competition Preparation', description: 'Structured preparation from foundations to competition readiness.' },
        { name: 'AI Competition Preparation', description: 'Structured preparation from foundations to competition readiness.' },
        { name: 'Robotics Competition Preparation', description: 'Structured preparation from foundations to competition readiness.' },
      ]);
    }
  };

  return (
    <section className="pathway" id="programs">
      <div className="wrap">
        <p className="eyebrow">The Pathway</p>
        <h2>From Beginner to<br/>Competition-Ready.</h2>
        <div className="path-grid">
          <div className="path-cell">
            <div className="n">01</div>
            <h4>Foundation</h4>
            <p>Electronics · Programming · Sensors · Motors</p>
            <div className="rule"></div>
          </div>
          <div className="path-cell">
            <div className="n">02</div>
            <h4>Build</h4>
            <p>Robot design · Mechanical assembly · Circuit integration</p>
            <div className="rule"></div>
          </div>
          <div className="path-cell">
            <div className="n">03</div>
            <h4>Program</h4>
            <p>Arduino · Embedded systems · Algorithms · AI</p>
            <div className="rule"></div>
          </div>
          <div className="path-cell">
            <div className="n">04</div>
            <h4>Test</h4>
            <p>Debugging · Speed · Accuracy · Reliability</p>
            <div className="rule"></div>
          </div>
          <div className="path-cell">
            <div className="n">05</div>
            <h4>Compete</h4>
            <p>Mock arenas · Strategy · Team roles · Rules</p>
            <div className="rule"></div>
          </div>
          <div className="path-cell">
            <div className="n">06</div>
            <h4>Represent</h4>
            <p>Regional · National · International opportunities</p>
            <div className="rule"></div>
          </div>
        </div>

        <div className="program-list">
          {programs.map((program, index) => (
            <div className="program-row" key={index}>
              <div className="n">Program 0{index + 1}</div>
              <h4>{program.name}</h4>
              <div className="desc">{program.description}</div>
              <div className="arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pathway;