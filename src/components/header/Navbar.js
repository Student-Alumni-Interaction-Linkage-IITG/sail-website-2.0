import React, { useState, useEffect } from "react";
import "../header/Navbar.css";
import sail_logo from "../../images/sail white logo 1.svg";
import dropdown_icon from "../../images/dropdown_arrow.svg";

function Navbar() {





    
    useEffect(() => {
        const handleHashScroll = () => {
            const hash = window.location.hash; // Get the current hash from the URL
            if (hash) {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        };

        // Run on initial load to handle any hash in the URL
        handleHashScroll();

        // Listen for hash changes while on the page
        window.addEventListener("hashchange", handleHashScroll);

        return () => window.removeEventListener("hashchange", handleHashScroll);
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isInitiativeOpen, setIsInitiativeOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    // Update the isDesktop state on window resize
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleInitiativeClick = () => {
        if (!isDesktop || isMenuOpen) {
            setIsInitiativeOpen((prev) => !prev);
        }
    };

    const handleEventsClick = () => {
        if (!isDesktop || isMenuOpen) {
            setIsEventsOpen((prev) => !prev);
        }
    };











    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar-content-logo">
                    <a href="/sail/">
                        <img src={sail_logo} alt="logo" />
                    </a>
                </div>

                <div
                    className={`navbar-hamburger ${isMenuOpen ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={`navbar-content-links ${isMenuOpen ? "show" : ""}`}>
                    <a href="/sail/" className="navbar-content-links-a">
                        Home
                    </a>
                    <a href="/sail/about" className="navbar-content-links-a">
                        About Us
                    </a>

                    {/* Initiative Dropdown */}
                    <div
                        className="navbar-dropdown"
                        onMouseEnter={() => isDesktop && setIsInitiativeOpen(true)}
                        onMouseLeave={() => isDesktop && setIsInitiativeOpen(false)}
                    >
                        <p
                            className="navbar-content-links-a"
                            onClick={handleInitiativeClick}
                        >
                            Initiative <img src={dropdown_icon} alt="dropdown" />
                        </p>
                        {(isInitiativeOpen || (isDesktop && isInitiativeOpen)) && (
                            <div className="dropdown-menu">
                                <a href="/sail/initiative#amp">AMP</a>
                                <a href="/sail/initiative#yearbook">Yearbook</a>
                                <a href="/sail/initiative#newsletter">Newsletter</a>
                                <a href="/sail/initiative#core-mentorship">Core Mentorship</a>
                                <a href="/sail/initiative#class-song">Class Song</a>
                                <a href="/sail/initiative#placement-mock-interview">
                                    Placement Mock Interview
                                </a>
                                <a href="/sail/initiative#summarise-and-share">Summarise & Share</a>
                                <a href="/sail/initiative#alumni-awards">Alumni Awards</a>
                            </div>
                        )}
                    </div>

                    {/* Events Dropdown */}
                    <div
                        className="navbar-dropdown"
                        onMouseEnter={() => isDesktop && setIsEventsOpen(true)}
                        onMouseLeave={() => isDesktop && setIsEventsOpen(false)}
                    >
                        <p className="navbar-content-links-a" onClick={handleEventsClick}>
                            Events <img src={dropdown_icon} alt="dropdown" />
                        </p>
                        {(isEventsOpen || (isDesktop && isEventsOpen)) && (
                            <div className="dropdown-menu">
                                <a href="/sail/events-smriti">Smriti</a>
                                <a href="/sail/events-graduation-tea-party">Graduation Tea Party</a>
                                <a href="/sail/events-international-students-day">
                                    International Students' Day
                                </a>
                                <a href="/sail/events-finalis-resonare">Finalis Resonare</a>
                                <a href="/sail/events-graduation-ball-dance">Graduation Ball Dance</a>
                                <a href="/sail/events-seminars">Seminars</a>

                            </div>
                        )}
                    </div>
                    <div
                        className="navbar-dropdown"
                        onMouseEnter={() => isDesktop && setIsEventsOpen(true)}
                        onMouseLeave={() => isDesktop && setIsEventsOpen(false)}
                    >
                        <p className="navbar-content-links-a" onClick={handleEventsClick}>
                            Yearbook <img src={dropdown_icon} alt="dropdown" />
                        </p>
                        {(isEventsOpen || (isDesktop && isEventsOpen)) && (
                            <div className="dropdown-menu">
                                <a href="https://www.iitg.ac.in/yearbook" target="blank">Yearbook Portal</a>
                                <a href="https://www.iitg.ac.in/yearbook/yearbook24/" target="blank">Yearbook 2024</a>
                                

                            </div>
                        )}
                    </div>
                    <a href="/sail/#service" className="navbar-content-links-a">
                        Services
                    </a>
                    
                    <button
                        className="navbar-content-links-button"
                        onClick={() =>
                            window.open(
                                "https://online.iitg.ac.in/epay/donation/donation.jsp",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }
                    >
                        Donate
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
