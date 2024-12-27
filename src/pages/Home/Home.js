import React from 'react';
import Banner from './Banner';
import Events from './Events';
import Alumni from './Alumni';
import Team from './Team';
import Ban from './Support';

import Aa from './Alumni_award';
import '../../styles/Home/Home.css';

function Home() {
  return (
    <div className="homepage">
      <Banner />
    <Events/>
      <Alumni />
      <Aa />
      <Team />
      
      <Ban />
    </div>
  );
}

export default Home;

