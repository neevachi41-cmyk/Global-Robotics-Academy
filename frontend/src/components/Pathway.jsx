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