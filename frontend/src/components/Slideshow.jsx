import React, { useState, useEffect, useCallback, useRef } from 'react';

/* eslint-disable react-hooks/exhaustive-deps, no-unused-vars */

const Slideshow = () => {
  const [current, setCurrent] = useState(0);
  
  const autoplayTimerRef = useRef(null);
  
  // Robot images for slideshow
  const slidesData = [
    { id: 'robot_image_1', src: '/robot_image_1.webp', alt: 'Robot Competition 1' },
    { id: 'robot_image_2', src: '/robot_image_2.webp', alt: 'Robot Competition 2' },
    { id: 'robot_image_3', src: '/robot_image_3.webp', alt: 'Robot Competition 3' },
    { id: 'robot_image_4', src: '/robot_image_4.webp', alt: 'Robot Competition 4' },
    { id: 'robot_image_5', src: '/robot_image_5.webp', alt: 'Robot Competition 5' },
    { id: 'robot_image_6', src: '/robot_image_6.webp', alt: 'Robot Competition 6' },
    { id: 'robot_image_7', src: '/robot_image_7.webp', alt: 'Robot Competition 7' },
  ];

  const pad = (n) => n < 10 ? '0' + n : '' + n;

  const stopAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    autoplayTimerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slidesData.length);
    }, 3200);
  }, [slidesData.length]);

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay]);

  return (
    <div className="slideshow-container">
      <div className="slideshow-frame">
        <div className="stage-outer">
          <div className="diamond">
            <div className="stage">
              {slidesData.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className={`slide ${index === current ? 'active' : ''}`}
                >
                  <img 
                    id={slide.id} 
                    src={slide.src} 
                    alt={slide.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slide-indicator">
          <span className="arena-text-small">BUILD SYSTEMS<br/>THAT ENTER THE ARENA.</span>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;