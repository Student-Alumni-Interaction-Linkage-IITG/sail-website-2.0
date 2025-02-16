import React, { useState, useEffect } from "react";
import "../../styles/events/Events.css";
import smriti_banner from "../../images/Events/smriti_banner.png";

// Importing Smriti 2024 images manually
import smriti2024_1 from "../../images/Events/2024/smriti/image1.jpeg";
import smriti2024_2 from "../../images/Events/2024/smriti/image2.jpeg";
import smriti2024_3 from "../../images/Events/2024/smriti/image3.jpeg";
import smriti2024_4 from "../../images/Events/2024/smriti/image4.jpeg";
import smriti2024_5 from "../../images/Events/2024/smriti/image5.jpeg";
import smriti2024_6 from "../../images/Events/2024/smriti/image6.jpeg";
import smriti2024_7 from "../../images/Events/2024/smriti/image7.jpeg";
import smriti2024_8 from "../../images/Events/2024/smriti/image8.jpeg";
import smriti2024_9 from "../../images/Events/2024/smriti/image9.jpeg";

const photos = {
  2024: [
    smriti2024_1, smriti2024_2, smriti2024_3, smriti2024_4,
    smriti2024_5, smriti2024_6, smriti2024_7, smriti2024_8, smriti2024_9
  ],
};

const Event = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [underlineStyle, setUnderlineStyle] = useState({});

  const updateUnderlinePosition = () => {
    const activeTab = document.querySelector(".year-tab.active");
    if (activeTab) {
      setUnderlineStyle({
        width: `${activeTab.offsetWidth}px`,
        left: `${activeTab.offsetLeft}px`,
      });
    }
  };

  useEffect(() => {
    updateUnderlinePosition();
  }, [selectedYear]);

  useEffect(() => {
    window.addEventListener("resize", updateUnderlinePosition);
    return () => {
      window.removeEventListener("resize", updateUnderlinePosition);
    };
  }, []);

  return (
    <div className="event-container">
      <div
        className="header"
        style={{
          background: `linear-gradient(0deg, rgba(19, 19, 19, 0.86) 0%, rgba(19, 19, 19, 0.00) 100%),
          url(${smriti_banner}) lightgray 0px -75px / 100% 114.94% no-repeat`,
        }}
      >
        <div className="header-content">
          <h1>Smriti</h1>
          <p>
            Reunion of IIT Guwahati's batch after 25 years of graduation, is a heartfelt celebration of nostalgia and achievements. 
            Alumni from the pioneering class gather to relive their memories, reconnect with old friends, and reflect on their journeys since graduation.
          </p>
        </div>
      </div>
      <div className="frames-container">
        <h2 className="events-sections">Frame Of Memories</h2>
        <div className="year-selector">
          {Object.keys(photos)
            .sort((a, b) => b - a)
            .map((year) => (
              <div
                key={year}
                className={`year-tab ${selectedYear === year ? "active" : ""}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </div>
            ))}
          <div className="underline" style={underlineStyle}></div>
        </div>
        <div className="photos-grid">
          {photos[selectedYear].map((photo, index) => (
            <div key={index} className="photo-card">
              <img src={photo} alt={`${selectedYear} Memory ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
