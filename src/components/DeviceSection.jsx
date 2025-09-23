import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './DeviceSection.css';

const DeviceSection = () => {
  const contentRef = useScrollAnimation({ animationClass: 'slide-in-left' });
  const mediaRef = useScrollAnimation({ animationClass: 'fade-in-up' });

  return (
    <section id="device-section" className="device-section section">
      <div className="container">
        <div className="device-container">
          <div ref={contentRef} className="device-content-wrapper">
            <div className="device-content">
              <h3 className="device-subtitle">The Braille Play Device</h3>
              <p className="device-description">
                The Braille Play device provides tactile feedback as you interact with it, creating a more engaging and immersive learning experience. It integrates directly with our web content, enabling you to input Braille characters and receive immediate visual or tactile feedback, ensuring you're entering the correct symbols. This seamless digital integration allows you to practice and apply what you've learned in real-time, reinforcing your skills with every input.
              </p>
            </div>
          </div>
        </div>
        
        <div ref={mediaRef} className="device-media-container">
          <div className="media-item">
            <h4 className="media-title">The Braille Play 2x4 Device</h4>
            <div className="media-content">
              <img 
                src="/src/assets/device/braille-hw.jpg" 
                alt="The Braille Play 2x4 Device"
                className="device-image"
              />
            </div>
          </div>
          
          <div className="media-item">
            <h4 className="media-title">Web Content in Action</h4>
            <div className="media-content">
              <video 
                src="/src/assets/device/braille-play.mp4" 
                className="device-video"
                controls
                muted
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceSection;
