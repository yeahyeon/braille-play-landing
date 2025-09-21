import React, { useState } from 'react';
import './MainFeatures.css';

const MainFeatures = () => {
  const [activeTab, setActiveTab] = useState('interactive-learning');

  const tabs = [
    {
      id: 'interactive-learning',
      label: 'Interactive Learning',
      icon: 'bi bi-book'
    },
    {
      id: 'game-zone',
      label: 'Game Zone',
      icon: 'bi bi-controller'
    },
    {
      id: 'progress-tracking',
      label: 'Progress Tracking',
      icon: 'bi bi-graph-up'
    }
  ];

  return (
    <section id="main-features" className="main-features section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Main Features</h2>
        {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
      </div>
      {/* End Section Title */}

      <div className="container-fluid">
        <div className="main-features-layout">
          {/* Tab Filters */}
          <ul className="main-features-tab-filters">
            {tabs.map((tab) => (
              <li 
                key={tab.id}
                className={activeTab === tab.id ? 'main-features-filter-active' : ''}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={tab.icon}></i>
                {tab.label}
              </li>
            ))}
          </ul>

          {/* Content Area */}
          <div className="main-features-content">
            {activeTab === 'interactive-learning' && (
              <div className="main-features-feature-content active">
                <h3>Interactive Learning</h3>
                <p>Content for Interactive Learning will be displayed here.</p>
              </div>
            )}
            {activeTab === 'game-zone' && (
              <div className="main-features-feature-content active">
                <h3>Game Zone</h3>
                <p>Content for Game Zone will be displayed here.</p>
              </div>
            )}
            {activeTab === 'progress-tracking' && (
              <div className="main-features-feature-content active">
                <h3>Progress Tracking</h3>
                <p>Content for Progress Tracking will be displayed here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
