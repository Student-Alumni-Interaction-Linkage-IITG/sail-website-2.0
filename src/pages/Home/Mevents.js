import React, { useState, useRef } from "react";
import "../../styles/Home/Events1.css";
import logo from '../../images/sailhome1.png';

const slides = [
  { image: logo, caption: "International Students Day" },
  { image: logo, caption: "Event 2" },
  { image: logo, caption: "Event 3" },
  // Add more slides as needed
];

const MEvents= () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  // Handle swipe start
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  // Handle swipe move
  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  // Handle swipe end
  const handleTouchEnd = () => {
    const threshold = 50; // Minimum swipe distance to trigger a slide change
    if (startX.current - endX.current > threshold) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else if (endX.current - startX.current > threshold) {
      // Swipe right
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">Our Events</h2>
      <p className="slider-subtitle">Corem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className="slide-content" key={index}>
              <img src={slide.image} alt={slide.caption} className="slide-image" />
              <div className="caption">{slide.caption}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MEvents;
