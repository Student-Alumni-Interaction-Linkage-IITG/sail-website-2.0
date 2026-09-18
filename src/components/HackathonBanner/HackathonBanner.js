import React, { useState } from 'react';
import '../../styles/HackathonBanner/HackathonBanner.css';

const HackathonBanner = ({
  targetUrl = '/sail/events-latent48',
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <aside className="hackathon-floating-banner" aria-label="LATENT48 Hackathon Announcement">
      {/* Top right close button */}
      <button
        className="hackathon-banner-close-btn"
        onClick={() => setIsDismissed(true)}
        aria-label="Close Hackathon notification"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* 1. Left Icon Area */}
      <div className="hackathon-banner-left">
        <div className="hackathon-icon-container">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <div className="hackathon-banner-divider"></div>
      </div>

      {/* 2. Main Content Area */}
      <div className="hackathon-banner-content">
        <span className="hackathon-banner-tag">Upcoming Event • 25–27 Sep</span>
        <h3 className="hackathon-banner-title">LATENT48: SAIL × Granica</h3>
        <p className="hackathon-banner-desc">
          48-Hr Offline Hackathon at IIT Guwahati • ₹1L Prizes & PPIs
        </p>
      </div>

      {/* 3. CTA Area */}
      <div className="hackathon-banner-cta">
        <a href={targetUrl} className="hackathon-portal-button">
          <span>View Details</span>
          <span className="hackathon-btn-arrow">→</span>
        </a>
      </div>
    </aside>
  );
};

export default HackathonBanner;
