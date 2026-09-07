import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Difference = () => {
  const navigate = useNavigate();
  const [expandedCards, setExpandedCards] = useState({});
  const [popupContent, setPopupContent] = useState(null);

  const handleSeeMore = (path, index, title, content) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
    
    setPopupContent({
      title: title,
      content: content
    });

    setTimeout(() => {
      setPopupContent(null);
      navigate(path);
    }, 1500);
  };

  return (
    <section className="difference">
      <div className="wrap diff-grid">
        <div>
          <p className="eyebrow">The GRA Difference</p>
          <h2>Train<br/>With<br/><span className="orange">Intent.</span></h2>
          <p className="lede">Don't just learn robotics. Train to compete.</p>
          <button className="btn" onClick={() => navigate('/impact')}>See More ↗</button>
        </div>
        <div className="diff-cards">
          <div className={`diff-card ${expandedCards[0] ? 'expanded' : ''}`}>
            <h4>COMPETITION-FOCUSED TRAINING</h4>
            <p>Every training session is designed to move students one step closer to competing confidently.</p>
            {expandedCards[0] && (
              <p>Students don't just learn robotics in a classroom—they train with competition in mind. They work through real challenges, understand competition rules, develop strategies, operate robots under pressure and learn how to perform as a team when every decision matters.</p>
            )}
            <span className="arrow" onClick={() => handleSeeMore('/programs', 0, 'COMPETITION-FOCUSED TRAINING', 'Students don\'t just learn robotics in a classroom—they train with competition in mind. They work through real challenges, understand competition rules, develop strategies, operate robots under pressure and learn how to perform as a team when every decision matters.')}>
              {expandedCards[0] ? 'see less' : 'see more'}
            </span>
          </div>
          <div className={`diff-card ${expandedCards[1] ? 'expanded' : ''}`}>
            <h4>REAL ROBOT BUILDING</h4>
            <p>Students turn concepts into machines they can build, control and improve themselves.</p>
            {expandedCards[1] && (
              <p>From designing the mechanical structure to selecting motors, electronics and sensors, students experience the complete robot-building process. They assemble, program, test, troubleshoot and improve their robots while developing the confidence to understand and solve problems independently.</p>
            )}
            <span className="arrow" onClick={() => handleSeeMore('/programs', 1, 'REAL ROBOT BUILDING', 'From designing the mechanical structure to selecting motors, electronics and sensors, students experience the complete robot-building process. They assemble, program, test, troubleshoot and improve their robots while developing the confidence to understand and solve problems independently.')}>
              {expandedCards[1] ? 'see less' : 'see more'}
            </span>
          </div>
          <div className={`diff-card ${expandedCards[2] ? 'expanded' : ''}`}>
            <h4>TEAM DEVELOPMENT</h4>
            <p>The journey teaches students that winning isn't just about the machine—it's about the people behind it.</p>
            {expandedCards[2] && (
              <p>Students learn how to work together across mechanical, electronics, programming and strategy roles. They take responsibility, communicate under pressure, solve problems together and gradually develop into competition-ready teams where every member has a role to play.</p>
            )}
            <span className="arrow" onClick={() => handleSeeMore('/teams', 2, 'TEAM DEVELOPMENT', 'Students learn how to work together across mechanical, electronics, programming and strategy roles. They take responsibility, communicate under pressure, solve problems together and gradually develop into competition-ready teams where every member has a role to play.')}>
              {expandedCards[2] ? 'see less' : 'see more'}
            </span>
          </div>
          <div className={`diff-card ${expandedCards[3] ? 'expanded' : ''}`}>
            <h4>NATIONAL & INTERNATIONAL EXPOSURE</h4>
            <p>The goal is not simply to participate—it is to prepare students to confidently represent their team, academy and institution.</p>
            {expandedCards[3] && (
              <p>Students get opportunities to participate in robotics competitions, exhibitions, technical events and larger competitive platforms. As they progress, they can move from local challenges to national and international arenas—experiencing different teams, technologies, competition environments and cultures along the way.</p>
            )}
            <span className="arrow" onClick={() => handleSeeMore('/competitions', 3, 'NATIONAL & INTERNATIONAL EXPOSURE', 'Students get opportunities to participate in robotics competitions, exhibitions, technical events and larger competitive platforms. As they progress, they can move from local challenges to national and international arenas—experiencing different teams, technologies, competition environments and cultures along the way.')}>
              {expandedCards[3] ? 'see less' : 'see more'}
            </span>
          </div>
        </div>

        {popupContent && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h3>{popupContent.title}</h3>
              <p>{popupContent.content}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Difference;