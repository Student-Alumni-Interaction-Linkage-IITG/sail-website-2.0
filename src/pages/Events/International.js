import React, { useState, useEffect } from "react";
import "../../styles/events/Events.css";
import bannerImage from "../../images/Events/internation_banner.jpeg";

// Importing 2023 images manually
import international2023_1 from "../../images/Events/2023/international/image1.jpg";

// Importing 2024 images manually
import international2024_1 from "../../images/Events/2024/international/image1.jpeg";

const photos = {
  2023: [international2023_1],
  2024: [international2024_1],
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
          url(${bannerImage}) lightgray 0px -75px / 100% 114.94% no-repeat`,
        }}
      >
        <div className="header-content">
          <h1>International Students' Day</h1>
          <p>
            IITG welcomes a large number of international interns and exchange students throughout
            the year and actively promotes their stay during the academic/summer semesters.
            International Students' Day is a yearly event put on by SAIL, celebrated in November,
            when students from outside the subcontinent take part in a variety of activities and
            showcase their talents. Celebrating diversity reflects how unique IIT Guwahati’s
            tradition is.
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
