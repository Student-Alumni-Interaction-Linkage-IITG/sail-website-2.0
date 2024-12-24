import React from 'react';
import "../About/About.css";
import linkedin from '../../images/about/linkedin.svg';
import mail from '../../images/about/mail.svg';


const Card = (props) => {
    return (
        <div className = "card">
            <div className = "card-img">
                <img src = {props.url} alt="person image" className="person-img"/>
                <h1 className = "person-name">{props.name}</h1>
                <h1 className = "person-post">{props.post}</h1>
                <h1 className = "person-post-extra">{props.extra}</h1>
                <div className = "card-social">
                    <img src={linkedin} alt="LinkedIn" className="linkedin-icon" />
                    <img src={mail} alt="Mail" className="mail-icon"/>
                </div>

            </div>

        </div>
    
      
    );
  };
  
  
  export default Card;