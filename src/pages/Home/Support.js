import React from 'react';
import '../../styles/Home/Support.css';

// Import images if they are stored inside src/images
import donate1 from '../../images/homepage/donate1.png';
import donate2 from '../../images/homepage/donate2.png';
import donate3 from '../../images/homepage/donate3.png';
import donate4 from '../../images/homepage/donate4.png';

const Ban = () => {
  return (
    <div className='supp'>
      <div className="bann">
        <div className="images">
          <div className='ig2'>
            <img src={donate4} alt="Group Photos 1" />
          </div>
          <div className='ig1'>
            <img src={donate2} alt="Campus View" />
          </div>
        </div>

        <div className="text-content">
          <h1>Support the Future, Empower IITG</h1>
          <p>
            Your contribution can help shape the next generation of innovators and leaders. By donating to IIT Guwahati, you enable groundbreaking research, enhance student opportunities, and strengthen our community. Join us in building a brighter future for our institute.
          </p>
          <button 
            className="donate-button" 
            onClick={() => window.open('https://online.iitg.ac.in/epay/donation/donation.jsp', '_blank', 'noopener,noreferrer')}
          >
            Donate
          </button>
        </div>

        <div className='images2'>
          <div className='ig3'>
            <img src={donate3} alt="Group Photos 2" />
          </div>
          <div className='ig4'>
            <img src={donate1} alt="Group Photos 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ban;
