import React, { useState } from 'react';
import Slider from 'react-slick';
import '../../styles/Home/Events.css';
import right_arrow from '../../images/home/right-arrow.svg';
import left_arrow from '../../images/home/left-arrow.svg';

const eventData = [
  { id: 1, title: "Smriti", link: "/events/smriti", description: "The Annual Alumni Reunion event of IIT Guwahati. Started in 2024.", image:  '/image/homepage/smriti.png' },
  { id: 2, title: "Graduation Tea Party", link:"/events/graduation-tea-party", description: "The Graduation Tea Party is an elegant gathering where graduates can share their experiences, and celebrate their successes with peers.", image:  '/image/homepage/gtp.png' },
  { id: 3, title: "International Students' Day", link: "/events/international-students-day", description: "International Student Day is more than just a celebration of diversity. It's a day of learning, support, and networking.", image: '/image/homepage/isd.jpg' },
  { id: 4, title: "Finalis Resonare",link: "/events/finalis-resonare", description: "Finalis Resonare is a unique event that celebrates the final year students, marking their transition from students to alumni.  ", image:  '/image/homepage/finalis_resonare.png' },

  { id: 5, title: "Graduation Ball Dance", link: "/events/graduation-ball-dance", description: "The Ball Party brings together the graduating batch for an evening of elegance, joy, and camaraderie.", image: '/image/homepage/gbp.png' },
  { id: 6, title: "Seminars",link: "/events/seminars", description: "Seminars are a powerful tool for learning, collaboration, and knowledge dissemination.", image: '/image/Events/2024/seminar/image1.jpg' },
];

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "6px",
          backgroundColor: i === activeIndex ? "#0C405E" : "#D9D9D9",
          borderRadius: "5px",
          margin: "0 5px",
          transition: "background-color 0.3s ease",
        }}
      />
    ),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => {
      setActiveIndex(next);
      const totalSlides = eventData.length;
      document.querySelector('.slick-prev').style.display = next === 0 ? 'none' : 'block';
      document.querySelector('.slick-next').style.display = next === totalSlides - 1 ? 'none' : 'block';
    },
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="events-section">
      <h2 className="events-section-header-h2">Our Events</h2>
      <p className="events-section-header-p">We are organizing many events to achieve a student alumni community, to help them benefit from each other.</p>
      <Slider {...settings} className="events-carousel">
        {eventData.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-card-image" />
            <h3 className="event-card-title">{event.title}</h3>
            <div className="event-card-description">
              <p className="event-card-description-para">{event.description}</p>
              <button className="event-card-button" onClick={() => window.location.href = event.link}>Know More</button>
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
