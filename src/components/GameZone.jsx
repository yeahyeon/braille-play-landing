import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GameZone = () => {
  const gameZoneRef = useScrollAnimation({ animationClass: 'animate' });

  return (
    <section id="game-zone" className="game-zone-section section">
      <div className="container">
        <div className="main-features-section">
          <h3 className="main-features-section-title">Game Zone</h3>
          
          <div ref={gameZoneRef} className="main-features-content main-features-slide-in-left">
            <div className="main-features-video-container">
              <video 
                className="main-features-video"
                controls
                muted
                preload="metadata"
                poster="/src/assets/feature-assets/typing-game.png"
              >
                <source src="/src/assets/feature-assets/mov6.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="main-features-description">
              <h4><i className="fas fa-gamepad"></i> Typing Game</h4>
              <p>Practice typing Braille characters quickly and accurately.</p>
              <p>Increase speed and familiarity with the Braille alphabet.</p>
              <p>A fun and interactive way to gain proficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameZone;
