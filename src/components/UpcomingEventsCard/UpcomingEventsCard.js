import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../../styles/UpcomingEventsCard/UpcomingEventsCard.css';
import alexanderPoster from '../../images/homepage/seminar_alexander_seelam.png';
import tarangPoster from '../../images/homepage/seminar_tarang_vaish.png';

const events = [
  {
    id: 1,
    title: 'Interactive Seminar: Alexander Seelam',
    speaker: 'Alexander Seelam',
    role: 'General Manager at PW',
    date: '27th Sept | 6:00 pm',
    venue: 'Mini Audi',
    image: alexanderPoster,
    alt: 'Interactive Seminar with Alexander Seelam - General Manager at PW, Mini Audi'
  },
  {
    id: 2,
    title: 'Interactive Seminar: Tarang Vaish',
    speaker: 'Tarang Vaish',
    role: 'Co-founder & CTO of Granica',
    date: '27th Sept | 6:00 pm',
    venue: 'Mini Audi',
    image: tarangPoster,
    alt: 'Interactive Seminar with Tarang Vaish - Co-founder & CTO of Granica, Mini Audi'
  }
];

const UpcomingEventsCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);

  // Swipe support
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  }, []);

  // 3-second auto-slide timer
  useEffect(() => {
    if (isPaused || selectedPoster) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, selectedPoster, nextSlide, currentIndex]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedPoster(null);
      } else if (e.key === 'ArrowRight' && !selectedPoster) {
        nextSlide();
      } else if (e.key === 'ArrowLeft' && !selectedPoster) {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPoster, nextSlide, prevSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <aside
        className="upcoming-events-card-container"
        aria-label="Upcoming Events"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Header */}
        <div className="upcoming-events-header">
          <h3 className="upcoming-events-title">Upcoming Events</h3>
          <div className="upcoming-events-arrows">
            <button
              className="upcoming-events-arrow-btn"
              onClick={prevSlide}
              aria-label="Previous event"
              title="Previous event"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              className="upcoming-events-arrow-btn"
              onClick={nextSlide}
              aria-label="Next event"
              title="Next event"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Viewport / Slider */}
        <div
          className="upcoming-events-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="upcoming-events-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                className="upcoming-events-slide"
                onClick={() => setSelectedPoster(event)}
                role="button"
                tabIndex={0}
                aria-label={`View poster for ${event.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedPoster(event);
                  }
                }}
              >
                <img
                  src={event.image}
                  alt={event.alt}
                  className="upcoming-events-poster-img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="upcoming-events-zoom-hint">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span>Click to expand</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots pagination */}
        <div className="upcoming-events-dots">
          {events.map((event, index) => (
            <button
              key={event.id}
              className={`upcoming-events-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              title={event.title}
            />
          ))}
        </div>
      </aside>

      {/* Fullscreen Poster Modal */}
      {selectedPoster && (
        <div
          className="poster-modal-backdrop"
          onClick={() => setSelectedPoster(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="poster-modal-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="poster-modal-close-btn"
              onClick={() => setSelectedPoster(null)}
              aria-label="Close poster preview"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={selectedPoster.image}
              alt={selectedPoster.alt}
              className="poster-modal-img"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UpcomingEventsCard;
