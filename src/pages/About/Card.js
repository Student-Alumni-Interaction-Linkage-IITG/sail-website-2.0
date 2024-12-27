import React from 'react';
import "../../styles/About/About.css";
import linkedin from '../../images/about/linkedin.svg';
import mail from '../../images/about/mail.svg';


const Card = (props) => {
    return (
        <div className = "about-card">
            <div className = "about-card-img">
                <img src = {props.url} alt="person-image" className="about-person-img" />
                <h1 className = "about-person-name">{props.name}</h1>
                <h1 className = "about-person-post">{props.post}</h1>
                <div className = "about-card-social">
                    <a href={props.linkedin} target='blank'><img src={linkedin} alt="LinkedIn" className="about-linkedin-icon" /></a>
                    <a href={props.mail} target='blank'> <img src={mail} alt="Mail" className="about-mail-icon"/></a>
                </div>

            </div>

        </div>
    
      
    );
  };
  
  
  export default Card;