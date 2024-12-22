import React, { useState, useEffect } from 'react';

import MEvents from './Mevents';
import Events from './DEvents';

function EventsContainer() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="events-container">
      {isMobileView ? <MEvents /> : <Events />}
    </div>
  );
}

export default EventsContainer;
