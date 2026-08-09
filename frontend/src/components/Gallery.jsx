import React, { useEffect, useState } from 'react';
import { galleryAPI } from '../services/api';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const response = await galleryAPI.getAll();
      setGalleryItems(response.data);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
      // Fallback to static data if API fails
      setGalleryItems([
        { title: 'Robotics Arena', description: 'Admin-managed gallery content will appear here.', category: 'Training' },
        { title: 'Team Work', description: 'Admin-managed gallery content will appear here.', category: 'Team Activities' },
        { title: 'Test / Optimize', description: 'Admin-managed gallery content will appear here.', category: 'Robot Testing' },
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
          <a className="gallery-link" href="#contact">Share Your Story ↗</a>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-card" key={index}>
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
          <a className="btn outline" href="#contact">Add Your Video ↗</a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;