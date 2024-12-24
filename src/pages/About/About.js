import React from 'react';
import "../../styles/About/About.css";
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