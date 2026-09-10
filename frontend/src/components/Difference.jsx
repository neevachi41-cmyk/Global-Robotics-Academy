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
    <section className="difference" style={{ 
      minHeight: '100vh',
      maxHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 0'
    }}>
      <div className="wrap diff-grid" style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(30px, 5vw, 60px)', alignItems: 'center' }}>
        <div style={{ textAlign: 'left' }}>
          <p className="eyebrow" style={{ 
            color: '#0096B9',
            fontSize: 'var(--font-size-xs)',
            fontWeight: '700',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 'clamp(16px, 2vw, 20px)'
          }}>The GRA Difference</p>
          <h2 style={{ 
            color: '#12181c',
            fontSize: 'var(--font-size-4xl)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: 'clamp(16px, 2.5vw, 24px)'
          }}>Train<br/>With<br/><span className="orange" style={{ color: '#0096B9' }}>Intent.</span></h2>
          <p className="lede" style={{ fontSize: 'var(--font-size-base)', lineHeight: '1.6', color: '#5a6067' }}>Don't just learn robotics. Train to compete.</p>
          <button className="btn" onClick={() => navigate('/impact')}>See More ↗</button>
        </div>
        <div className="diff-cards">
          <div className={`diff-card ${expandedCards[0] ? 'expanded' : ''}`} style={{ 
            padding: 'clamp(8px, 2vw, 12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <h3 style={{ 
              color: '#12181c',
              fontSize: 'var(--font-size-sm)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: 'clamp(6px, 1vw, 8px)'
            }}>COMPETITION-FOCUSED TRAINING</h3>
            <p style={{ 
              color: '#5a6067',
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.4',
              marginTop: 'clamp(6px, 1vw, 8px)',
              textAlign: 'left',
              fontWeight: '400'
            }}>Real challenges, rules, strategy and performance.</p>
          </div>
          <div className={`diff-card ${expandedCards[1] ? 'expanded' : ''}`} style={{ 
            padding: 'clamp(8px, 2vw, 12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <h3 style={{ 
              color: '#12181c',
              fontSize: 'var(--font-size-sm)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: 'clamp(6px, 1vw, 8px)'
            }}>REAL ROBOT BUILDING</h3>
            <p style={{ 
              color: '#5a6067',
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.4',
              marginTop: 'clamp(6px, 1vw, 8px)',
              textAlign: 'left',
              fontWeight: '400'
            }}>Design, assemble, program, test and improve.</p>
          </div>
          <div className={`diff-card ${expandedCards[2] ? 'expanded' : ''}`} style={{ 
            padding: 'clamp(8px, 2vw, 12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <h3 style={{ 
              color: '#12181c',
              fontSize: 'var(--font-size-sm)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: 'clamp(6px, 1vw, 8px)'
            }}>TEAM DEVELOPMENT</h3>
            <p style={{ 
              color: '#5a6067',
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.4',
              marginTop: 'clamp(6px, 1vw, 8px)',
              textAlign: 'left',
              fontWeight: '400'
            }}>Form and develop competition-ready teams.</p>
          </div>
          <div className={`diff-card ${expandedCards[3] ? 'expanded' : ''}`} style={{ 
            padding: 'clamp(8px, 2vw, 12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <h3 style={{ 
              color: '#12181c',
              fontSize: 'var(--font-size-sm)',
              fontWeight: '700',
              lineHeight: '1.3',
              marginBottom: 'clamp(6px, 1vw, 8px)'
            }}>NATIONAL & INTERNATIONAL EXPOSURE</h3>
            <p style={{ 
              color: '#5a6067',
              fontSize: 'var(--font-size-sm)',
              lineHeight: '1.4',
              marginTop: 'clamp(6px, 1vw, 8px)',
              textAlign: 'left',
              fontWeight: '400'
            }}>Prepare for opportunities beyond the classroom.</p>
          </div>
        </div>

        {popupContent && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h3 style={{ 
                color: '#12181c',
                fontSize: '24px',
                fontWeight: '800',
                lineHeight: '1.2',
                marginBottom: '16px'
              }}>{popupContent.title}</h3>
              <p style={{ 
                color: '#5a6067',
                fontSize: '16px',
                lineHeight: '1.6'
              }}>{popupContent.content}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Difference;