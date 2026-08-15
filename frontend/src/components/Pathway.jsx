import React from 'react';

const Pathway = () => {
  const steps = [
    { number: '01', phase: 'FOUNDATION', title: 'Learn', description: 'Electronics, mechanics, sensors, motors and the basics of programming.' },
    { number: '02', phase: 'MAKER', title: 'Build', description: 'Turn ideas into working robots and understand how the system fits together.' },
    { number: '03', phase: 'CONTROL', title: 'Program', description: 'Write logic that makes the robot move, sense, react and make decisions.' },
    { number: '04', phase: 'DEBUG', title: 'Test', description: 'Run the robot, find what fails, understand why and fix it.' },
    { number: '05', phase: 'REFINE', title: 'Improve', description: 'Make every version faster, stronger, more accurate and more reliable.' },
    { number: '06', phase: 'CHALLENGE', title: 'Compete', description: 'Train on real arenas, rules, strategy and challenges where decisions matter.' },
    { number: '07', phase: 'PROGRESS', title: 'Qualify', description: 'Strengthen strategy, teamwork and performance to move through competition rounds.' },
    { number: '08', phase: 'REPRESENT', title: 'Represent', description: 'Take the experience beyond the academy to regional, national and international stages.' },
  ];

  return (
    <section className="pathway-section">
      <div className="pathway-container">
        <div className="eyebrow">THE PATHWAY</div>
        
        <div className="hero">
          <h1>FROM FIRST BUILD<br/>TO COMPETITION DAY.</h1>
          <p className="hero-copy">
            Students start by learning the basics, then they build, break, fix and
            test their robots. As they improve, they take on harder challenges,
            work as a team and learn how to perform under competition conditions.
            <br/><br/>
            At Global Robotics Academy, the goal is simple —
            <strong>build students who can actually build and operate robots,
            not just follow a project manual.</strong>
          </p>
        </div>

        <div className="path-scroll">
          <div className="path">
            <div className="rail">
              <div className="rail-fill"></div>
            </div>
            <div className="progress-dot"></div>
            
            <div className="steps">
              {steps.map((step, index) => (
                <article className="step" key={index} style={{ animationDelay: `${0.15 + index * 0.25}s` }}>
                  <div className="card">
                    <div className="meta">
                      <span className="number">{step.number}</span>
                      <span className="phase">{step.phase}</span>
                    </div>
                    <h2>{step.title}</h2>
                    <p>{step.description}</p>
                  </div>
                  <div className="connector"></div>
                  <div className="node"></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pathway;