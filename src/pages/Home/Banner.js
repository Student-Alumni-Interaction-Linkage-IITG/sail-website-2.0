import React from 'react';
import UpcomingEventsCard from '../../components/UpcomingEventsCard/UpcomingEventsCard';
import '../../styles/Home/Banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-inner">
        <div className="banner-content">
          <h4 className="banner-content-h4">WE ARE HERE TO CONNECT !</h4>
          <h1 className="banner-content-h1">
            Student<br />
            Alumni<br />
            Interaction<br />
            Linkage
          </h1>
          <button
            className="banner-content-button"
            onClick={() => (window.location.href = '/about')}
          >
            About us
          </button>
        </div>
        <div className="banner-events-container">
          <UpcomingEventsCard />
        </div>
      </div>
    </div>
  );
}

export default Banner;
