import React from 'react';

const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">
          <div className="logo-mark">G</div>
          GLOBAL<br/>ROBOTICS<br/>ACADEMY
        </div>
        <nav className="links">
          <a href="#about">About</a>
          <a href="#competitions">Competitions</a>
          <a href="#programs">Programs</a>
          <a href="#teams">Our Teams</a>
          <a href="#impact">Our Impact</a>
          <a href="#partners">Schools &amp; Partners</a>
          <a href="#gallery">Gallery</a>
          <a href="#videos">Videos</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn" href="#contact">Start Your Journey ↗</a>
      </div>
    </header>
  );
};

export default Navbar;