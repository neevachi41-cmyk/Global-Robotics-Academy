import React, { useEffect, useState } from 'react';
import { competitionsAPI } from '../services/api';

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchCompetitions();
  }, []);

  const fetchCompetitions = async () => {
    try {
      const response = await competitionsAPI.getAll();
      setCompetitions(response.data);
    } catch (error) {
      console.error('Error fetching competitions:', error);
      // Fallback to static data if API fails
      setCompetitions([
        { name: 'Browser Test Competition', description: 'Browser test', category: 'Robotics' },
        { name: 'School Robotics Championships', description: 'Competition preparation pathway for students and teams.', category: 'Robotics' },
        { name: 'IRC League', description: 'Competition preparation pathway for students and teams.', category: 'Robotics' },
        { name: 'Smart India Hackathon – Hardware Edition', description: 'Competition preparation pathway for students and teams.', category: 'Robotics' },
        { name: 'ABU Robocon India', description: 'Competition preparation pathway for students and teams.', category: 'Robotics' },
        { name: 'e-Yantra Robotics Competition', description: 'Competition preparation pathway for students and teams.', category: 'Robotics' },
        { name: 'IIT Techfest Robotics Competition', description: 'Competition preparation pathway for students and teams.', category: 'Robotics' },
        { name: 'Anvesh Bharat', description: 'Competition preparation pathway for students and teams.', category: 'Robotics' },
      ]);
    }
  };

  return (
    <section className="competitions" id="competitions">
      <div className="wrap">
        <div className="competitions-layout">
          <div className="competitions-text">
            <p className="eyebrow">Competition Directory</p>
            <h2>Prepare for the Competitions That Matter.</h2>
            <p className="lede">Competition availability, eligibility and participation depend on the respective competition's rules, age categories, selection process and registration requirements.</p>
            
            <a className="comp-link" href="#contact">Prepare for a Competition ↗</a>
          </div>
          <div className="competitions-grid">
            <div className="comp-grid">
              {competitions.slice(0, showAll ? competitions.length : 4).map((competition, index) => (
                <div className="comp-card" key={index}>
                  <div className="n">0{index + 1}</div>
                  <span className="trophy">🏆</span>
                  <h4>{competition.name}</h4>
                  <p>{competition.description}</p>
                  <span className="tag">{competition.category}</span>
                </div>
              ))}
            </div>
            {!showAll && competitions.length > 4 && (
              <button className="see-more-btn" onClick={() => setShowAll(true)}>
                See More
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;