import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <h1 className="hero-title"><span className="typed">Braille Play</span><br />an intuitive way to learn Braille</h1>
        
        <div className="row">
          <div className="hero-content">
            <div className="content-wrapper">
              <p className="lead">Braille Play provides an interactive platform with a 2x4 Braille input device and web content. 
                Learn Braille easily and accessibly, ultimately increasing awareness and fostering empathy toward the visually impaired.</p>

              <div className="hero-actions">
                <a href="#portfolio" className="btn btn-brand"><i className="bi bi-lightbulb"></i> Start Braille</a>
                <a href="#contact" className="btn btn-outline">See how it works</a>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <i className="bi bi-palette"></i>
                  <span>UI/UX Design</span>
                </div>
                <div className="floating-card card-2">
                  <i className="bi bi-code-slash"></i>
                  <span>Development</span>
                </div>
                <div className="floating-card card-3">
                  <i className="bi bi-lightning"></i>
                  <span>Creative Ideas</span>
                </div>
              </div>
              <img src="/src/assets/hero-bg.webp" alt="Portfolio Hero" className="img-fluid hero-main-image" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
