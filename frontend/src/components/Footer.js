import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <div className="footer-logo">
            <div className="logo-mark">G</div>
            GLOBAL<br/>ROBOTICS<br/>ACADEMY
          </div>
          <p className="footer-tag">Build. Innovate. Compete. Go Global.</p>
        </div>
        <div className="footer-col">
          <span className="eyebrow">Explore</span>
          <a href="#about">About</a>
          <a href="#competitions">Competitions</a>
          <a href="#programs">Programs</a>
          <a href="#teams">Our Teams</a>
          <a href="#impact">Our Impact</a>
          <a href="#partners">Schools &amp; Partners</a>
        </div>
        <div className="footer-col">
          <span className="eyebrow">Connect</span>
          <a href="#gallery">Gallery</a>
          <a href="#videos">Videos</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-right">
          <p>+91 9922552891</p>
          <p>gra.stemsage@gmail.com</p>
          <p>Mumbai, India</p>
        </div>
      </div>
      <div className="wrap footer-bottom">
        © 2024 Global Robotics Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;