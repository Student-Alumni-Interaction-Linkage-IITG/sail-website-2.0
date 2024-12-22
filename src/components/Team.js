import React from 'react';
import '../styles/Team.css';
import logo from '../images/sailhome1.png';
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
