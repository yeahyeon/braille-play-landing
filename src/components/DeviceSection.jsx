import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./DeviceSection.css";
import brailleHw1 from '../assets/device/braille-hw.jpg';
import brailleHw2 from '../assets/device/braille-hw2.jpg';
import brailleVideo from '../assets/device/braille-play.mp4';
import braillePoster from '../assets/device/braille-play-poster.png';

const DeviceSection = () => {
  const imageRef = useScrollAnimation({ animationClass: "slide-in-left" });
  const contentRef = useScrollAnimation({ animationClass: "slide-in-right" });
  const videoRef = useScrollAnimation({ animationClass: "fade-in-up" });

  return (
    <section id="device-section" className="device-section section">
      <div className="container">
        {/* 최상단 제목 */}
        <div className="device-section-title">
          <h2>The Braille Play Device</h2>
        </div>

        {/* 상단 부분: 왼쪽 이미지, 오른쪽 설명 */}
        <div className="device-top-section">
          <div ref={imageRef} className="device-image-container">
            <div className="photo-stack">
              <figure className="photo p1">
                <img src={brailleHw1} alt="The Braille Play 2x4 Device" className="device-image" />
              </figure>
              <figure className="photo p2">
                <img src={brailleHw2} alt="The Braille Play 2x4 Device" className="device-image" />
              </figure>
            </div>
          </div>
          
          <div ref={contentRef} className="device-content">
            <p className="device-description">
              The Braille Play device provides tactile feedback as you interact with it, creating a more engaging and
              immersive learning experience. It integrates directly with our web content, enabling you to input
              Braille characters and receive immediate visual or tactile feedback, ensuring you're entering the
              correct symbols. This seamless digital integration allows you to practice and apply what you've learned
              in real-time, reinforcing your skills with every input.
            </p>
          </div>
        </div>

        {/* 하단 부분: Web Content in Action 제목과 비디오 */}
        <div ref={videoRef} className="device-bottom-section">
          <h3 className="video-title">Web Content in Action</h3>
          <div className="video-container">
            <video
              src={brailleVideo}
              className="device-video"
              controls
              muted
              preload="metadata"
              poster={braillePoster}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceSection;
