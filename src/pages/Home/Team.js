import React from 'react';
import '../../styles/Home/Team.css';
import logo from '../../images/home/sailhome1.png';
import Slider from 'react-slick';

const teamphotos = [
  // { id: 1, image: 'image/homepage/team1.jpg' },
  // { id: 2, image:  'image/homepage/team2.jpg'  },
  { id: 3, image:  'image/homepage/team3.jpg'  },
  { id: 4, image:  'image/homepage/team4.jpg'  },
  { id: 5, image:  'image/homepage/team5.jpg'  },
  { id: 6, image:  'image/homepage/team6.jpg'  },
  // { id: 7, image:  'image/homepage/team7.jpg'  },
  // {id:1 , img : logo},
  // {id:2 , img : logo},
  // {id:3 , img : logo},
  // {id:4 , img : logo},
  // {id:5 , img : logo},
  // {id:6 , img : logo},

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
        <p>Steve Jobs once said, “Great things in Business are never done by one person. They're done by a team of people.”. And all the things that SAIL has been able to achieve, would not have been possible without such a great team that we have.</p>
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