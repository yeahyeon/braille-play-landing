import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="hero-title">Welcome to Braille Play</h1>
            <p className="hero-subtitle">Learn and practice Braille in an interactive and fun way</p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary">
                Get Started
              </a>
              <a href="#contact" className="btn btn-outline-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
