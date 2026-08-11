import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">
          <Link to="/">
            <img src="logo.png" alt="Global Robotics Academy" className="logo-image" />
          </Link>
        </div>
        <nav className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/competitions">Competitions</Link>
          <Link to="/teams">Our Teams</Link>
          <Link to="/impact">Our Impact</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Link className="btn" to="/login">Start Your Journey ↗</Link>
      </div>
    </header>
  );
};

export default Navbar;