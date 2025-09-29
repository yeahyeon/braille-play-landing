import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Hero.css";

const Hero = () => {
  const titleRef = useScrollAnimation({ animationClass: "slide-in-left" });
  const contentRef = useScrollAnimation({ animationClass: "slide-in-left", rootMargin: "0px 0px -50px 0px" });
  const imageRef = useScrollAnimation({ animationClass: "slide-in-right", rootMargin: "0px 0px -50px 0px" });
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="hero-container">
          <div ref={contentRef} className="hero-content-wrapper">
            <div className="content-wrapper">
              <h1 ref={titleRef} className="hero-title">
                <span className="typed">Braille Play</span>
                <br />
                an intuitive way to learn Braille
              </h1>

              <p className="lead">Start playing and bridge the gap in awareness with our interactive web platform.</p>

              <div className="hero-actions">
                <a
                  href="https://braille-app-19a76.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-brand"
                >
                  <i className="bi bi-play-circle"></i> Start Braille
                </a>
                <a href="#main-features" className="btn btn-outline">
                  See how it works
                </a>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="hero-image-wrapper">
            <div className="laptop-frame">
              <div className="laptop-screen">
                <div className="screen-content">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <div className="browser-url">braille-play.com</div>
                  </div>
                  <div className="web-content">
                  <img
  src="/src/assets/feature-assets/playgif1.gif"
  alt="Hero Image"
  className="img-fluid hero-main-image"
/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
