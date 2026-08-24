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
          <div className="footer-contact">
            <p className="contact-item">+91 9922552891</p>
            <p className="contact-item">gra.stemsage@gmail.com</p>
            <p className="contact-item">Mumbai, India</p>
          </div>
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
      </div>
      <div className="wrap footer-bottom">
        © 2024 GLOBAL ROBOTICS ACADEMY. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;