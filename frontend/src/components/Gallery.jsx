import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryAPI } from '../services/api';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  useEffect(() => {
    if (galleryItems.length > 0) {
      setupScrollAnimation();
    }
  }, [galleryItems]);

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

    document.querySelectorAll('.gallery-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  };

  const fetchGalleryItems = async () => {
    try {
      const response = await galleryAPI.getAll();
      setGalleryItems(response.data);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
      // Fallback to static data if API fails
      setGalleryItems([
        { title: 'Robotics Arena', description: 'Students practicing on competition-grade robotics arenas with real challenges.', category: 'Training' },
        { title: 'Team Work', description: 'Collaborative problem-solving and team building during robotics training sessions.', category: 'Team Activities' },
        { title: 'Test & Optimize', description: 'Systematic testing and optimization of robots for competition performance.', category: 'Robot Testing' },
      ]);
    }
  };

  return (
    <section className="gallery" id="gallery" style={{ 
      minHeight: '100vh',
      maxHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 0'
    }}>
      <div className="wrap" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="gallery-top" style={{ textAlign: 'left' }}>
          <div>
            <p className="eyebrow" style={{ 
              color: '#0096B9',
              fontSize: 'clamp(12px, 1.5vw, 14px)',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 'clamp(16px, 2vw, 20px)'
            }}>Inside the Robotics Arena</p>
            <h2 style={{ 
              color: '#12181c',
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: 'clamp(16px, 2.5vw, 24px)'
            }}>See the Teams in Action.</h2>
            <p className="lede" style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: '1.6', color: '#5a6067' }}>Training, robot building, testing and competition stories from the academy ecosystem.</p>
          </div>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className={`gallery-card ${visibleCards.has(index) ? 'visible' : ''}`} key={index} data-index={index}>
              <div className="gallery-thumb">
                <span className="tag">GRA / 0{index + 1}</span>
              </div>
              <div className="gallery-body">
                <h4 style={{ 
                  color: '#12181c',
                  fontSize: '18px',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  marginBottom: '8px'
                }}>{item.title}</h4>
                <p style={{ 
                  color: '#5a6067',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>{item.description}</p>
                <span className="cat">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;