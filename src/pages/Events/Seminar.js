import React, { useState, useEffect } from "react";
import "../../styles/events/Events.css";
import banner_img from "../../images/home/banner_img.jpeg";

const Event = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const photos = {
    2024: Array.from({ length: 10 }, (_, i) => `/image/Events/2024/seminar/image${i + 1}.jpg`),
    2023: Array.from({ length: 7 }, (_, i) => `/image/Events/2023/seminar/image${i + 1}.jpg`),
  };

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
      <div className="header"
      style={{
        background: `linear-gradient(0deg, rgba(19, 19, 19, 0.86) 0%, rgba(19, 19, 19, 0.00) 100%),
        url(${banner_img}) lightgray 0px -75px / 100% 114.94% no-repeat`}}
      >
        <div className="header-content">
          <h1>Seminars</h1>
          <p>
          Insightful sessions to expand knowledge and spark conversations.
          </p>
        </div>
      </div>
      <div className="frames-container">
      <h2 className="events-sections">Frame Of Memories</h2>
        <div className="year-selector">
          {Object.keys(photos).sort((a, b) => b - a).map((year) => (
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
