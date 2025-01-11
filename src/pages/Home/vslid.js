import React, { useState, useEffect } from "react";
import "../../styles/Home/vs.css";

// import img from "../../images/home/akshat_jain.svg"


const cards = [
    {
        image: 'image/homepage/saurabh.jpeg',
        title: "Young Alumni Achiever Awards",
        name: "Mr. Saurabh Nangia",
        description: "Co-founder & CEO, Mesh.ai Co-founder & CEO, DataMonk Founder & CEO, TargetingMantra",
    },
    {
        image: 'image/homepage/ayush_thakur.jpeg',
        title: "Young Alumni Achiever Awards",
        name: "Mr. Aayush Thakur",

        description: "2010 Batch, B.Tech in Civil Engineering CEO & Co-founder of FR8relay, Co-founder of Connect Dynamics",
    },
    {
        image: 'image/homepage/prateek.jpg',
        title: "Distinguished Alumni Awards",
        name: "Prof. Prateek Mittal",
        description: "2006 Batch, B.Tech in CSE Professor of Electrical and Computer Engineering Princeton University Recepient of the Grace Murray Hopper Award, June 2024",
    },
    
];

const VerticalSlider = () => {


const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
return (
<div className="vertical-slider">

<div className="vs-carousel-dots">
              {cards.map((_, index) => (
                <button
                  key={index}
                  className={`vs-dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
    
    <div className="vertical-cards-container">
        <div className="vertical-card" >
        <img
            src={cards[currentIndex].image}
            className="vertical-card-image"
        />
        <h3 className="vertical-card-title">{cards[currentIndex].title}</h3>
        <h3 className="vertical-card-title">{cards[currentIndex].name}</h3>

        <p className="vertical-card-description">{cards[currentIndex].description}</p>
        
        </div>

        
        
    </div> 
</div>
);
};

export default VerticalSlider;
