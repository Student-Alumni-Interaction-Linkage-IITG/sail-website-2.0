import React, { useState, useEffect } from "react";
import "../../styles/Home/Alumni_award.css";

import img from "../../images/home/sailhome1.png";
import img2 from "../../images/home/group_photo.svg";
import VerticalSlider from './vslid';

const photoData = [
  { id: 1, image: img },
  { id: 2, image: img2 },
  { id: 3, image: img },
  { id: 4, image: img2 },
  { id: 5, image: img },
  { id: 6, image: img2 },
  { id: 7, image: img },
];

const Aa = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photoData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="aa-container1">
      <div className="aa-Alumni">
        {/* Left content */}
        <div className="aa-card1">
          <div className="aa-card-content1">
            <h1>Alumni Awards</h1>
            <div className="aa-card2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies, ligula in tincidunt lacinia, nunc sapien ultricies
                purus, eget ultricies nunc elit nec purus. Nullam at nunc
                ultricies, ultricies purus nec, ultricies nunc. Nullam at nunc
              </p>
              <div className="aa-buttons">
                <button className="aa-buttons-apply" onClick={() => window.open('https://www.iitg.ac.in/aer/alumni_award', '_blank', 'noopener,noreferrer')}>Apply</button>
                <button className="aa-buttons-readmore" onClick={() => window.open('https://online.iitg.ac.in/aerportal/nomination/', '_blank', 'noopener,noreferrer')}>Read More</button>
              </div>
            </div>
          </div>
          <div className="aa-card-image1">
            <img
              src={photoData[currentIndex].image}
              alt={`Alumni Award ${currentIndex + 1}`}
            />
            {/* Dot navigation */}
            <div className="carousel-dots">
              {photoData.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="aa-card3">
        <VerticalSlider/>
        </div>
      </div>
    </div>
  );
};

export default Aa;
