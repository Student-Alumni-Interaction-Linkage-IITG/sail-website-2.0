import React from "react";
import "../footer/Footer.css";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebookMessenger,
} from "react-icons/fa";
import logo from "../../images/sail white logo 1.svg";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footercontent">
            <div className="footer1">
              {/* Logo Section */}
              <div className="footer-logo">
                <img src={logo} alt="SAIL Logo" className="logo-image" />
                <p>Student Alumni Interaction Linkage</p>
              </div>
            </div>
            <div className="Line">
              <hr></hr>
            </div>
            <div className="footer2">
              {/* Learn More Section */}
              <div className="footer-links">
                <h4>Learn More</h4>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  <li>
                    <a href="https://www.iitg.ac.in/aer/home" target="blank">
                      Alumni & External Relations
                    </a>
                  </li>
                  <li>
                    <a href="https://www.iitg.ac.in/" target="blank">
                      IIT Guwahati
                    </a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/">FAQs</a>
                  </li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <p>Call us: <a href="tel:+917020996986">+91-7020996986</a></p>
                <p><a href="tel:+917060107025" style={{ whiteSpace: 'pre' }}>              +91-7060107025</a></p>
                <p>
                  Email us: <a href="mailto:SAIL@iitg.ac.in">SAIL@iitg.ac.in</a>
                </p>
              </div>
            </div>
          </div>

          <div className="footer3">
            {/* Social Media Icons */}
            <div className="footer-social">
              <FaInstagram onClick={() => window.open('https://www.instagram.com/sail_iitg', '_blank', 'noopener,noreferrer')}/>
              <FaYoutube onClick={() => window.open('https://www.youtube.com/@IITGuwahatiSAIL', '_blank', 'noopener,noreferrer')}/>
              <FaLinkedin onClick={() => window.open('https://www.linkedin.com/company/sail-iitg/', '_blank', 'noopener,noreferrer')}/>
              <FaFacebookMessenger onClick={() => window.open('https://www.facebook.com/sail.iitg/', '_blank', 'noopener,noreferrer')}/>
            </div>
            {/* Contact Form */}
            
              {/* Contact Form */}
              {/* <div className="footer-contact-form">
                <div className='arr'>
                  <h4>Send us your query</h4>
                </div>
                <h4>→</h4>

              </div> */}
          </div>
        </div>
      </footer>
      <div className='copyright'> © 2025 SAIL All rights reserved.</div>
    </div>
  );
}

export default Footer;
