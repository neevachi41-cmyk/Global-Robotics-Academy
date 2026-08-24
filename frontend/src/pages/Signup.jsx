import React, { useState } from 'react';
import Footer from '../components/Footer.jsx';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup attempt:', formData);
    // Add your signup logic here
  };

  return (
    <div className="login-page">
      <div className="wrap">
        <div className="login-container">
          <div className="login-header">
            <p className="eyebrow">Get Started</p>
            <h1>Create Your <span className="orange">Account</span></h1>
            <p className="lede">Join the Global Robotics Academy community and start your robotics journey today.</p>
          </div>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I agree to the terms and conditions</span>
              </label>
            </div>
            
            <button type="submit" className="btn login-btn">
              Create Account ↗
            </button>
            
            <div className="signup-link">
              <p>Already have an account? <a href="/login">Sign in</a></p>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
