import React from 'react';
import "../../styles/About/About.css";
import Card from './Card.js';


const Team = () => {
    return (
        <div className="about-team1">
            <h1 className="about-team1-head">The Team</h1>
            <p className="about-team1-blog">
                As Henry Ford wisely said, “Coming together is a beginning, staying together is progress, and working together is success.” The achievements of SAIL are a testament to the power of collaboration. Every milestone we’ve reached is the result of dedicated teamwork, where each individual’s contribution has been essential. It's the combined effort, shared vision, and unwavering support within the team that has propelled us forward. Now, let’s take a moment to meet the incredible SAIL team that makes it all possible...
            </p>
            
            <h1 className="about-aer1">Team SAIL</h1>
            <div className="about-sail">
                <Card url='\image\aboutus\kanv.jpeg' name="Kanv Chaudhary" post="ASSOC GEN. SEC, UG SAIL" linkedin="https://www.linkedin.com/in/kanvchaudhary/" mail="c.kanv@iitg.ac.in" />
                <Card url='\image\aboutus\urmi.jpeg' name="Urmi Gopalkrishnana" post="GENERAL SEC , SAIL" linkedin="https://www.linkedin.com/in/urmi-gopalakrishna-143a4825a/" mail="gensec_sail@iitg.ac.in" />
                <Card url='\image\aboutus\jagdish.jpeg' name="Jagdish Kumar" post="ASSOC GEN. SEC, PG SAIL" linkedin="https://www.linkedin.com/in/jagpar7777/" mail="k.jagdish@iitg.ac.in" />
                <Card url='\image\aboutus\tanisha.jpeg' name="Tanisha Suryavanshi" post="DESIGN  HEAD" linkedin="https://www.linkedin.com/in/tanisha-suryavanshi-a3b28a321/" mail="tanisha@iitg.ac.in" />
                <Card url='\image\aboutus\pooja.jpeg' name="Pooja J" post="DESIGN HEAD" linkedin="https://www.linkedin.com/in/pooja-j-a335a9240/" mail="jpoojanath@gmail.com" />
                <Card url='\image\aboutus\vaibhav.jpeg' name="Vaibhav Kumar" post="WEB HEAD" linkedin="https://www.linkedin.com/in/vaibhav-kumar-677275259/" mail="vaibhav10.ssm@gmail.com" />
                <Card url='\image\aboutus\raunit.jpeg' name="Raunit Patel" post="WEB HEAD" linkedin="https://www.linkedin.com/in/raunit-patel1995/" mail="raunit@iitg.ac.in" />
                <Card url='\image\aboutus\rahul.jpeg' name="Rahul Jat" post="EVENTS HEAD" linkedin="https://www.linkedin.com/in/rahul-jat-51813b260/" mail="rahuljat13290@gmail.com" />
                <Card url='\image\aboutus\ananya.jpeg' name="Ananya Singh" post="EVENTS HEAD" linkedin="https://www.linkedin.com/in/ananya1904/" mail="missananya.19.04@gmail.com" />
                <Card url='\image\aboutus\vanshita.jpeg' name="Vanshita Bihani" post="OUTREACH HEAD" linkedin="https://www.linkedin.com/in/vanshita-bihani-010a5a246/" mail="vanshitabihani038@gmail.com" />
                <Card url='\image\aboutus\pranav.jpeg' name="Venkata Sai Pranav " post="OUTREACH HEAD" linkedin="https://www.linkedin.com/in/venkata-sai-pranav-kummari-302b35252/" mail="prnvpranav2003@gmail.com" />
                <Card url='\image\aboutus\sandeep.jpeg' name="Sandeep Charlie" post="CONTENT HEAD" linkedin="https://www.linkedin.com/in/tetakali-sandeep-charlie-5b38a325b//" mail="t.charlie@iitg.ac.in" />
            </div>
            <h1 className="about-aer1">Team AER</h1>
            <div className="about-aer">
                <Card url='\image\aboutus\dean.jpeg' name="Prof. Sumana Dutta" post="DEAN AER" linkedin="https://www.linkedin.com/in/sumana-dutta-12011a10/" mail="doaaer@iitg.ac.in" />
                <Card url='\image\aboutus\assocdean.jpeg' name="Prof. Deepak Sharma" post="ASSOCIATE DEAN AER" linkedin="https://www.linkedin.com/in/deepak-sharma-15649223/" mail="adoaaer@iitg.ac.in" />
            </div>
        </div>

    );
};
export default Team;