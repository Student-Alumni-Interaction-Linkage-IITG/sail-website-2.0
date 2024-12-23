import React from 'react';
import '../styles/Team.css';
import logo from '../images/banner_img.jpeg';
const teamphotos=[
  {id: 1,image:logo},
  {id: 2,image:logo},
  {id: 3,image:logo},
  {id: 4,image:logo},
]
function Team() {
  return (
    <div className="team">
    <div className='tcontent'>
      <h2>Our Team</h2>
      <p>Meet the people behind SAIL.</p>
      </div>
      <img src={logo} alt="Team" className="team-photo" />
      <button className="team-btn">Know More</button>
    </div>
  );
}

export default Team;
