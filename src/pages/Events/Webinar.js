import React, { useState, useEffect } from "react";
import "../../styles/events/Events.css";

const Event = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const photos = {
    2024: Array.from({ length: 4 }, (_, i) => `/image/Events/2024/image${i + 1}.png`),
    2023: Array.from({ length: 4 }, (_, i) => `/image/Events/2023/image${i + 1}.png`),
    2022: Array.from({ length: 4 }, (_, i) => `/image/Events/2022/image${i + 1}.png`),
    2021: Array.from({ length: 4 }, (_, i) => `/image/Events/2021/image${i + 1}.png`),
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
          <h1>Graduation Tea Party</h1>
          <p>
            A celebration of your achievements and the bonds we’ve shared
            throughout this journey. Let's cherish the beautiful memories.
          </p>
        </div>
      </div>
      <div className="frames-container">
        <div className="year-selector">
          {Object.keys(photos).map((year) => (
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
