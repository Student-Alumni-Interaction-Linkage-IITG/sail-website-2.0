import React, { useState } from 'react';
import '../header/Navbar.css';
import sail_logo from '../../images/sail white logo 1.svg';
import dropdown_icon from '../../images/dropdown_arrow.svg';

function Navbar() {
    const [showInitiativeDropdown, setShowInitiativeDropdown] = useState(false);
    const [showEventsDropdown, setShowEventsDropdown] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar-content-logo">
                    <a href="/">
                        <img src={sail_logo} alt="logo" />
                    </a>
                </div>
                <div className="navbar-content-links">
                    <a href="/" className="navbar-content-links-a">Home</a>
                    <a href="/about" className="navbar-content-links-a">About Us</a>

                    <div 
                        className="navbar-dropdown"
                        onMouseEnter={() => setShowInitiativeDropdown(true)}
                        onMouseLeave={() => setShowInitiativeDropdown(false)}
                    >
                        <p className="navbar-content-links-a">
                            Initiative <img src={dropdown_icon} alt="dropdown" />
                        </p>
                        {showInitiativeDropdown && (
                            <div className="dropdown-menu">
                                <a href="/initiatives/amp">AMP</a>
                                <a href="/initiatives/class-song">Class Song</a>
                                <a href="/initiatives/ask-the-alumni">Ask the Alumni</a>
                                <a href="/initiatives/yearbook">Yearbook</a>
                                <a href="/initiatives/alumni-greet">Alumni Greet</a>
                                <a href="/initiatives/alumni-awards">Alumni Awards</a>
                                <a href="/initiatives/newsletter">Newsletter</a>
                            </div>
                        )}
                    </div>

                    <div 
                        className="navbar-dropdown"
                        onMouseEnter={() => setShowEventsDropdown(true)}
                        onMouseLeave={() => setShowEventsDropdown(false)}
                    >
                        <p className="navbar-content-links-a">
                            Events <img src={dropdown_icon} alt="dropdown" />
                        </p>
                        {showEventsDropdown && (
                            <div className="dropdown-menu">
                                <a href="/events/alumni-talk">Alumni Talk</a>
                                <a href="/events/webinar">Webinar</a>
                                <a href="/events/graduation-tea-party">Graduation Tea Party</a>
                                <a href="/events/international-students-day">International Students' Day</a>
                                <a href="/events/finalis-resonare">Finalis Resonare</a>
                                <a href="/events/students-alumni-meet">Students' Alumni Meet</a>
                            </div>
                        )}
                    </div>

                    <a href="/services" className="navbar-content-links-a">Services</a>
                    <a href="/calendar" className="navbar-content-links-a">Calendar</a>
                    <button className="navbar-content-links-button" onClick={() => window.open('https://online.iitg.ac.in/epay/donation/donation.jsp', '_blank', 'noopener,noreferrer')}>Donate</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
