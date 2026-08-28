import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    setupScrollAnimation();
  }, []);

  const setupScrollAnimation = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.dataset.section;
            setTimeout(() => {
              setVisibleSections((prev) => new Set([...prev, sectionId]));
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="about-hero" data-section="hero">
        <div className="wrap">
          <div className={`about-hero-content ${visibleSections.has('hero') ? 'visible' : ''}`}>
            <p className="eyebrow">About Global Robotics Academy</p>
            <h1>Building the Next Generation of<br/><span className="accent">Robotics Champions</span></h1>
            <p className="lede">
              We don't just teach robotics—we prepare students to compete, win, and lead in national and international technology competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission" data-section="mission">
        <div className="wrap">
          <div className={`mission-content ${visibleSections.has('mission') ? 'visible' : ''}`}>
            <div className="mission-text">
              <p className="eyebrow">Our Mission</p>
              <h2>Transforming Students into Competition-Ready Innovators</h2>
              <p className="mission-description">
                Global Robotics Academy exists to bridge the gap between classroom learning and real-world competition success. We believe every student has the potential to excel in robotics, STEM, AI, coding, and innovation when given the right training, mentorship, and opportunities.
              </p>
              <p className="mission-description">
                Our academy provides a complete ecosystem where students don't just learn concepts—they apply them in real competition scenarios. From building their first robot to representing their schools and countries on international stages, we guide them through every step of their competitive journey.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-item">
                <div className="stat-number">5,000+</div>
                <div className="stat-label">Students Trained</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Multiple</div>
                <div className="stat-label">Robotics Teams</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">National</div>
                <div className="stat-label">& International Competitions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="about-what-we-do" data-section="what-we-do">
        <div className="wrap">
          <div className={`section-header ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
            <p className="eyebrow">What We Do</p>
            <h2>Comprehensive Competition Preparation Ecosystem</h2>
            <p className="lede">We provide end-to-end training and support for students aspiring to excel in technology competitions.</p>
          </div>
          
          <div className="what-we-do-grid">
            <div className={`do-card ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
              <div className="do-icon">🎯</div>
              <h3>Competition Training</h3>
              <p>Specialized preparation for national and international robotics, STEM, AI, coding, and innovation competitions with real competition scenarios and strategies.</p>
            </div>
            <div className={`do-card ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
              <div className="do-icon">🤖</div>
              <h3>Robot Building</h3>
              <p>Hands-on experience designing, assembling, programming, testing, and optimizing robots for specific competition challenges and requirements.</p>
            </div>
            <div className={`do-card ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
              <div className="do-icon">👥</div>
              <h3>Team Development</h3>
              <p>Forming and nurturing student-led robotics teams with focus on teamwork, leadership, communication, and collaborative problem-solving skills.</p>
            </div>
            <div className={`do-card ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
              <div className="do-icon">📚</div>
              <h3>Structured Learning</h3>
              <p>Progressive curriculum from foundations to advanced concepts, covering electronics, mechanics, sensors, motors, programming, and competition strategy.</p>
            </div>
            <div className={`do-card ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
              <div className="do-icon">🏆</div>
              <h3>Competition Exposure</h3>
              <p>Preparing students for prestigious competitions like ABU Robocon, e-Yantra, Smart India Hackathon, IRC League, and international robotics events.</p>
            </div>
            <div className={`do-card ${visibleSections.has('what-we-do') ? 'visible' : ''}`}>
              <div className="do-icon">🚀</div>
              <h3>Innovation Projects</h3>
              <p>Encouraging creative thinking and innovation through open-ended projects that challenge students to develop unique solutions to complex problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="about-approach" data-section="approach">
        <div className="wrap">
          <div className={`approach-content ${visibleSections.has('approach') ? 'visible' : ''}`}>
            <div className="approach-text">
              <p className="eyebrow">Our Approach</p>
              <h2>From Foundation to Competition Stage</h2>
              <p className="approach-description">
                Our methodology is built on the belief that true learning happens through doing. We've developed a structured pathway that takes students from basic concepts to competition-ready competitors.
              </p>
              
              <div className="approach-steps">
                <div className="approach-step">
                  <div className="step-number">01</div>
                  <div className="step-content">
                    <h4>Foundation</h4>
                    <p>Learn electronics, mechanics, sensors, motors, and programming basics through hands-on projects and experiments.</p>
                  </div>
                </div>
                <div className="approach-step">
                  <div className="step-number">02</div>
                  <div className="step-content">
                    <h4>Build</h4>
                    <p>Turn ideas into working robots, understanding how systems integrate and function together as complete solutions.</p>
                  </div>
                </div>
                <div className="approach-step">
                  <div className="step-number">03</div>
                  <div className="step-content">
                    <h4>Program</h4>
                    <p>Write logic that makes robots move, sense, react, and make autonomous decisions based on sensor input and programming.</p>
                  </div>
                </div>
                <div className="approach-step">
                  <div className="step-number">04</div>
                  <div className="step-content">
                    <h4>Test & Debug</h4>
                    <p>Run robots in real scenarios, identify failures, understand root causes, and develop systematic debugging and improvement processes.</p>
                  </div>
                </div>
                <div className="approach-step">
                  <div className="step-number">05</div>
                  <div className="step-content">
                    <h4>Compete</h4>
                    <p>Train on actual competition arenas, master rules and strategies, and develop performance mindset for high-pressure environments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="about-programs" data-section="programs">
        <div className="wrap">
          <div className={`section-header ${visibleSections.has('programs') ? 'visible' : ''}`}>
            <p className="eyebrow">Training Programs</p>
            <h2>Specialized Competition Pathways</h2>
            <p className="lede">We offer focused training programs for different competition categories and skill levels.</p>
          </div>
          
          <div className="programs-list">
            <div className={`program-item ${visibleSections.has('programs') ? 'visible' : ''}`}>
              <div className="program-category">Robotics Competition</div>
              <h3>Robotics Competition Preparation</h3>
              <p>Comprehensive training for school and national robotics championships, covering mechanical design, electronics, programming, and competition strategy.</p>
            </div>
            <div className={`program-item ${visibleSections.has('programs') ? 'visible' : ''}`}>
              <div className="program-category">Drone Competition</div>
              <h3>Drone Competition Preparation</h3>
              <p>Specialized program for drone racing, surveillance, and payload competitions, focusing on aerodynamics, flight control, and precision piloting.</p>
            </div>
            <div className={`program-item ${visibleSections.has('programs') ? 'visible' : ''}`}>
              <div className="program-category">AI & Coding</div>
              <h3>AI & Coding Competition Preparation</h3>
              <p>Training for hackathons, AI challenges, and coding competitions with emphasis on algorithms, machine learning, and software development.</p>
            </div>
            <div className={`program-item ${visibleSections.has('programs') ? 'visible' : ''}`}>
              <div className="program-category">Innovation Challenge</div>
              <h3>Innovation Challenge Preparation</h3>
              <p>Program focused on creative problem-solving, prototyping, and presentation skills for innovation and design thinking competitions.</p>
            </div>
          </div>
          
          <div className="programs-cta">
            <Link className="btn" to="/programs">Explore All Programs ↗</Link>
          </div>
        </div>
      </section>

      {/* Team Ecosystem Section */}
      <section className="about-teams" data-section="teams">
        <div className="wrap">
          <div className={`teams-content ${visibleSections.has('teams') ? 'visible' : ''}`}>
            <div className="teams-text">
              <p className="eyebrow">Team Ecosystem</p>
              <h2>We Don't Just Train Students—We Build Teams</h2>
              <p className="teams-description">
                Global Robotics Academy provides the complete training ecosystem behind student-led robotics teams participating in different technology competitions. Our teams are not just groups of students—they are organized units with defined roles, responsibilities, and competition goals.
              </p>
              <p className="teams-description">
                Each team operates within our academy ecosystem, receiving training, mentorship, resources, and support to develop from enthusiastic beginners to competition-ready contenders. We currently host multiple teams across different age groups and competition categories.
              </p>
              <Link className="btn outline" to="/teams">Meet Our Teams ↗</Link>
            </div>
            <div className="teams-highlight">
              <div className="team-highlight-card">
                <div className="team-icon">🏆</div>
                <h4>Competition-Focused</h4>
                <p>Teams are formed and trained with specific competition goals in mind.</p>
              </div>
              <div className="team-highlight-card">
                <div className="team-icon">🤝</div>
                <h4>Collaborative</h4>
                <p>Students learn teamwork, leadership, and communication through team dynamics.</p>
              </div>
              <div className="team-highlight-card">
                <div className="team-icon">📈</div>
                <h4>Progressive Growth</h4>
                <p>Teams evolve from learning foundations to competing at higher levels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-why-us" data-section="why-us">
        <div className="wrap">
          <div className={`section-header ${visibleSections.has('why-us') ? 'visible' : ''}`}>
            <p className="eyebrow">Why Choose Us</p>
            <h2>The GRA Difference</h2>
            <p className="lede">What sets us apart from traditional robotics training programs.</p>
          </div>
          
          <div className="why-us-grid">
            <div className={`why-card ${visibleSections.has('why-us') ? 'visible' : ''}`}>
              <div className="why-number">01</div>
              <h4>Competition-Focused Training</h4>
              <p>Real competition challenges, rules, strategy, and performance metrics—not just theoretical concepts.</p>
            </div>
            <div className={`why-card ${visibleSections.has('why-us') ? 'visible' : ''}`}>
              <div className="why-number">02</div>
              <h4>Real Robot Building</h4>
              <p>Design, assemble, program, test, and improve actual robots—no simulations or pre-built kits.</p>
            </div>
            <div className={`why-card ${visibleSections.has('why-us') ? 'visible' : ''}`}>
              <div className="why-number">03</div>
              <h4>Team Development</h4>
              <p>Form and develop competition-ready teams with proper structure, roles, and collaboration.</p>
            </div>
            <div className={`why-card ${visibleSections.has('why-us') ? 'visible' : ''}`}>
              <div className="why-number">04</div>
              <h4>National & International Exposure</h4>
              <p>Prepare for opportunities beyond the classroom with access to prestigious competitions.</p>
            </div>
            <div className={`why-card ${visibleSections.has('why-us') ? 'visible' : ''}`}>
              <div className="why-number">05</div>
              <h4>Experienced Mentorship</h4>
              <p>Guidance from mentors with competition experience and technical expertise.</p>
            </div>
            <div className={`why-card ${visibleSections.has('why-us') ? 'visible' : ''}`}>
              <div className="why-number">06</div>
              <h4>Complete Ecosystem</h4>
              <p>From training to team formation to competition participation—we handle the entire journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta" data-section="cta">
        <div className="wrap">
          <div className={`cta-content ${visibleSections.has('cta') ? 'visible' : ''}`}>
            <h2>Ready to Start Your Competition Journey?</h2>
            <p>Join Global Robotics Academy and transform from classroom learner to competition-ready innovator.</p>
            <div className="cta-buttons">
              <Link className="btn" to="/contact">Get Started ↗</Link>
              <Link className="btn outline" to="/competitions">View Competitions</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;