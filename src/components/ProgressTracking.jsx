import React from 'react';

const ProgressTracking = () => {
  return (
    <div className="main-features-section">
      <h3 className="main-features-section-title">Progress Tracking</h3>
      
      <div className="progress-tracking-description">
        <p className="section-description">Track progress and celebrate achievements to stay motivated.</p>
        
        <ul className="feature-list">
          <li>
            <i className="fas fa-chart-line"></i>
            <div className="feature-item">
              <h4>My Learning Stage</h4>
              <p>Monitor mastery of letters and numbers.</p>
            </div>
          </li>
          <li>
            <i className="fas fa-trophy"></i>
            <div className="feature-item">
              <h4>Game History</h4>
              <p>Review scores, rankings, and past plays.</p>
            </div>
          </li>
          <li>
            <i className="fas fa-star"></i>
            <div className="feature-item">
              <h4>Badges & Achievements</h4>
              <p>Earn rewards for completing activities and milestones.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="progress-tracking-images-container">
        <div className="laptop-frame-small">
          <div className="laptop-screen-small">
            <div className="screen-content-small">
              <img src="/src/assets/feature-assets/my-learning-stage.png" alt="My Learning Stage" className="interactive-gif" />
            </div>
          </div>
        </div>
        
        <div className="laptop-frame-small">
          <div className="laptop-screen-small">
            <div className="screen-content-small">
              <img src="/src/assets/feature-assets/game-history.png" alt="Game History" className="interactive-gif" />
            </div>
          </div>
        </div>
        
        <div className="laptop-frame-small">
          <div className="laptop-screen-small">
            <div className="screen-content-small">
              <img src="/src/assets/feature-assets/badges-and-achievements.png" alt="Badges & Achievements" className="interactive-gif" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
