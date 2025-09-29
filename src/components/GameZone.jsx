import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GameZone = () => {
  const descriptionRef = useScrollAnimation({ animationClass: 'animate' });
  const gifsRef = useScrollAnimation({ animationClass: 'animate' });

  return (
    <section id="game-zone" className="game-zone-section section">
      <div className="container">
        <div className="main-features-section">
          <h3 className="main-features-section-title">Game Zone</h3>
          
          <div ref={descriptionRef} className="game-zone-description main-features-slide-in-left">
            <p className="section-description">Sharpen your Braille skills with fun, hands-on exercises.</p>
            
            <ul className="feature-list">
              <li>
                <i className="fas fa-gamepad"></i>
                <div className="feature-item">
                  <h4>Typing Game</h4>
                  <p>Practice typing Braille characters quickly and accurately.</p>
                </div>
              </li>
              <li>
                <i className="fas fa-plus"></i>
                <div className="feature-item">
                  <h4>Math Quiz</h4>
                  <p>Solve arithmetic problems using Braille numerals.</p>
                </div>
              </li>
            </ul>
          </div>

          <div ref={gifsRef} className="game-zone-gifs-container main-features-slide-in-right">
            <div className="laptop-frame-small">
              <div className="laptop-screen-small">
                <div className="screen-content-small">
                  <img src="/src/assets/feature-assets/mov5.gif" alt="Math Quiz Demo" className="interactive-gif" />
                </div>
              </div>
            </div>
            
            <div className="laptop-frame-small">
              <div className="laptop-screen-small">
                <div className="screen-content-small">
                  <img src="/src/assets/feature-assets/mov6.gif" alt="Typing Game Demo" className="interactive-gif" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameZone;
