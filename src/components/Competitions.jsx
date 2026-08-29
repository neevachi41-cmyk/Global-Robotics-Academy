import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { competitionsAPI } from '../services/api';

const Competitions = ({ showAllCompetitions = false }) => {
  const navigate = useNavigate();
  const [competitions, setCompetitions] = useState([]);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    fetchCompetitions();
  }, []);

  useEffect(() => {
    if (competitions.length > 0) {
      setupScrollAnimation();
    }
  }, [competitions]);

  const setupScrollAnimation = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]));
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.comp-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  };

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
        { name: 'International Robotics Competition | Mekathlon Event', description: 'Competition preparation pathway for students and teams.', category: 'Robotics' },
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
            {showAllCompetitions && (
              <>
                <p className="lede">Competition availability, eligibility and participation depend on the respective competition's rules, age categories, selection process and registration requirements.</p>
              </>
            )}
          </div>
          <div className="competitions-grid">
            <div className="comp-grid">
              {competitions.slice(0, showAllCompetitions ? competitions.length : 2).map((competition, index) => (
                <div className={`comp-card ${visibleCards.has(index) ? 'visible' : ''}`} key={index} data-index={index}>
                  <div className="comp-card-header">
                    <div className="n">Competition 0{index + 1}</div>
                    <span className="trophy">🏆</span>
                  </div>
                  <h4>{competition.name}</h4>
                  <p>{competition.description}</p>
                </div>
              ))}
            </div>
            {!showAllCompetitions && competitions.length > 2 && (
              <button className="see-more-btn" onClick={() => navigate('/competitions')}>
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