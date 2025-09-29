import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import playgif1 from '../assets/feature-assets/playgif1.gif';
import playgif3 from '../assets/feature-assets/playgif3.gif';
import playgif4 from '../assets/feature-assets/playgif4.gif';

const InteractiveLearning = () => {
  const descriptionRef = useScrollAnimation({ animationClass: 'animate' });
  const gifsRef = useScrollAnimation({ animationClass: 'animate' });

  return (
    <div className="main-features-section">
      <h3 className="main-features-section-title">Interactive Learning</h3>
      
      <div ref={descriptionRef} className="interactive-learning-description main-features-slide-in-left">
        <p className="section-description">Learn Braille in an engaging and hands-on way, combining visual, audio, and interactive practice to build confidence step by step.</p>
        
        <ul className="feature-list">
          <li>
            <i className="fas fa-font"></i>
            <div className="feature-item">
              <h4>Alphabet Learning</h4>
              <p>Learn letters A-Z with visual Braille and audio guidance.</p>
            </div>
          </li>
          <li>
            <i className="fas fa-hashtag"></i>
            <div className="feature-item">
              <h4>Number Learning</h4>
              <p>Explore numbers and math in Braille with instant feedback.</p>
            </div>
          </li>
          <li>
            <i className="fas fa-image"></i>
            <div className="feature-item">
              <h4>Image-to-Braille</h4>
              <p>Convert images to Braille words for fun practice.</p>
            </div>
          </li>
        </ul>
      </div>

      <div ref={gifsRef} className="interactive-gifs-container main-features-slide-in-right">
        <div className="laptop-frame-small">
          <div className="laptop-screen-small">
            <div className="screen-content-small">
              <img src={playgif1} alt="Interactive Learning Demo 1" className="interactive-gif" />
            </div>
          </div>
        </div>
        
        <div className="laptop-frame-small">
          <div className="laptop-screen-small">
            <div className="screen-content-small">
              <img src={playgif3} alt="Interactive Learning Demo 2" className="interactive-gif" />
            </div>
          </div>
        </div>
        
        <div className="laptop-frame-small">
          <div className="laptop-screen-small">
            <div className="screen-content-small">
              <img src={playgif4} alt="Interactive Learning Demo 3" className="interactive-gif" />
            </div>
          </div>
        </div>
      </div>
      
      
      

    </div>
  );
};

export default InteractiveLearning;
