import React, { useState, useEffect } from "react";
import "../../styles/events/Events.css";
import banner_img from "../../images/home/banner_img.jpeg";

// Importing 2023 images manually
import seminar2023_1 from "../../images/Events/2023/seminar/image1.jpg";
import seminar2023_2 from "../../images/Events/2023/seminar/image2.jpg";
import seminar2023_3 from "../../images/Events/2023/seminar/image3.jpg";
import seminar2023_4 from "../../images/Events/2023/seminar/image4.jpg";
import seminar2023_5 from "../../images/Events/2023/seminar/image5.jpg";
import seminar2023_6 from "../../images/Events/2023/seminar/image6.jpg";
import seminar2023_7 from "../../images/Events/2023/seminar/image7.jpg";

// Importing 2024 images manually
import seminar2024_1 from "../../images/Events/2024/seminar/image1.jpg";
import seminar2024_2 from "../../images/Events/2024/seminar/image2.jpg";
import seminar2024_3 from "../../images/Events/2024/seminar/image3.jpg";
import seminar2024_4 from "../../images/Events/2024/seminar/image4.jpg";
import seminar2024_5 from "../../images/Events/2024/seminar/image5.jpg";
import seminar2024_6 from "../../images/Events/2024/seminar/image6.jpg";
import seminar2024_7 from "../../images/Events/2024/seminar/image7.jpg";
import seminar2024_8 from "../../images/Events/2024/seminar/image8.jpg";
import seminar2024_9 from "../../images/Events/2024/seminar/image9.jpg";
import seminar2024_10 from "../../images/Events/2024/seminar/image10.jpg";

const photos = {
  2023: [
    seminar2023_1, seminar2023_2, seminar2023_3, seminar2023_4, 
    seminar2023_5, seminar2023_6, seminar2023_7
  ],
  2024: [
    seminar2024_1, seminar2024_2, seminar2024_3, seminar2024_4,
    seminar2024_5, seminar2024_6, seminar2024_7, seminar2024_8,
    seminar2024_9, seminar2024_10
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
          url(${banner_img}) lightgray 0px -75px / 100% 114.94% no-repeat`,
        }}
      >
        <div className="header-content">
          <h1>Seminars</h1>
          <p>Insightful sessions to expand knowledge and spark conversations.</p>
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
