import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProgressTracking = () => {
  const stageRef = useScrollAnimation({ animationClass: 'slide-in-left' });
  const historyRef = useScrollAnimation({ animationClass: 'slide-in-right' });
  const badgesRef = useScrollAnimation({ animationClass: 'slide-in-left' });

  return (
    <div className="main-features-section">
      <h3 className="main-features-section-title">Progress Tracking</h3>
      
      <div ref={stageRef} className="main-features-content">
        <div className="main-features-image-container">
          <img 
            src="/src/assets/feature-assets/my-learning-stage.png"
            alt="My Learning Stage"
            className="main-features-image"
          />
        </div>
        
        <div className="main-features-description">
          <h4><i className="fas fa-chart-line"></i> My Learning Stage</h4>
          <p>Track your mastery of letters and numbers.</p>
          <p>Monitor your learning progress.</p>
          <p>Provides a sense of accomplishment.</p>
        </div>
      </div>

      <div ref={historyRef} className="main-features-content game-history-content">
        <div className="main-features-description">
          <h4><i className="fas fa-trophy"></i> Game History</h4>
          <p>View your scores, rankings, and past plays.</p>
          <p>Analyze your performance to see where you can improve.</p>
          <p>Promotes friendly competition with leaderboards.</p>
        </div>
        
        <div className="main-features-image-container">
          <img 
            src="/src/assets/feature-assets/game-history.png"
            alt="Game History"
            className="main-features-image"
          />
        </div>
      </div>

      <div ref={badgesRef} className="main-features-content">
        <div className="main-features-image-container">
          <img 
            src="/src/assets/feature-assets/badges-and-achievements.png"
            alt="Badges and Achievements"
            className="main-features-image"
          />
        </div>
        
        <div className="main-features-description">
          <h4><i className="fas fa-star"></i> Badges & Achievements</h4>
          <p>Earn rewards for completing activities and milestones.</p>
          <p>A motivational system for students.</p>
          <p>Provides a sense of accomplishment and encourages continued learning.</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
