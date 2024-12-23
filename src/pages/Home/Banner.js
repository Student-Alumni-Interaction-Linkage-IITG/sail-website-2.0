import React from 'react';
import '../../styles/Home/Banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
          <h4 className='banner-content-h4'>We are here to connect !</h4>
          <h1 className='banner-content-h1'>Student Alumni Interaction Linkage</h1>
          <button className='banner-content-button' onClick={() => window.location.href = '/about'}>About us</button>
      </div>
    </div>
  );
}

export default Banner;
