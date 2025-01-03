import React from 'react';
import '../../styles/Home/Support.css';
import ij from '../../images/home/sailhome1.png'

const Ban = () => {
  return (
    <div className='supp'>
    <div className="bann">
      <div className="images">
       <div className='ig1'>
        <img src={ij} alt="Campus View" />
        </div>
        <div className='ig2'>
        <img src={ij} alt="Group Photo 1" />
        </div>
        </div>
        <div className="text-content">
        <h1>Support the Future, Empower IITG</h1>
        <p>
          Your contribution can help shape the next generation of innovators leaders. By donating to IIT Guwahati, you enable groundbreaking research, enhance student opportunities, and strengthen our community. Join us in building a brighter future for our institute.
        </p>
        <button className="donate-button" onClick={() => window.open('https://online.iitg.ac.in/epay/donation/donation.jsp', '_blank', 'noopener,noreferrer')}>Donate</button>
      </div>
      <div className='images2'>
      <div className='ig3'>
        <img src={ij} alt="Group Photo 2" />
        </div>
        <div className='ig4'>
        <img src={ij} alt="Group Photo 3" />
        </div>
  </div>
  </div>
    </div>
  );
};

export default Ban;
