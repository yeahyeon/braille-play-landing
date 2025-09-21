import React, { useState } from 'react';
import './MainFeatures.css';

const MainFeatures = () => {
  const [activeTab, setActiveTab] = useState('interactive-learning');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

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
    <>
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
                <div className="interactive-learning-content">
                  <div className="learning-text">
                    <h3>Interactive Learning</h3>
                    <p>Experience Braille learning through our interactive platform with hands-on exercises and real-time feedback.</p>
                  </div>
                  <div className="learning-videos">
                    <div className="video-container" onClick={() => {
                      setCurrentVideo('/src/assets/feature-assets/mov1.mp4');
                      setIsVideoModalOpen(true);
                    }}>
                      <video 
                        className="feature-video feature-video-1"
                        preload="metadata"
                        poster="/src/assets/feature-assets/alphabet-learning.png"
                      >
                        <source src="/src/assets/feature-assets/mov1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="video-overlay">
                        <div className="play-button">
                          <i className="bi bi-play-circle-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="video-container" onClick={() => {
                      setCurrentVideo('/src/assets/feature-assets/mov3.mp4');
                      setIsVideoModalOpen(true);
                    }}>
                      <video 
                        className="feature-video feature-video-3"
                        preload="metadata"
                        poster="/src/assets/feature-assets/number-learning.png"
                      >
                        <source src="/src/assets/feature-assets/mov3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="video-overlay">
                        <div className="play-button">
                          <i className="bi bi-play-circle-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="video-container" onClick={() => {
                      setCurrentVideo('/src/assets/feature-assets/mov4.mp4');
                      setIsVideoModalOpen(true);
                    }}>
                      <video 
                        className="feature-video feature-video-4"
                        preload="metadata"
                        poster="/src/assets/feature-assets/image-to-braille.png"
                      >
                        <source src="/src/assets/feature-assets/mov4.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="video-overlay">
                        <div className="play-button">
                          <i className="bi bi-play-circle-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="video-container" onClick={() => {
                      setCurrentVideo('/src/assets/feature-assets/mov5.mp4');
                      setIsVideoModalOpen(true);
                    }}>
                      <video 
                        className="feature-video feature-video-5"
                        preload="metadata"
                        poster="/src/assets/feature-assets/math-quiz.png"
                      >
                        <source src="/src/assets/feature-assets/mov5.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="video-overlay">
                        <div className="play-button">
                          <i className="bi bi-play-circle-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

        {/* Video Modal */}
        {isVideoModalOpen && (
          <div className="video-modal-overlay" onClick={() => setIsVideoModalOpen(false)}>
            <div className="video-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-btn"
                onClick={() => setIsVideoModalOpen(false)}
              >
                <i className="bi bi-x-circle"></i>
              </button>
              <video 
                className="modal-video"
                controls
                autoPlay
                src={currentVideo}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </>
    );
  };

  export default MainFeatures;
