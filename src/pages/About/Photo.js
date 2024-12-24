import React from 'react';
import "../About/About.css";
import about_us from '../../images/about/about_us.png';

const Photo = () => {
    return (
      <img class = "about_img" src = {about_us} />
    );
  };
  
  
  export default Photo;