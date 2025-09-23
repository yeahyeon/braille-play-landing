import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const InteractiveLearning = () => {
  const alphabetRef = useScrollAnimation({ animationClass: 'animate' });
  const numberRef = useScrollAnimation({ animationClass: 'animate' });
  const imageRef = useScrollAnimation({ animationClass: 'animate' });
  const mathRef = useScrollAnimation({ animationClass: 'animate' });

  return (
    <div className="main-features-section">
      <h3 className="main-features-section-title">Interactive Learning</h3>
      
      <div ref={alphabetRef} className="main-features-content main-features-slide-in-left">
        <div className="main-features-video-container">
          <video 
            className="main-features-video"
            controls
            muted
            preload="metadata"
            poster="/src/assets/feature-assets/alphabet-learning.png"
          >
            <source src="/src/assets/feature-assets/mov1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="main-features-description">
          <h4><i className="fas fa-font"></i> Alphabet Learning</h4>
          <p>Step-by-step guide from A to Z.</p>
          <p>Visual Braille cell representation and pronunciation support.</p>
          <p>Practice mode with instant feedback and corrections.</p>
        </div>
      </div>

      <div ref={numberRef} className="main-features-content number-learning-content main-features-slide-in-right">
        <div className="main-features-description">
          <h4><i className="fas fa-hashtag"></i> Number Learning</h4>
          <p>Visual and audio representations of numbers.</p>
          <p>Learn how to represent math in Braille.</p>
          <p>Practice mode for typing numbers on the device.</p>
        </div>
        
        <div className="main-features-video-container">
          <video 
            className="main-features-video"
            controls
            muted
            preload="metadata"
            poster="/src/assets/feature-assets/number-learning.png"
          >
            <source src="/src/assets/feature-assets/mov3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div ref={imageRef} className="main-features-content main-features-slide-in-left">
        <div className="main-features-video-container">
          <video 
            className="main-features-video"
            controls
            muted
            preload="metadata"
            poster="/src/assets/feature-assets/image-to-braille.png"
          >
            <source src="/src/assets/feature-assets/mov4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="main-features-description">
          <h4><i className="fas fa-image"></i> Image-to-Braille</h4>
          <p>Identify an image.</p>
          <p>Input the corresponding Braille word.</p>
          <p>A fun and educational way to test your knowledge.</p>
        </div>
      </div>

      <div ref={mathRef} className="main-features-content math-quiz-content main-features-slide-in-right">
        <div className="main-features-description">
          <h4><i className="fas fa-plus"></i> Math Quiz</h4>
          <p>Solve simple arithmetic problems using Braille numerals.</p>
          <p>A puzzle that challenges your Braille knowledge.</p>
          <p>A practical exercise to reinforce your learning.</p>
        </div>
        
        <div className="main-features-video-container">
          <video 
            className="main-features-video"
            controls
            muted
            preload="metadata"
            poster="/src/assets/feature-assets/math-quiz.png"
          >
            <source src="/src/assets/feature-assets/mov5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default InteractiveLearning;
