import React from 'react';
import '../../styles/Home/Team.css';
import logo from '../../images/home/sailhome1.png';
import Slider from 'react-slick';

const teamphotos = [
  { id: 1, image: logo },
  { id: 2, image: logo },
  { id: 3, image: logo },
  { id: 4, image: logo },
  { id: 5, image: logo },
  { id: 6, image: logo },
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
        <p>Quam posuere netus lectus euismod lacus. Enim adipiscing aliquam amet est amet. At sapien, habitant nunc etiam. Non porta Id sit eget faucibus sodales et sapien ipsum id enim. Facilisi sit tempus, scelerisque ultrices luctus diam, nibh enim vel. Mi</p>
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
