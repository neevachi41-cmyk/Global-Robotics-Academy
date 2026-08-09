import React, { useEffect, useState } from 'react';
import { teamsAPI } from '../services/api';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await teamsAPI.getAll();
      setTeams(response.data);
    } catch (error) {
      console.error('Error fetching teams:', error);
      // Fallback to static data if API fails
      setTeams([
        { name: 'Team VhyuAstra Jr.', description: 'Student-led robotics team within the Global Robotics Academy ecosystem.' },
        { name: 'Team Fortrans', description: 'Student-led robotics team within the Global Robotics Academy ecosystem.' },
        { name: 'Team Kalki Robotics', description: 'Student-led robotics team within the Global Robotics Academy ecosystem.' },
        { name: 'VhyuAstra Robotics', description: 'Student-led robotics team within the Global Robotics Academy ecosystem.' },
      ]);
    }
  };

  return (
    <section className="teams" id="teams">
      <div className="wrap teams-grid">
        <div>
          <p className="eyebrow">Team Ecosystem</p>
          <h2>We Don't<br/>Just Train<br/>Students.<br/><span className="orange">We Build<br/>Teams.</span></h2>
          <p className="lede">Global Robotics Academy provides the training ecosystem behind student-led robotics teams participating in different technology competitions.</p>
          <a className="btn outline" href="#contact">Build Your Team ↗</a>
        </div>
        <div className="team-list">
          {teams.map((team, index) => (
            <div className="team-row" key={index}>
              <div>
                <div className="n">Team 0{index + 1}</div>
                <h4>{team.name}</h4>
                <p>{team.description}</p>
              </div>
              <span className="arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;