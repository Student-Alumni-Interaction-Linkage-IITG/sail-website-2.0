import React from 'react';
import Navbar from './components/header/Navbar.js';
import Footer from './components/footer/Footer.js';
import './App.css'; 
import AppRoutes from './Approutes.js';

function App() {
  return (
    <div className="App">
    
      <main>
        <Navbar/>
        <AppRoutes/>
        <Footer/>
      </main>
    
    </div>
  );
}

export default App;
