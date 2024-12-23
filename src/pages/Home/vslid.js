import React, { useState, useEffect } from "react";
import "../../styles/Home/vs.css";

import img from "../../images/akshat_jain.svg"


const cards = [
    {
        image: img,
        title: "Alumni Awards 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        image: img,
        title: "Alumni Awards 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        image: img,
        title: "Alumni Awards 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        image: img,
        title: "Alumni Awards 4",
        description: "Horem ipsum dolor 4.",
    },
];

const VerticalSlider = () => {


const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
return (
<div className="vertical-slider">
    
    <div className="vertical-cards-container">
        <div className="vertical-card" >
        <img
            src={cards[currentIndex].image}
            className="vertical-card-image"
        />
        <h3 className="vertical-card-title">{cards[currentIndex].title}</h3>
        <p className="vertical-card-description">{cards[currentIndex].description}</p>
        
        </div>
        <div className="vs-carousel-dots">
              {cards.map((_, index) => (
                <button
                  key={index}
                  className={`vs-dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
        
        
    </div> 
</div>
);
};

export default VerticalSlider;
