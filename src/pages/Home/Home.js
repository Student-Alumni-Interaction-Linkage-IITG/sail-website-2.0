import React from 'react';
import Navbar from '../../components/header/Navbar.js';
import Banner from './Banner';
import Events from './Events';
import Alumni from './Alumni';
import Team from './Team';
import Ban from './Support';
import Footer from '../../components/footer/Footer.js';
import Aa from './Alumni_award';
import '../../styles/Home/Home.css';

function Home() {
  return (
    <div className="homepage">
      <Navbar />
      <Banner />
    <Events/>
      <Alumni />
      <Aa />
      <Team />
      
      <Ban />
      <Footer />
    </div>
  );
}

export default Home;

