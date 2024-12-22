import React, { useState } from 'react';
import '../styles/Aa.css';
import img from '../images/sailhome1.png';

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
      <div className="card1">
        <div className="card-content1">
          <h1>Alumni Awards</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
          <div className="buttons">
            <button>Read More</button>
            <button>Read More</button>
          </div>
        </div>
        <div className="card-image1">
          <img src={img} alt="Alumni Group" />
        </div>
      </div>

      {/* Right carousel */}
      <div className="carousel-wrapper1">
        <div 
          className="carousel-inner1" 
          style={{ transform: `translateY(-${currentIndex * 200}px)`, transition: 'transform 0.5s ease-in-out' }} // 
        >
          {alumniData.map((alumni) => (
            <div className="carousel-item1" key={alumni.id}>
              <img src={alumni.image} alt={alumni.name} />
              <p>{alumni.name}</p>
              <p>{alumni.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Up and Down buttons */}
      <div className="controls">
        {currentIndex > 0 && (
          <button className="up-arrow1" onClick={prevSlide}>▲</button>
        )}
        {currentIndex < alumniData.length - 2 && (
          <button className="down-arrow1" onClick={nextSlide}>▼</button>
        )}
      </div>
    </div>
  );
};

export default Aa;
