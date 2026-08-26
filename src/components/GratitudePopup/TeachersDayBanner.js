import React, { useState } from 'react';
import '../../styles/GratitudePopup/TeachersDayBanner.css';

const TeachersDayBanner = ({
  portalUrl = 'https://iitg.ac.in/sail/gratitude_portal/',
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <aside className="teachers-day-floating-banner" aria-label="Teachers' Day Announcement">
      {/* Top right close button */}
      <button
        className="teachers-banner-close-btn"
        onClick={() => setIsDismissed(true)}
        aria-label="Close Teachers' Day notification"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* 1. Left Icon Area */}
      <div className="teachers-banner-left">
        <div className="teachers-icon-container">
          <svg className="teachers-book-svg" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Floating Heart */}
            <path
              d="M30 16.5 C28.2 13 23.5 11.5 20.2 14.5 C16 18.5 19 23 30 29 C41 23 44 18.5 39.8 14.5 C36.5 11.5 31.8 13 30 16.5 Z"
              stroke="#C9003D"
              strokeWidth="2.2"
              fill="rgba(201, 0, 61, 0.15)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Open Book Pages */}
            <path
              d="M30 33.5 C24 30 14 30 7 32.5 V46 C14 43.5 24 43.5 30 47 C36 43.5 46 43.5 53 46 V32.5 C46 30 36 30 30 33.5 Z"
              stroke="#062B45"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Center Spine */}
            <line x1="30" y1="33.5" x2="30" y2="47" stroke="#062B45" strokeWidth="2" strokeLinecap="round" />
            {/* Book Inner Page Details */}
            <path
              d="M11 36.5 C17 34.5 24 34.5 29 37.5"
              stroke="#062B45"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M49 36.5 C43 34.5 36 34.5 31 37.5"
              stroke="#062B45"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="teachers-banner-divider"></div>
      </div>

      {/* 2. Center Content Area */}
      <div className="teachers-banner-content">
        <h3 className="teachers-banner-title">Happy Teachers’ Day!</h3>
        <p className="teachers-banner-desc">
          Honoring the mentors who inspire, guide, and shape our journey.
        </p>
      </div>

      {/* 3. Right CTA Button Area */}
      <div className="teachers-banner-cta">
        <a
          href={portalUrl}
          target={portalUrl.startsWith('http') ? '_blank' : '_self'}
          rel={portalUrl.startsWith('http') ? 'noopener noreferrer' : ''}
          className="teachers-portal-button"
        >
          <span>Visit Gratitude Portal</span>
          <span className="teachers-btn-arrow">→</span>
        </a>
      </div>
    </aside>
  );
};

export default TeachersDayBanner;
