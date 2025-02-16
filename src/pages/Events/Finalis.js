import React, { useState, useEffect } from "react";
import "../../styles/events/Events.css";

// Import images properly if they are inside `src/images/Events/`
import banner from "../../images/Events/finalis_banner.png";

// Import all images explicitly
import img2024_1 from "../../images/Events/2024/finalis/image1.png";
import img2024_2 from "../../images/Events/2024/finalis/image2.png";
import img2024_3 from "../../images/Events/2024/finalis/image3.png";
import img2024_4 from "../../images/Events/2024/finalis/image4.png";
import img2024_5 from "../../images/Events/2024/finalis/image5.png";
import img2024_6 from "../../images/Events/2024/finalis/image6.png";
import img2024_7 from "../../images/Events/2024/finalis/image7.png";

import img2023_1 from "../../images/Events/2023/finalis/image1.jpg";
import img2023_2 from "../../images/Events/2023/finalis/image2.jpg";
import img2023_3 from "../../images/Events/2023/finalis/image3.jpg";
import img2023_4 from "../../images/Events/2023/finalis/image4.jpg";
import img2023_5 from "../../images/Events/2023/finalis/image5.jpg";
import img2023_6 from "../../images/Events/2023/finalis/image6.jpg";
import img2023_7 from "../../images/Events/2023/finalis/image7.jpg";
import img2023_8 from "../../images/Events/2023/finalis/image8.jpg";
import img2023_9 from "../../images/Events/2023/finalis/image9.jpg";

const Event = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [underlineStyle, setUnderlineStyle] = useState({});

  const photos = {
    2024: [img2024_1, img2024_2, img2024_3, img2024_4, img2024_5, img2024_6, img2024_7],
    2023: [img2023_1, img2023_2, img2023_3, img2023_4, img2023_5, img2023_6, img2023_7, img2023_8, img2023_9],
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
      <div
        className="header"
        style={{
          background: `linear-gradient(0deg, rgba(19, 19, 19, 0.86) 0%, rgba(19, 19, 19, 0.00) 100%), url(${banner}) lightgray 0px -75px / 100% 114.94% no-repeat`,
        }}
      >
        <div className="header-content">
          <h1>Finalis Resonare</h1>
          <p>
            The last note in the modal melody symbolizes the years spent in college. It is an event that is exclusively
            for the final year students, where everyone comes together in the month of April for one last time, to
            create everlasting memories, and to celebrate and cherish all that makes college life what it is. It is
            undoubtedly a fun-filled evening with cultural performances, award ceremonies, roasts, and many other
            events.
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
