import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem('isAuthenticated');
      setIsAuthenticated(auth === 'true');
    };
    
    checkAuth();
    
    // Listen for storage changes (for multi-tab support)
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    navigate('/');
  };

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
          {isAuthenticated && (
            <Link to="/team-form" className="special-link">Build Your Team</Link>
          )}
        </nav>
        {isAuthenticated ? (
          <button className="btn" onClick={handleLogout}>Logout ↗</button>
        ) : (
          <Link className="btn" to="/login">Start Your Journey ↗</Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;