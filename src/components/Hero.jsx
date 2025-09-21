import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <h1 className="hero-title"><span className="typed">Braille Play</span><br />an intuitive way to learn Braille</h1>
        
        <div className="hero-container">
          <div className="hero-content-wrapper">
            <div className="content-wrapper">
              <p className="lead">Braille Play provides an interactive platform with a 2x4 Braille input device and web content. 
                Learn Braille easily and accessibly, ultimately increasing awareness and fostering empathy toward the visually impaired.</p>

              <div className="hero-actions">
                <a href="#portfolio" className="btn btn-brand"><i className="bi bi-lightbulb"></i> Start Braille</a>
                <a href="#contact" className="btn btn-outline">See how it works</a>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="image-container">
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <i className="bi bi-book"></i>
                  <span>Braille Learning</span>
                </div>
                <div className="floating-card card-2">
                  <i className="bi bi-controller"></i>
                  <span>Interactive Play</span>
                </div>
                <div className="floating-card card-3">
                  <i className="bi bi-graph-up"></i>
                  <span>Progress Tracking</span>
                </div>
              </div>
              <img src="/src/assets/hero-image.png" alt="Hero Image" className="img-fluid hero-main-image" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
