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
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="gallery-top">
          <div>
            <p className="eyebrow">Inside the Robotics Arena</p>
            <h2>See the Teams in Action.</h2>
            <p className="lede">Training, robot building, testing and competition stories from the academy ecosystem.</p>
          </div>
          <Link className="gallery-link" to="/contact">Share Your Story ↗</Link>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className={`gallery-card ${visibleCards.has(index) ? 'visible' : ''}`} key={index} data-index={index}>
              <div className="gallery-thumb">
                <span className="tag">GRA / 0{index + 1}</span>
              </div>
              <div className="gallery-body">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span className="cat">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="video-cta" id="videos">
          <div>
            <p className="eyebrow">Video Manager</p>
            <h3>Team Stories, Robot Tests, Competition Days.</h3>
          </div>
          <Link className="btn outline" to="/contact">Add Your Video ↗</Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;