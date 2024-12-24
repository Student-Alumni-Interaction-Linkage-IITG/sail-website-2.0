import React from 'react';
import "../About/About.css";
import insta from '../../images/insta.svg';
import youtube from '../../images/youtube.svg';
import linkedin from '../../images/linkedin.svg';
import meta from '../../images/meta.svg';
import logo from '../../images/sail white logo 1.svg'


const Blog = () => {
    return (
       <div class = "blog-div">
        <img  src={logo} alt="SAIL Logo" className="logo-imag" />
        <p className = "blog">
        Student Alumni Interaction Linkage (SAIL) is a voluntary cell of IIT Guwahati under the office of Alumni Affairs and External Relations. It is operated by the students of IIT Guwahati under the Guidance of the Dean, Alumni Affairs, and External Relations. SAIL acts as an engaging and mutually beneficial link between IIT Guwahati and its Alumni community. The organization works toward creating a dynamic student alumni community with IITGAA dedicated to fostering relationships and strengthening ties between students and alumni to support IIT Guwahati's mission of offering top-notch education and opportunities while also making investments in the institution's future. For achieving our well-specified and sophisticated vision, a plethora of activities have been undertaken to forge links and strengthen bonds between current students and alumni as well as amongst alumni.  
        </p>
        <div className = "blog-social">
        <div className="footer-social">
            <a href='https://www.instagram.com/sail_iitg' target='blank'><img src={insta} alt="Instagram" className="insta-icon" /></a>
            <a href='https://www.youtube.com/@IITGuwahatiSAIL' target='blank'><img src={youtube} alt="Youtube" className="youtube-icon" /></a>
            <a href='https://www.linkedin.com/company/sail-iitg/' target='blank'><img src={linkedin} alt="LinkedIn" className="linkedin-icon" /></a>
            <a href='https://www.facebook.com/sail.iitg/' target='blank'><img src={meta} alt="Messenger" className="messenger-icon" /></a>
          </div>
          </div>
      </div>

    );
  };

  export default Blog;
