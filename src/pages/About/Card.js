import React from 'react';
import "../../styles/About/About.css";
import linkedin from '../../images/about/linkedin.svg';
import mail from '../../images/about/mail.svg';

const Card = (props) => {
    return (
        <div className="about-card">
            <div className="about-card-img">
                <img
                    src={props.url}
                    alt={props.name}
                    className="about-person-img"
                />

                <div className="about-card-info">
                    <h3 className="about-person-name">{props.name}</h3>
                    <p className="about-person-post">{props.post}</p>

                    <div className="about-card-social">
                        <a
                            href={props.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${props.name} LinkedIn`}
                        >
                            <img
                                src={linkedin}
                                alt="LinkedIn"
                                className="about-linkedin-icon"
                            />
                        </a>

                        <a
                            href={`mailto:${props.mail}`}
                            aria-label={`Email ${props.name}`}
                        >
                            <img
                                src={mail}
                                alt="Mail"
                                className="about-mail-icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;