import React from 'react';
import "../../styles/About/About.css";
import Card from './Card.js';
import person1 from '../../images/about/person1.png';
import person2 from '../../images/about/person2.png';
import person3 from '../../images/about/person3.png';
import person4 from '../../images/about/person4.png';
import person5 from '../../images/about/person5.png';



const Team = () => {
    return (
        <div className = "about-team1">
            <h1 className = "about-team1-head">About The Team</h1>
            <p className = "about-team1-blog">
                As Henry Ford wisely said, “Coming together is a beginning, staying together is progress, and working together is success.” The achievements of SAIL are a testament to the power of collaboration. Every milestone we’ve reached is the result of dedicated teamwork, where each individual’s contribution has been essential. It's the combined effort, shared vision, and unwavering support within the team that has propelled us forward. Now, let’s take a moment to meet the incredible SAIL team that makes it all possible...
            </p>
            <h1 className="about-aer1">Team AER</h1>
            <div className = "about-aer">
                <Card url={person1} name = "Prof. Sumana Dutta" post = "DEAN AER" linkedin = "https://www.linkedin.com/in/sumana-dutta-12011a10/" mail ="doaaer@iitg.ac.in"/>
                <Card url={person2} name = "Prof. Deepak Sharma" post = "ASSOCIATE DEAN AER" linkedin = "https://www.linkedin.com/in/deepak-sharma-15649223/" mail ="adoaaer@iitg.ac.in"/>
            </div>
            <h1 className="about-aer1">Team SAIL</h1>
            <div className = "about-sail">
                <Card url={person3} name = "Kanv Chaudhary" post = "ASSOC GENERAL SEC, UG SAIL" linkedin = "https://www.linkedin.com/in/kanvchaudhary/" mail ="c.kanv@iitg.ac.in"/>
                <Card url={person4} name = "Urmi Gopalkrishnana" post = "GENERAL SEC , SAIL" linkedin = "https://www.linkedin.com/in/urmi-gopalakrishna-143a4825a/" mail ="gensec_sail@iitg.ac.in"/>
                <Card url={person5} name = "Jagdish Kumar" post = "ASSOC GENERAL SEC, PG SAIL" linkedin = "https://www.linkedin.com/in/jagpar7777/" mail ="k.jagdish@iitg.ac.in"/>
            </div>
        </div>
        
    );
  };
  
  
  export default Team;