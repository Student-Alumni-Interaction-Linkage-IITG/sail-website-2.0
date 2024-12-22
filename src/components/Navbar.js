import React, { useState } from 'react';
import '../styles/Navbar.css';
import sail_logo from '../images/sail white logo 1.png';
import dropdown_icon from '../images/dropdown_arrow.svg';

function Navbar() {
    const [showInitiativeDropdown, setShowInitiativeDropdown] = useState(false);
    const [showEventsDropdown, setShowEventsDropdown] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar-content-logo">
                    <img src={sail_logo} alt="logo" />
                </div>
                <div className="navbar-content-links">
                    <a href="/" className="navbar-content-links-a">Home</a>
                    <a href="/" className="navbar-content-links-a">About Us</a>

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
                                <a href="/">AMP</a>
                                <a href="/">Class Song</a>
                                <a href="/">Ask the Alumni</a>
                                <a href="/">Yearbook</a>
                                <a href="/">Alumni Greet</a>
                                <a href="/">Alumni Awards</a>
                                <a href="/">Newsletter</a>
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
                                <a href="/">Alumni Talk</a>
                                <a href="/">Webinar</a>
                                <a href="/">Graduation Tea Party</a>
                                <a href="/">International Students' Day</a>
                                <a href="/">Finalis Resonare</a>
                                <a href="/">Students' Alumni Meet</a>
                            </div>
                        )}
                    </div>

                    <a href="/" className="navbar-content-links-a">Services</a>
                    <a href="/" className="navbar-content-links-a">Calendar</a>
                    <button className="navbar-content-links-button">Donate</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
