import React, { useState, useEffect, useCallback, useRef } from 'react';

/* eslint-disable react-hooks/exhaustive-deps, no-unused-vars */

const StatsSlideshow = () => {
  const [current, setCurrent] = useState(0);
  
  const autoplayTimerRef = useRef(null);
  
  // Stats images for slideshow
  const slidesData = [
    { id: 's_image_1', src: '/S 1.png', alt: 'Stats Image 1' },
    { id: 's_image_2', src: '/S 2.png', alt: 'Stats Image 2' },
    { id: 's_image_3', src: '/S 3.png', alt: 'Stats Image 3' },
    { id: 's_image_4', src: '/S 4.png', alt: 'Stats Image 4' },
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
    <div className="slideshow-container" style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div className="slideshow-frame" style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div className="stage-outer" style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div className="diamond" style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <div className="stage" style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {slidesData.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className={`slide ${index === current ? 'active' : ''}`}
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%',
                    zIndex: index === current ? 1 : 0
                  }}
                >
                  <img 
                    id={slide.id} 
                    src={slide.src} 
                    alt={slide.alt}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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

export default StatsSlideshow;
