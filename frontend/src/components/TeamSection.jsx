import React, { useEffect, useState } from 'react';
import { teamsAPI } from '../services/api';
import { Link } from 'react-router-dom';
import './TeamSection.css';

const TeamSection = ({ showAll = false }) => {
  const [teams, setTeams] = useState([]);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    fetchTeams();
  }, []);

  useEffect(() => {
    if (teams.length > 0) {
      setupScrollAnimation();
    }
  }, [teams]);

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

    document.querySelectorAll('.team-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  };

  const fetchTeams = async () => {
    try {
      const response = await teamsAPI.getAll();
      setTeams(response.data);
    } catch (error) {
      console.error('Error fetching teams:', error);
      // Fallback to static data if API fails
      setTeams([
        { 
          id: "01",
          name: "TEAM AVIOT-O-VIRTURE",
          description: "Student-led robotics team within the Global Robotics Academy ecosystem.",
          color: "#00a9d6",
          image: "/robot_image_1.webp"
        },
        { 
          id: "02",
          name: "TEAM KAKLI ROBOTICS",
          description: "Student-led robotics team within the Global Robotics Academy ecosystem.",
          color: "#f5a800",
          image: "/robot_image_2.webp"
        },
        { 
          id: "03",
          name: "TEAM FORTRANS",
          description: "Student-led robotics team within the Global Robotics Academy ecosystem.",
          color: "#7b3fe4",
          image: "/robot_image_3.webp"
        },
        { 
          id: "04",
          name: "TEAM ATUTOMATRIX",
          description: "Student-led robotics team within the Global Robotics Academy ecosystem.",
          color: "#14b866",
          image: "/robot_image_4.webp"
        },
        { 
          id: "05",
          name: "TEAM VHYUASTRA",
          description: "Student-led robotics team within the Global Robotics Academy ecosystem.",
          color: "#ef3340",
          image: "/robot_image_5.webp"
        },
        { 
          id: "06",
          name: "TEAM VHYUASTRA JUNIOR",
          description: "Student-led robotics team within the Global Robotics Academy ecosystem.",
          color: "#2784df",
          image: "/robot_image_6.webp"
        },
      ]);
    }
  };

  const displayTeams = showAll ? teams : teams.slice(0, 4);
  const isTeamsPage = showAll;

  return (
    <section className={`teams-section ${isTeamsPage ? 'teams-page' : ''}`} id="teams">

      {/* Background decoration */}
      <div className="bg-circle circle-one"></div>
      <div className="bg-circle circle-two"></div>

      <div className="teams-container">

        {/* LEFT CONTENT */}
        <div className="teams-intro">

          <div className="section-label">
            TEAM ECOSYSTEM
            <span></span>
          </div>

          <h2>
            WE DON'T
            <br />
            JUST TRAIN
            <br />
            STUDENTS.
            <br />

            <span>WE BUILD</span>
            <br />
            <span>TEAMS.</span>
          </h2>

          <p>
            Global Robotics Academy provides the training ecosystem
            behind student-led robotics teams participating in different
            technology competitions.
          </p>

          <Link to="/contact" className="build-btn">
            BUILD YOUR TEAM
            <span>↗</span>
          </Link>

          {/* Decorative dotted path */}
          <div className="dotted-path">
            <div className="path-dot"></div>
            <div className="path-arrow">➜</div>
          </div>

        </div>

        {/* RIGHT TEAM GRID */}
        <div className="teams-grid">

          {displayTeams.map((team, index) => (
            <div
              className={`team-card ${visibleCards.has(index) ? 'visible' : ''}`}
              key={team.id || index}
              data-index={index}
              style={{
                "--team-color": team.color,
              }}
            >

              {/* TEAM IMAGE */}
              <div className="team-image-wrapper">

                <img
                  src={team.image || "/robot_image_1.webp"}
                  alt={team.name}
                  className="team-image"
                />

                <div className="image-overlay"></div>

              </div>

              {/* CONTENT */}
              <div className="team-content">

                <div
                  className="team-number"
                  style={{ color: team.color }}
                >
                  Team {team.id || `0${index + 1}`}
                </div>

                <h3>{team.name}</h3>

                <p>
                  {team.description}
                </p>

              </div>

            </div>
          ))}

          {!isTeamsPage && teams.length > 4 && (
            <div className="view-more-link-container">
              <Link to="/teams" className="view-more-link">
                View More Teams ↗
              </Link>
            </div>
          )}

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">⌄</div>

        <div className="scroll-text">
          <span></span>
          SCROLL TO EXPLORE
          <span></span>
        </div>
      </div>

    </section>
  );
};

export default TeamSection;