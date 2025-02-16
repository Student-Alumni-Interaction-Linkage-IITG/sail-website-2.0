import React, { useState, useEffect } from "react";
import "../../styles/events/Events.css";
import bannerImage from "../../images/Events/gtp_banner.png";

// Importing 2023 images manually
import gtp2023_1 from "../../images/Events/2023/gtp/image1.jpg";
import gtp2023_2 from "../../images/Events/2023/gtp/image2.jpg";
import gtp2023_3 from "../../images/Events/2023/gtp/image3.jpg";
import gtp2023_4 from "../../images/Events/2023/gtp/image4.jpg";
import gtp2023_5 from "../../images/Events/2023/gtp/image5.jpg";
import gtp2023_6 from "../../images/Events/2023/gtp/image6.jpg";
import gtp2023_7 from "../../images/Events/2023/gtp/image7.jpg";
import gtp2023_8 from "../../images/Events/2023/gtp/image8.jpg";
import gtp2023_9 from "../../images/Events/2023/gtp/image9.jpg";

// Importing 2024 images manually
import gtp2024_1 from "../../images/Events/2024/gtp/image1.jpg";
import gtp2024_2 from "../../images/Events/2024/gtp/image2.jpg";
import gtp2024_3 from "../../images/Events/2024/gtp/image3.jpg";
import gtp2024_4 from "../../images/Events/2024/gtp/image4.jpg";

const photos = {
  2023: [gtp2023_1, gtp2023_2, gtp2023_3, gtp2023_4, gtp2023_5, gtp2023_6, gtp2023_7, gtp2023_8, gtp2023_9],
  2024: [gtp2024_1, gtp2024_2, gtp2024_3, gtp2024_4],
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
          <h1>Graduation Tea Party</h1>
          <p>
            The Graduation Tea Party, or GTP, is the graduating class's formal parting celebration.
            Every year, SAIL organizes the Graduation Tea Party in the month of April. While
            emotions and applause turn this occasion into a lifelong memory, it also serves as a
            benchmark for the commencement of a new beginning.
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
