import React from "react";
import "../../styles/events/Events.css";
import "../../styles/events/GratitudePortal.css";
import banner_img from "../../images/home/banner_img.jpeg";

const GratitudePortal = () => {
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
          <h1>Gratitude Portal</h1>
          <p>A space to honour the professors who shaped your journey at IIT Guwahati.</p>
        </div>
      </div>

      <div className="gp-body">
        <p className="gp-about-text">
          The Gratitude Portal is SAIL's Teachers Day initiative — a dedicated space for students and alumni
          to express appreciation for the professors who made a lasting difference. Share a memory, write a
          note, or simply say thank you to the mentors who guided you through IIT Guwahati.
        </p>
        <a
          href="https://iitg.ac.in/sail/gratitude_portal/"
          target="_blank"
          rel="noopener noreferrer"
          className="gp-cta-btn"
        >
          Visit the Portal
        </a>
      </div>
    </div>
  );
};

export default GratitudePortal;
