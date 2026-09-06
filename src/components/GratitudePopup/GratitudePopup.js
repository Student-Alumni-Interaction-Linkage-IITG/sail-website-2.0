import React, { useState, useEffect } from 'react';
import '../../styles/GratitudePopup/GratitudePopup.css';

const GratitudePopup = ({
  portalUrl = 'https://iitg.ac.in/sail/gratitude_portal/',
  title = 'Gratitude Portal',
  badgeText = 'Limited Time',
  description = 'Express your heartfelt appreciation and share memories with mentors, friends, and alumni.',
  buttonText = 'Visit Portal',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show popup with a smooth delay after page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = (e) => {
    e.stopPropagation();
    setIsMinimized(true);
  };

  const handleOpenMinimized = () => {
    setIsMinimized(false);
  };

  return (
    <div className="gratitude-popup-container" aria-label="Gratitude Portal Notification">
      {isMinimized ? (
        <button
          className="gratitude-minimized-badge"
          onClick={handleOpenMinimized}
          title="Open Gratitude Portal notification"
          aria-label="Open Gratitude Portal popup"
        >
          <span className="gratitude-mini-text">Gratitude Portal</span>
          <span className="gratitude-mini-pulse"></span>
        </button>
      ) : (
        <div className="gratitude-card animate-slide-in">
          <div className="gratitude-card-header">
            <div className="gratitude-badge">
              <span className="pulse-dot"></span>
              <span className="badge-text">{badgeText}</span>
            </div>
            <button
              className="gratitude-close-btn"
              onClick={handleClose}
              aria-label="Minimize notification"
              title="Minimize"
            >
              ×
            </button>
          </div>

          <div className="gratitude-card-body">

            <div className="gratitude-content">
              <h4 className="gratitude-title">{title}</h4>
              <p className="gratitude-desc">{description}</p>
            </div>
          </div>

          <div className="gratitude-card-footer">
            <a
              href={portalUrl}
              target={portalUrl.startsWith('http') ? '_blank' : '_self'}
              rel={portalUrl.startsWith('http') ? 'noopener noreferrer' : ''}
              className="gratitude-cta-btn"
            >
              <span>{buttonText}</span>
              <svg
                className="cta-arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default GratitudePopup;
