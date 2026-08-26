import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(auth === 'true');
  }, []);

  const openTeamForm = () => {
    if (isAuthenticated) {
      navigate('/team-form');
    } else {
      navigate('/login');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-text">
          <p className="eyebrow">Your Next Move</p>
          <h1>Ready to Build<br/><span className="orange">Your Team?</span></h1>
          <p className="lede">Competition teams aren't built overnight. They are built through training, practice, failure, improvement and persistence.</p>
          <button className="btn" onClick={openTeamForm} style={{ marginTop: '24px' }}>Start Building Your Team ↗</button>
          <div className="contact-info" style={{ marginTop: '40px' }}>
            <a href="tel:+919922552891">+91 9922552891</a>
            <a href="mailto:gra.stemsage@gmail.com">gra.stemsage@gmail.com</a>
            <a className="wa" href="#">Chat on WhatsApp ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;