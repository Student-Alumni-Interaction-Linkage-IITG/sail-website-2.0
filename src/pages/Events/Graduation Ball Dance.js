import React, { useState, useEffect } from "react";
import "../../styles/events/Events.css";

const Event = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const photos = {
    2023: Array.from({ length: 9 }, (_, i) => `/image/Events/2023/ball/image${i + 1}.jpg`),

    2024: Array.from({ length: 12 }, (_, i) => `/image/Events/2024/ball/image${i + 1}.JPG`)
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
      <div className="header">
        <div className="header-content">
          <h1>Graduation Ball Dance</h1>
          <p>
          The Graduation Ball Dance is a formal event celebrating the culmination of academic achievements. It typically features elegant attire, music, and dancing, providing students with a memorable night to commemorate their journey. This event often marks a significant milestone, fostering camaraderie and lasting memories among graduates.
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
