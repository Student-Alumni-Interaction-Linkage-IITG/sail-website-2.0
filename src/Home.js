import React from 'react';
import Banner from './components/Banner';
import Events from './components/Events';
import Alumni from './components/Alumni';
import Team from './components/Team';
import Ban from './components/Support';
import Footer from './components/Footer';
import Aa from './components/Aa';
import './styles/Home.css';

function Home() {
  return (
    <div className="homepage">
      <Banner />
      <Events />
      <Alumni />
      <Team />
      <Aa />
      <Ban />
      <Footer />
    </div>
  );
}

export default Home;

