import React, { useState } from 'react';
import '../styles/Aa.css';
import img from '../images/sailhome1.png';
import VerticalSlider from './vslid';

const alumniData = [
  { id: 1, name: "Alumni Awards 1", desc: "Lorem ipsum dolor.", image: img },
  { id: 2, name: "Alumni Awards 2", desc: "Lorem ipsum dolor.", image: img },
  { id: 3, name: "Alumni Awards 3", desc: "Lorem ipsum dolor.", image: img },
  { id: 4, name: "Alumni Awards 4", desc: "Lorem ipsum dolor.", image: img },
  { id: 5, name: "Alumni Awards 5", desc: "Lorem ipsum dolor.", image: img },
];

const Aa = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < alumniData.length - 2) {  
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="container1">
      {/* Left content */}
      <div className='Alumni'>
      <div className="card1">
        <div className="card-content1">
          <h1>Alumni Awards</h1>
          <div className='card2'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
          <div className="buttons">
            <button>Read More</button>
            <button>Read More</button>
          </div>
          </div>
        </div>
        <div className="card-image1">
          <img src={img} alt="Alumni Group" />
        </div>
      </div>

      {/* Right carousel */}
     <VerticalSlider/>

      {/* Up and Down buttons */}
      </div>
    </div>
  );
};

export default Aa;
