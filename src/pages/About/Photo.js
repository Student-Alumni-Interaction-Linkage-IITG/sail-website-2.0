import React from 'react';
import "../../styles/About/About.css";
import about_us from '../../images/about/about_us.png';

const Photo = () => {
    return (
      <img class = "about_img" src = {about_us} alt='about_img'/>
    );
  };
  
  
  export default Photo;