import React, { useState } from 'react';
import { contactAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    schoolName: '',
    city: '',
    phone: '',
    email: '',
    areaOfInterest: 'Robotics Competition Training',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await contactAPI.create(formData);
      setSubmitStatus('success');
      setFormData({
        parentName: '',
        schoolName: '',
        city: '',
        phone: '',
        email: '',
        areaOfInterest: 'Robotics Competition Training',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">Your Next Move</p>
          <h1>Ready to Build<br/><span className="orange">Your Team?</span></h1>
          <p className="lede">Competition teams aren't built overnight. They are built through training, practice, failure, improvement and persistence.</p>
          <div className="contact-info">
            <a href="tel:+919922552891">+91 9922552891</a>
            <a href="mailto:gra.stemsage@gmail.com">gra.stemsage@gmail.com</a>
            <a className="wa" href="#">Chat on WhatsApp ↗</a>
          </div>
        </div>

        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-top"><span>Start a Conversation</span><span>01 — 05</span></div>
          <div className="field">
            <label htmlFor="pname">Parent / Student Name</label>
            <input 
              id="pname" 
              name="parentName"
              type="text" 
              required
              value={formData.parentName}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="school">School Name</label>
            <input 
              id="school" 
              name="schoolName"
              type="text"
              value={formData.schoolName}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="city">City</label>
            <input 
              id="city" 
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input 
              id="phone" 
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input 
              id="email" 
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="area">Area of Interest</label>
            <select 
              id="area" 
              name="areaOfInterest"
              value={formData.areaOfInterest}
              onChange={handleChange}
            >
              <option>Robotics Competition Training</option>
              <option>AI Competition Preparation</option>
              <option>STEM Competition Preparation</option>
              <option>Coding Competition Preparation</option>
              <option>Drone Competition Preparation</option>
              <option>School Partnership</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="msg">Message</label>
            <textarea 
              id="msg" 
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Connect With the Academy ↗'}
          </button>
          {submitStatus === 'success' && (
            <p style={{ color: 'var(--teal)', marginTop: '16px', fontSize: '14px' }}>
              Thank you! Your message has been sent successfully.
            </p>
          )}
          {submitStatus === 'error' && (
            <p style={{ color: 'var(--orange)', marginTop: '16px', fontSize: '14px' }}>
              There was an error sending your message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;