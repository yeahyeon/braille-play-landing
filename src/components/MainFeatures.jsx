import React from 'react';
import InteractiveLearning from './InteractiveLearning';
import GameZone from './GameZone';
import ProgressTracking from './ProgressTracking';
import './MainFeatures.css';

const MainFeatures = () => {
  return (
    <>
      <section id="main-features" className="main-features section">
        {/* Section Title */}
        <div className="container section-title">
          <h2>Main Features</h2>
        </div>

        <div className="container">
          <InteractiveLearning />
        </div>
      </section>
      
      <GameZone />
      
      <section className="main-features section">
        <div className="container">
          <ProgressTracking />
        </div>
      </section>
    </>
  );
};

  export default MainFeatures;
