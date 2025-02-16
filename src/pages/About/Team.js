import React from 'react';
import "../../styles/About/About.css";
import Card from './Card.js';

// Import images from the assets folder
import kanv from "../../images/about/aboutus/kanv.jpeg";
import urmi from "../../images/about/aboutus/urmi.jpeg";
import jagdish from "../../images/about/aboutus/jagdish.jpeg";
import tanisha from "../../images/about/aboutus/tanisha.jpeg";
import pooja from "../../images/about/aboutus/pooja.jpeg";
import vaibhav from "../../images/about/aboutus/vaibhav.jpeg";
import raunit from "../../images/about/aboutus/raunit.jpeg";
import rahul from "../../images/about/aboutus/rahul.jpeg";
import ananya from "../../images/about/aboutus/ananya.jpeg";
import vanshita from "../../images/about/aboutus/vanshita.jpeg";
import pranav from "../../images/about/aboutus/pranav.jpeg";
import sandeep from "../../images/about/aboutus/sandeep.jpeg";
import dean from "../../images/about/aboutus/dean.jpeg";
import assocdean from "../../images/about/aboutus/assocdean.jpeg";

const Team = () => {
    return (
        <div className="about-team1">
            <h1 className="about-team1-head">The Team</h1>
            <p className="about-team1-blog">
                As Henry Ford wisely said, “Coming together is a beginning, staying together is progress, and working together is success.” The achievements of SAIL are a testament to the power of collaboration. Every milestone we’ve reached is the result of dedicated teamwork, where each individual’s contribution has been essential. It's the combined effort, shared vision, and unwavering support within the team that has propelled us forward. Now, let’s take a moment to meet the incredible SAIL team that makes it all possible...
            </p>
            
            <h1 className="about-aer1">Team SAIL</h1>
            <div className="about-sail">
                <Card url={kanv} name="Kanv Chaudhary" post="ASSOC GEN. SEC, UG SAIL" linkedin="https://www.linkedin.com/in/kanvchaudhary/" mail="c.kanv@iitg.ac.in" />
                <Card url={urmi} name="Urmi Gopalkrishnana" post="GENERAL SEC , SAIL" linkedin="https://www.linkedin.com/in/urmi-gopalakrishna-143a4825a/" mail="gensec_sail@iitg.ac.in" />
                <Card url={jagdish} name="Jagdish Kumar" post="ASSOC GEN. SEC, PG SAIL" linkedin="https://www.linkedin.com/in/jagpar7777/" mail="k.jagdish@iitg.ac.in" />
                <Card url={tanisha} name="Tanisha Suryavanshi" post="DESIGN  HEAD" linkedin="https://www.linkedin.com/in/tanisha-suryavanshi-a3b28a321/" mail="tanisha@iitg.ac.in" />
                <Card url={pooja} name="Pooja J" post="DESIGN HEAD" linkedin="https://www.linkedin.com/in/pooja-j-a335a9240/" mail="jpoojanath@gmail.com" />
                <Card url={vaibhav} name="Vaibhav Kumar" post="WEB HEAD" linkedin="https://www.linkedin.com/in/vaibhav-kumar-677275259/" mail="vaibhav10.ssm@gmail.com" />
                <Card url={raunit} name="Raunit Patel" post="WEB HEAD" linkedin="https://www.linkedin.com/in/raunit-patel1995/" mail="raunit@iitg.ac.in" />
                <Card url={rahul} name="Rahul Jat" post="EVENTS HEAD" linkedin="https://www.linkedin.com/in/rahul-jat-51813b260/" mail="rahuljat13290@gmail.com" />
                <Card url={ananya} name="Ananya Singh" post="EVENTS HEAD" linkedin="https://www.linkedin.com/in/ananya1904/" mail="missananya.19.04@gmail.com" />
                <Card url={vanshita} name="Vanshita Bihani" post="OUTREACH HEAD" linkedin="https://www.linkedin.com/in/vanshita-bihani-010a5a246/" mail="vanshitabihani038@gmail.com" />
                <Card url={pranav} name="Venkata Sai Pranav " post="OUTREACH HEAD" linkedin="https://www.linkedin.com/in/venkata-sai-pranav-kummari-302b35252/" mail="prnvpranav2003@gmail.com" />
                <Card url={sandeep} name="Sandeep Charlie" post="CONTENT HEAD" linkedin="https://www.linkedin.com/in/tetakali-sandeep-charlie-5b38a325b//" mail="t.charlie@iitg.ac.in" />
            </div>
            <h1 className="about-aer1">Team AER</h1>
            <div className="about-aer">
                <Card url={dean} name="Prof. Sumana Dutta" post="DEAN AER" linkedin="https://www.linkedin.com/in/sumana-dutta-12011a10/" mail="doaaer@iitg.ac.in" />
                <Card url={assocdean} name="Prof. Deepak Sharma" post="ASSOCIATE DEAN AER" linkedin="https://www.linkedin.com/in/deepak-sharma-15649223/" mail="adoaaer@iitg.ac.in" />
            </div>
        </div>
    );
};

export default Team;
