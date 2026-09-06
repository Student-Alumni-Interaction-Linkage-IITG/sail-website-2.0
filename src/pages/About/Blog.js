import React from 'react';
import "../../styles/About/About.css";
import insta from '../../images/insta.svg';
import youtube from '../../images/youtube.svg';
import linkedin from '../../images/linkedin.svg';
import meta from '../../images/meta.svg';
import logo from '../../images/sail white logo 1.svg'


const Blog = () => {
    return (
      <div className="about-blog-div">
        <img src={logo} alt="SAIL Logo" className="about-logo-imag" />
        <p className="about-blog">
          Student Alumni Interaction Linkage (SAIL) is a voluntary cell of IIT Guwahati under the office of Alumni, Corporate and International Relations (ACIR). It is operated by the students of IIT Guwahati under the guidance of the Dean, Alumni, Corporate and International Relations (ACIR). SAIL acts as an engaging and mutually beneficial link between IIT Guwahati and its Alumni community.
        </p>
        <p className="about-blog about-blog-sub">
          The organization works toward creating a dynamic student-alumni community with IITGAA dedicated to fostering relationships and strengthening ties between students and alumni to support IIT Guwahati's mission of offering top-notch education and opportunities while also making investments in the institution's future. For achieving our well-specified and sophisticated vision, a plethora of activities have been undertaken to forge links and strengthen bonds between current students and alumni as well as amongst alumni.
        </p>
        <div className="about-blog-social">
            <a href="https://www.instagram.com/sail_iitg" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram" className="about-insta-icon" /></a>
            <a href="https://www.youtube.com/@IITGuwahatiSAIL" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="Youtube" className="about-youtube-icon" /></a>
            <a href="https://www.linkedin.com/company/sail-iitg/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" className="about-linkedin-icon" /></a>
            <a href="https://www.facebook.com/sail.iitg/" target="_blank" rel="noopener noreferrer"><img src={meta} alt="Messenger" className="about-messenger-icon" /></a>
        </div>
      </div>
    );
};

  export default Blog;
