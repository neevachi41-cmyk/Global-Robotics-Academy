import React, { useState, useEffect, useCallback, useRef } from 'react';

/* eslint-disable react-hooks/exhaustive-deps, no-unused-vars */

const PartnerSlideshow = () => {
  const [current, setCurrent] = useState(0);
  
  const autoplayTimerRef = useRef(null);
  
  // Partner images for slideshow
  const slidesData = [
    { id: 'partner_image_1', src: '/P 1.jpeg', alt: 'Partner 1' },
    { id: 'partner_image_2', src: '/P 2.jpeg', alt: 'Partner 2' },
    { id: 'partner_image_3', src: '/P 3.jpeg', alt: 'Partner 3' },
    { id: 'partner_image_4', src: '/P 4.jpeg', alt: 'Partner 4' },
  ];

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
      </div>
    </div>
  );
};

export default PartnerSlideshow;
