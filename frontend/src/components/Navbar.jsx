import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  const isActive = (path) => {
    return location.pathname === path;
  };

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
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
          <Link to="/programs" className={isActive('/programs') ? 'active' : ''}>Programs</Link>
          <Link to="/competitions" className={isActive('/competitions') ? 'active' : ''}>Competitions</Link>
          <Link to="/teams" className={isActive('/teams') ? 'active' : ''}>Our Teams</Link>
          <Link to="/impact" className={isActive('/impact') ? 'active' : ''}>Our Impact</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
          {isAuthenticated && (
            <Link to="/team-form" className={`special-link ${isActive('/team-form') ? 'active' : ''}`}>Build Your Team</Link>
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