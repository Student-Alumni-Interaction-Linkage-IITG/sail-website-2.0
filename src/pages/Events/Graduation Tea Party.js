import React, { useState, useEffect } from "react";
import "../../styles/events/Events.css";

const Event = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const photos = {
    2024: Array.from({ length: 4 }, (_, i) => `/image/Events/2024/gtp/image${i + 1}.jpg`),
    2023: Array.from({ length: 9 }, (_, i) => `/image/Events/2023/gtp/image${i + 1}.jpg`),
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
      // style={{
      //   background: `linear-gradient(0deg, rgba(19, 19, 19, 0.86) 0%, rgba(19, 19, 19, 0.00) 100%),
      //   url('/image/Events/gtp_banner.jpg') lightgray 0px -75px / 100% 114.94% no-repeat`}}
      >
        <div className="header-content">
          <h1>Graduation Tea Party</h1>
          <p>
          The Graduation Tea Party, or GTP, is the graduating class's formal parting celebration. Every year, SAIL organizes the Graduation Tea Party in the month of April. While emotions and applause turn this occasion into a lifelong memory, it also serves as a benchmark for the commencement of a new beginning.
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
