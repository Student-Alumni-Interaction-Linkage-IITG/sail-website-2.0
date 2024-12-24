import React from 'react';
import "../About/About.css";
import Card from './Card.js';
import person1 from '../../images/about/person1.png';
import person2 from '../../images/about/person2.png';
import person3 from '../../images/about/person3.png';
import person4 from '../../images/about/person4.png';
import person5 from '../../images/about/person5.png';



const Team = () => {
    return (
        <div className = "team1">
            <h1 className = "team1-head">The Team</h1>
            <p className = "team1-blog">
                As Henry Ford wisely said, “Coming together is a beginning, staying together is progress, and working together is success.” The achievements of SAIL are a testament to the power of collaboration. Every milestone we’ve reached is the result of dedicated teamwork, where each individual’s contribution has been essential. It's the combined effort, shared vision, and unwavering support within the team that has propelled us forward. Now, let’s take a moment to meet the incredible SAIL team that makes it all possible...
            </p>
            <h1 className="aer1">Team AER</h1>
            <div className = "aer">
                <Card url={person1} name = "Prof. Sumana Dutta" post = "DEAN AER"/>
                <Card url={person2} name = "Prof. Deepak Sharma" post = "ASSOCIATE DEAN AER"/>
            </div>
            <h1 className="aer1">Team SAIL</h1>
            <div className = "sail">
                <Card url={person3} name = "Kanv Chaudhary" post = "ASSOC GENERAL SEC, UG SAIL"/>
                <Card url={person4} name = "Urmi Gopalkrishnana" post = "GENERAL SEC , SAIL"/>
                <Card url={person5} name = "Jagdish Kumar" post = "ASSOC GENERAL SEC, PG SAIL"/>
            </div>
        </div>
        
      
    );
  };
  
  
  export default Team;