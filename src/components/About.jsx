import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>About</h2>
        {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="about-container">
          {/* Content Column */}
          <div className="about-content-wrapper">
            <div className="about-content">
              <h3 className="about-subtitle">Why Braille Play?</h3>
              <p className="about-description">
                Currently, Braille is not widely understood or utilized by non-disabled people. 
                Braille Play bridges this gap by offering a fun and accessible way for everyone to learn.
              </p>

              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-keyboard"></i>
                  </div>
                  <div className="feature-content">
                    <h4>2x4 Braille Input Device</h4>
                    <p>Practice Braille input with a dedicated 2x4 tactile device.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Interactive Web Content</h4>
                    <p>Engage in games and quizzes for enjoyable learning.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-universal-access"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Accessibility for All</h4>
                    <p>Make Braille accessible to a broader audience.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-heart"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Foster Empathy</h4>
                    <p>Increase awareness and appreciation for the visually impaired.</p>
                  </div>
                </div>
              </div>

              <div className="about-actions">
                <a href="#portfolio" className="btn btn-brand"><i className="bi bi-lightbulb"></i> Start Braille</a>
                <a href="#contact" className="btn btn-outline">See how it works</a>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="about-image-wrapper">
            <div className="about-image">
              <img 
                src="/src/assets/3dkey-logo.png"
                alt="3D Key Logo"
                className="about-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
