import React from 'react';
import Banner from './components/Banner';
import EventsContainer from './components/Events';
import Alumni from './components/Alumni';
import Team from './components/Team';
import Ban from './components/Support';
import Footer from './components/Footer';
import Aa from './components/Aa';
import './styles/Home.css';
import Navbar from './components/Navbar';

function Home() {
  return (
    <div className="homepage">
    <Navbar/>
      <Banner />
    <EventsContainer/>
      <Alumni />
      <Aa />
      <Team />
      
      <Ban />
      <Footer />
    </div>
  );
}

export default Home;

