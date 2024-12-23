import React, { useState } from 'react';
import Slider from 'react-slick';
import '../../styles/Home/Events.css';
import logo from '../../images/sailhome1.png';
import right_arrow from '../../images/right-arrow.svg';
import left_arrow from '../../images/left-arrow.svg';

const eventData = [
  { id: 1, title: "Event A", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
  { id: 2, title: "Event B", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
  { id: 3, title: "Event C", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
  { id: 4, title: "Event D", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
  { id: 5, title: "Event E", description: "Quam posuere netus etus u quis modi acus. Etiamad pisc ing aliqua", image: logo },
];

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Active slide index state

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          width: "20px",   // Width of the rectangle
          height: "6px",   // Height of the rectangle
          backgroundColor: i === activeIndex ? "#0C405E" : "#D9D9D9",  // Highlight the active one
          borderRadius: "5px", // No rounded corners, fully rectangular
          margin: "0 5px",  // Space between the rectangles
          transition: "background-color 0.3s ease" // Smooth transition for background-color
        }}
      />
    ),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => {
      // Update the active index when the slide changes
      setActiveIndex(next);
      // Check if we are at the beginning or end and hide arrows accordingly
      const totalSlides = eventData.length;
      document.querySelector('.slick-prev').style.display = next === 0 ? 'none' : 'block';
      document.querySelector('.slick-next').style.display = next === totalSlides - 1 ? 'none' : 'block';
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="events-section">
      <h2 className="events-section-header-h2">Our Events</h2>
      <p className="events-section-header-p">Corem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Slider {...settings} className="events-carousel">
        {eventData.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-card-image" />
            <h3 className="event-card-title">{event.title}</h3>
            <div className="event-card-description">
              <p className="event-card-description-para">{event.description}</p>
              <button className="event-card-button">Know More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-arrow custom-arrow-right ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={right_arrow} alt="Right Arrow" />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-arrow custom-arrow-left ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <img src={left_arrow} alt="Left Arrow" />
    </div>
  );
};

export default Events ;
