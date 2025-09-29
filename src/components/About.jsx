import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import BraillePlayLogo from "../assets/BraillePlay.svg";
import BrailleLogo from "../assets/3dkey-logo.png";
import "./About.css";

const About = () => {
  const contentRef = useScrollAnimation({ animationClass: "slide-in-left" });
  const featuresRef = useScrollAnimation({ animationClass: "slide-in-right" });
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>About</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="about-container">
          {/* Left Content Column */}
          <div ref={contentRef} className="about-content-wrapper">
            <div className="about-content">
              {/* Logo */}
              <div className="about-logo-container">
                <img src={BrailleLogo} alt="Braille Play Logo" className="about-logo" />
              </div>

              {/* Text Content */}
              <div className="about-text">
                <h3 className="about-title">
                  Beyond Dots <br></br>- Braille for Everyone
                </h3>
                <p className="about-description">
                  Currently, Braille is not widely understood or utilized by non-disabled people. Braille Play bridges
                  this gap by offering a fun and accessible way for everyone to learn.
                </p>
              </div>
            </div>
          </div>

          {/* Right Features Column */}
          <div ref={featuresRef} className="about-features-wrapper">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-keyboard"></i>
                </div>
                <div className="feature-content">
                  <h4>2x4 Braille Input Device</h4>
                  <p>Practice Braille input with a dedicated 2x4 tactile device.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-laptop"></i>
                </div>
                <div className="feature-content">
                  <h4>Interactive Content</h4>
                  <p>Engage in games and quizzes for enjoyable learning.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-universal-access"></i>
                </div>
                <div className="feature-content">
                  <h4>Accessibility for All</h4>
                  <p>Make Braille accessible to a broader audience.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-heart"></i>
                </div>
                <div className="feature-content">
                  <h4>Foster Empathy</h4>
                  <p>Increase awareness and appreciation for the visually impaired.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
