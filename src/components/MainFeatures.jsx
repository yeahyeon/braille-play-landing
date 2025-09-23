import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './MainFeatures.css';

const MainFeatures = () => {
  const [activeTab, setActiveTab] = useState('interactive-learning');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [showVideoInfo, setShowVideoInfo] = useState({
    mov1: false,
    mov3: false,
    mov4: false,
    mov5: false,
    mov6: false
  });

  const tabsRef = useScrollAnimation({ animationClass: 'fade-in-up' });
  const contentRef = useScrollAnimation({ animationClass: 'fade-in-up', rootMargin: '0px 0px -50px 0px' });

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
                <ul ref={tabsRef} className="main-features-tab-filters">
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
                <div ref={contentRef} className="main-features-content">
            {activeTab === 'interactive-learning' && (
              <div className="main-features-feature-content active">
                <div className="interactive-learning-content">
                  <div className="learning-text">
                    {/* <h3>Interactive Learning</h3> */}
                    {/* <p>Experience Braille learning through our interactive platform with hands-on exercises and real-time feedback.</p> */}
                  </div>
                  <div className="learning-videos">
                    <div 
                      className={`video-container ${showVideoInfo.mov1 ? 'show-info' : ''}`}
                      onMouseEnter={() => setShowVideoInfo(prev => ({ ...prev, mov1: true }))}
                      onMouseLeave={() => setShowVideoInfo(prev => ({ ...prev, mov1: false }))}
                      onClick={() => {
                        if (showVideoInfo.mov1) {
                          setCurrentVideo('/src/assets/feature-assets/mov1.mp4');
                          setIsVideoModalOpen(true);
                        } else {
                          setShowVideoInfo(prev => ({ ...prev, mov1: true }));
                        }
                      }}
                    >
                      <video 
                        className="feature-video feature-video-1"
                        preload="metadata"
                        poster="/src/assets/feature-assets/alphabet-learning.png"
                      >
                        <source src="/src/assets/feature-assets/mov1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {showVideoInfo.mov1 && (
                        <div className="video-info-overlay">
                          <h4>Alphabet Learning</h4>
                          <p>Master the Braille alphabet from A-Z with visual and audio guides.</p>
                        </div>
                      )}
                      
                      <div className="video-overlay">
                        <div className="play-button" onClick={(e) => {
                          e.stopPropagation();
                          setCurrentVideo('/src/assets/feature-assets/mov1.mp4');
                          setIsVideoModalOpen(true);
                        }}>
                          <i className="bi bi-play-circle-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div 
                      className={`video-container ${showVideoInfo.mov3 ? 'show-info' : ''}`}
                      onMouseEnter={() => setShowVideoInfo(prev => ({ ...prev, mov3: true }))}
                      onMouseLeave={() => setShowVideoInfo(prev => ({ ...prev, mov3: false }))}
                      onClick={() => {
                        if (showVideoInfo.mov3) {
                          setCurrentVideo('/src/assets/feature-assets/mov3.mp4');
                          setIsVideoModalOpen(true);
                        } else {
                          setShowVideoInfo(prev => ({ ...prev, mov3: true }));
                        }
                      }}
                    >
                      <video 
                        className="feature-video feature-video-3"
                        preload="metadata"
                        poster="/src/assets/feature-assets/number-learning.png"
                      >
                        <source src="/src/assets/feature-assets/mov3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {showVideoInfo.mov3 && (
                        <div className="video-info-overlay">
                          <h4>Number Learning</h4>
                          <p>Learn Braille numbers from 0-9.</p>
                        </div>
                      )}
                      
                      <div className="video-overlay">
                        <div className="play-button" onClick={(e) => {
                          e.stopPropagation();
                          setCurrentVideo('/src/assets/feature-assets/mov3.mp4');
                          setIsVideoModalOpen(true);
                        }}>
                          <i className="bi bi-play-circle-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div 
                      className={`video-container ${showVideoInfo.mov4 ? 'show-info' : ''}`}
                      onMouseEnter={() => setShowVideoInfo(prev => ({ ...prev, mov4: true }))}
                      onMouseLeave={() => setShowVideoInfo(prev => ({ ...prev, mov4: false }))}
                      onClick={() => {
                        if (showVideoInfo.mov4) {
                          setCurrentVideo('/src/assets/feature-assets/mov4.mp4');
                          setIsVideoModalOpen(true);
                        } else {
                          setShowVideoInfo(prev => ({ ...prev, mov4: true }));
                        }
                      }}
                    >
                      <video 
                        className="feature-video feature-video-4"
                        preload="metadata"
                        poster="/src/assets/feature-assets/image-to-braille.png"
                      >
                        <source src="/src/assets/feature-assets/mov4.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {showVideoInfo.mov4 && (
                        <div className="video-info-overlay">
                          <h4>Image to Braille</h4>
                          <p>Identify images and type the corresponding Braille words.</p>
                        </div>
                      )}
                      
                      <div className="video-overlay">
                        <div className="play-button" onClick={(e) => {
                          e.stopPropagation();
                          setCurrentVideo('/src/assets/feature-assets/mov4.mp4');
                          setIsVideoModalOpen(true);
                        }}>
                          <i className="bi bi-play-circle-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div 
                      className={`video-container ${showVideoInfo.mov5 ? 'show-info' : ''}`}
                      onMouseEnter={() => setShowVideoInfo(prev => ({ ...prev, mov5: true }))}
                      onMouseLeave={() => setShowVideoInfo(prev => ({ ...prev, mov5: false }))}
                      onClick={() => {
                        if (showVideoInfo.mov5) {
                          setCurrentVideo('/src/assets/feature-assets/mov5.mp4');
                          setIsVideoModalOpen(true);
                        } else {
                          setShowVideoInfo(prev => ({ ...prev, mov5: true }));
                        }
                      }}
                    >
                      <video 
                        className="feature-video feature-video-5"
                        preload="metadata"
                        poster="/src/assets/feature-assets/math-quiz.png"
                      >
                        <source src="/src/assets/feature-assets/mov5.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {showVideoInfo.mov5 && (
                        <div className="video-info-overlay">
                          <h4>Math Quiz</h4>
                          <p>Solve basic arithmetic problems using Braille numbers.</p>
                        </div>
                      )}
                      
                      <div className="video-overlay">
                        <div className="play-button" onClick={(e) => {
                          e.stopPropagation();
                          setCurrentVideo('/src/assets/feature-assets/mov5.mp4');
                          setIsVideoModalOpen(true);
                        }}>
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
                <div className="interactive-learning-content">
                  <div className="learning-text">
                    {/* <h3>Game Zone</h3> */}
                    {/* <p>Content for Game Zone will be displayed here.</p> */}
                  </div>
                  <div className="learning-videos">
                    <div 
                      className={`video-container ${showVideoInfo.mov6 ? 'show-info' : ''}`}
                      onMouseEnter={() => setShowVideoInfo(prev => ({ ...prev, mov6: true }))}
                      onMouseLeave={() => setShowVideoInfo(prev => ({ ...prev, mov6: false }))}
                      onClick={() => {
                        if (showVideoInfo.mov6) {
                          setCurrentVideo('/src/assets/feature-assets/mov6.mp4');
                          setIsVideoModalOpen(true);
                        } else {
                          setShowVideoInfo(prev => ({ ...prev, mov6: true }));
                        }
                      }}
                    >
                      <video 
                        className="feature-video feature-video-6"
                        preload="metadata"
                        poster="/src/assets/feature-assets/typing-game.png"
                      >
                        <source src="/src/assets/feature-assets/mov6.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {showVideoInfo.mov6 && (
                        <div className="video-info-overlay">
                          <h4>Typing Game</h4>
                          <p>Improve your Braille typing speed and accuracy by quickly typing random letters and numbers.</p>
                        </div>
                      )}
                      
                      <div className="video-overlay">
                        <div className="play-button" onClick={(e) => {
                          e.stopPropagation();
                          setCurrentVideo('/src/assets/feature-assets/mov6.mp4');
                          setIsVideoModalOpen(true);
                        }}>
                          <i className="bi bi-play-circle-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
                  {activeTab === 'progress-tracking' && (
                    <div className="main-features-feature-content active">
                      <div className="progress-tracking-content">
                        <div className="progress-item">
                          <div className="progress-image-wrapper">
                            <img 
                              src="/src/assets/feature-assets/my-learning-stage.png"
                              alt="My Learning Stage"
                              className="progress-image"
                            />
                          </div>
                          <div className="progress-text">
                            <h4>My Learning Stage</h4>
                            <p>Track your mastery of Braille letters and numbers.</p>
                          </div>
                        </div>

                        <div className="progress-item game-history-item">
                          <div className="progress-image-wrapper">
                            <img 
                              src="/src/assets/feature-assets/game-history.png"
                              alt="Game History"
                              className="progress-image"
                            />
                          </div>
                          <div className="progress-text">
                            <h4>Game History</h4>
                            <p>View your scores, rankings, and past game plays.</p>
                          </div>
                        </div>

                        <div className="progress-item">
                          <div className="progress-image-wrapper">
                            <img 
                              src="/src/assets/feature-assets/badges-and-achievements.png"
                              alt="Badges and Achievements"
                              className="progress-image"
                            />
                          </div>
                          <div className="progress-text">
                            <h4>Badges & Achievements</h4>
                            <p>Earn rewards for completing activities and reaching milestones.</p>
                          </div>
                        </div>
                      </div>
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
