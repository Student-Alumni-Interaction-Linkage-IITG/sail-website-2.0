import React from 'react';
import '../footer/Footer.css';
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebookMessenger } from 'react-icons/fa';
import logo from '../../images/sail white logo 1.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className='footercontent'>
      <div className='footer1'>
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="SAIL Logo" className="logo-image" />
          <p>Student Alumni Interaction Linkage</p>
        
        </div>
        </div>
<div className='footer2'>
        {/* Learn More Section */}
        <div className="footer-links">
          <h4>Learn More</h4>
          <ul>
            <li><a href="#about">About us</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Call us: 123-456-7890</p>
          <p>Email us: <a href="mailto:SAIL@iitg.ac.in">SAIL@iitg.ac.in</a></p>
        </div>
        </div>
        </div>

        <div className="footer3">
        {/* Social Media Icons */}
        <div className="footer-social">
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin />
            <FaFacebookMessenger />
          </div>
                    {/* Contact Form */}
                    <div className="footer-contact-form">
            <input type="text" placeholder="Send us your query" />
            <button type="submit">→</button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
