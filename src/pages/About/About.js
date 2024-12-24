import React from 'react';
import "../About/About.css";
import Photo from './Photo.js';
import Blog from './Blog.js';
import Team from './Team.js';


const About = () => {
  return <div className = "overall-body">
    <Photo />
    <Blog />
    <Team />
  </div>;
};

export default About;
// divided the overall page into three components namely photo for the about us intiial part 
//blog for the the sail logo part and the para part
//the team part which includes the card part and other paras