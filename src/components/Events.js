import React, { useState } from 'react';
import '../styles/Events.css';
import logo from '../images/sailhome1.png';

const eventData = [
  { id: 1, title: "Event A", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
  { id: 2, title: "Event B", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
  { id: 3, title: "Event C", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image:logo},
  { id: 4, title: "Event D", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
  { id: 5, title: "Event E", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image:logo },
];

function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? eventData.length - 3 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === eventData.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="events-section">
      <h2>Our Events</h2>
      <p>Corem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="carousel-container">
        {currentIndex > 0 && (
          <button className="left-arrow" onClick={prevSlide}>❮</button>
        )}

        <div className="carousel">
          <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
            {eventData.map((event) => (
              <div className="card" key={event.id}>
                <img src={event.image} alt={event.title} />
                <div className="card-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <button>Know More</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentIndex < eventData.length - 3 && (
          <button className="right-arrow" onClick={nextSlide}>❯</button>
        )}
      </div>
    </div>
  );
}

export default Events;
