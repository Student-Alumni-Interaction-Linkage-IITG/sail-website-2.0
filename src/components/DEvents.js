//in desktop veiw 


import React, { useState } from 'react';
import '../styles/Events.css';
import logo from '../images/sailhome1.png';

const eventData = [
  { id: 1, title: "Event A", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
  { id: 2, title: "Event B", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
  { id: 3, title: "Event C", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
  { id: 4, title: "Event D", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
  { id: 5, title: "Event E", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
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
    <div className='econtent'>
      <h2>Our Events</h2>
      <p>Corem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
      <div className="carousel-cont">
        {currentIndex > 0 && (
          <button className="left-arr" onClick={prevSlide}>❮</button>
        )}

        <div className="carous">
          <div className="carousel-in" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
            {eventData.map((event) => (
              <div className="car" key={event.id}>
              <div className='scontent'>
                <img src={event.image} alt={event.title} />
                <div className="card-cont">
                <h3>{event.title}</h3>
                <div className='edes'>
              
                  <p>{event.description}</p>
                    <button>Know More</button>
                  </div>
                 
                </div>


                </div>
              </div>
            ))}
          </div>
        </div>

        {currentIndex < eventData.length - 3 && (
          <button className="right-arr" onClick={nextSlide}>❯</button>
        )}
      </div>

      {/* Dot Indicator */}
      <div className="dots">
        {eventData.slice(0, eventData.length - 2).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Events;

//in phone veiw
