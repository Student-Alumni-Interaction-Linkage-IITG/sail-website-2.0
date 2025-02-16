import React from 'react';
import '../../styles/Home/Team.css';
import Slider from 'react-slick';

// Import images properly if they are inside `src/images/homepage/`
import team3 from '../../images/homepage/team3.jpg';
import team4 from '../../images/homepage/team4.jpg';
import team5 from '../../images/homepage/team5.jpg';
import team6 from '../../images/homepage/team6.jpg';

const teamphotos = [
  { id: 3, image: team3 },
  { id: 4, image: team4 },
  { id: 5, image: team5 },
  { id: 6, image: team6 },
];

function Team() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
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
    <div className="team">
      <div className="tcontent">
        <h2>Our Team</h2>
        <p>Steve Jobs once said, “Great things in Business are never done by one person. They're done by a team of people.” And all the things that SAIL has been able to achieve would not have been possible without such a great team.</p>
      </div>
      <Slider {...settings} className="team-events-carousel">
        {teamphotos.map((photo) => (
          <div key={photo.id} className="team-slide">
            <img src={photo.image} alt={`Team Member ${photo.id}`} className="team-photo" />
          </div>
        ))}
      </Slider>
      <button className="team-btn" onClick={() => window.location.href = '/about'}>Know More</button>
    </div>
  );
}

export default Team;
