import React, { useState, useEffect } from "react";
import "../../styles/events/Events.css";
import bannerImage from "../../images/Events/ball_banner.png";

// Importing 2023 images manually
import ball2023_1 from "../../images/Events/2023/ball/image1.jpg";
import ball2023_2 from "../../images/Events/2023/ball/image2.jpg";
import ball2023_3 from "../../images/Events/2023/ball/image3.jpg";
import ball2023_4 from "../../images/Events/2023/ball/image4.jpg";
import ball2023_5 from "../../images/Events/2023/ball/image5.jpg";
import ball2023_6 from "../../images/Events/2023/ball/image6.jpg";
import ball2023_7 from "../../images/Events/2023/ball/image7.jpg";
import ball2023_8 from "../../images/Events/2023/ball/image8.jpg";
import ball2023_9 from "../../images/Events/2023/ball/image9.jpg";

// Importing 2024 images manually
import ball2024_1 from "../../images/Events/2024/ball/image1.JPG";
import ball2024_2 from "../../images/Events/2024/ball/image2.JPG";
import ball2024_3 from "../../images/Events/2024/ball/image3.JPG";
import ball2024_4 from "../../images/Events/2024/ball/image4.JPG";
import ball2024_5 from "../../images/Events/2024/ball/image5.JPG";
import ball2024_6 from "../../images/Events/2024/ball/image6.JPG";
import ball2024_7 from "../../images/Events/2024/ball/image7.JPG";
import ball2024_8 from "../../images/Events/2024/ball/image8.JPG";
import ball2024_9 from "../../images/Events/2024/ball/image9.JPG";
import ball2024_10 from "../../images/Events/2024/ball/image10.JPG";
import ball2024_11 from "../../images/Events/2024/ball/image11.JPG";
import ball2024_12 from "../../images/Events/2024/ball/image12.JPG";

const photos = {
  2023: [ball2023_1, ball2023_2, ball2023_3, ball2023_4, ball2023_5, ball2023_6, ball2023_7, ball2023_8, ball2023_9],
  2024: [ball2024_1, ball2024_2, ball2024_3, ball2024_4, ball2024_5, ball2024_6, ball2024_7, ball2024_8, ball2024_9, ball2024_10, ball2024_11, ball2024_12],
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
          <h1>Graduation Ball Dance</h1>
          <p>
            The Graduation Ball Dance is a formal event celebrating the culmination of academic
            achievements. It typically features elegant attire, music, and dancing, providing
            students with a memorable night to commemorate their journey. This event often marks a
            significant milestone, fostering camaraderie and lasting memories among graduates.
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
