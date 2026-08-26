import React from 'react';
import "../../styles/About/About.css";
import Card from './Card.js';

// Import images from the assets folder
import aditya from "../../images/about/aboutus/Aditya Dhaniyaal_General SEC.png";
import mahek from "../../images/about/aboutus/Mahek Nirmal Agrawal_ASSOC GEN. SEC, PG.png";
import priya from "../../images/about/aboutus/Priya Gawshinde _ASSOC GEN. SEC, UG.png";
import akhilesh from "../../images/about/aboutus/Akhilesh_OutReach Head.png";
import princy from "../../images/about/aboutus/Princy_Design Head.png";
import shruti from "../../images/about/aboutus/Shruti_Design Head.png";
import ramtej from "../../images/about/aboutus/Ram Tej_Web Head.png";
import nikunj from "../../images/about/aboutus/Nikunj Jindal_Events Head.png";
import uday from "../../images/about/aboutus/Uday Kumar_Events Head.png";
import anwesha from "../../images/about/aboutus/Anwesha Pati_Content Head.png";
import sajilee from "../../images/about/aboutus/Sajilee Khurana_Content Head.png";
import ayusha from "../../images/about/aboutus/Ayusha_web head.png";
import dean from "../../images/about/aboutus/dean.jpeg";
import tanmay from "../../images/about/aboutus/Tanmay_Dutta.jpeg";

const Team = () => {
  return (
    <div className="about-team1">
      <h1 className="about-team1-head">The Team</h1>

      <p className="about-team1-blog">
        As Henry Ford wisely said, “Coming together is a beginning, staying together is progress, and working together is success.” The achievements of SAIL are a testament to the power of collaboration. Every milestone we’ve reached is the result of dedicated teamwork, where each individual’s contribution has been essential. It's the combined effort, shared vision, and unwavering support within the team that has propelled us forward. Now, let’s take a moment to meet the incredible SAIL team that makes it all possible...
      </p>

      <h1 className="about-aer1">Team SAIL</h1>

      <div className="about-sail">

        {/* GENERAL SEC */}
        <Card
          url={aditya}
          name="Aditya Dhaniyaal"
          post="GENERAL SEC"
          linkedin="https://www.linkedin.com/in/aditya-dhaniyaal/"
          mail="gensec_sail@iitg.ac.in"
        />

        {/* ASSOC GEN. SEC, PG */}
        <Card
          url={mahek}
          name="Mahek Nirmal Agrawal"
          post="ASSOC. GEN. SEC, PG"
          linkedin="https://www.linkedin.com/in/mahek-agrawal-5b6b13266/"
          mail="a.mahek@iitg.ac.in"
        />

        {/* ASSOC GEN. SEC, UG */}
        <Card
          url={priya}
          name="Priya Gawshinde"
          post="ASSOC. GEN. SEC, UG"
          linkedin="https://www.linkedin.com/in/priya-gawshinde/"
          mail="p.gawshinde@iitg.ac.in"
        />

        {/* OUTREACH */}
        <Card
          url={akhilesh}
          name="Akhilesh"
          post="OUTREACH HEAD"
          linkedin="https://www.linkedin.com/in/akhilesh2006/"
          mail="akhilesh4009@iitg.ac.in"
        />

        {/* DESIGN */}
        <Card
          url={princy}
          name="Princy"
          post="DESIGN HEAD"
          linkedin="https://www.linkedin.com/in/princy-sahu-909914225/"
          mail="s.princy@iitg.ac.in"
        />

        <Card
          url={shruti}
          name="Shruti"
          post="DESIGN HEAD"
          linkedin="https://www.linkedin.com/in/shruti-khichi/"
          mail="s.khichi@iitg.ac.in"
        />

        {/* WEB */}
        <Card
          url={ayusha}
          name="ayusha"
          post="WEB HEAD"
          linkedin="https://www.linkedin.com/in/ayusha-thakur-254889315/"
          mail="t.ayusha@iitg.ac.in"
        />

        <Card
          url={ramtej}
          name="Ram Tej"
          post="WEB HEAD"
          linkedin="https://www.linkedin.com/in/ram-tej-duvvuri/"
          mail="ram.duvvuri@iitg.ac.in"
        />

        {/* EVENTS */}
        <Card
          url={nikunj}
          name="Nikunj Jindal"
          post="EVENTS HEAD"
          linkedin="https://www.linkedin.com/in/jindalnikunj/"
          mail="j.nikunj@iitg.ac.in"
        />

        <Card
          url={uday}
          name="Uday Kumar"
          post="EVENTS HEAD"
          linkedin="https://www.linkedin.com/in/udaykumar-iitg/"
          mail="udayk1058@iitg.ac.in"
        />

        {/* CONTENT */}
        <Card
          url={anwesha}
          name="Anwesha Pati"
          post="CONTENT HEAD"
          linkedin="https://www.linkedin.com/in/anwesha-pati-80b840356/"
          mail="p.anwesha@iitg.ac.in"
        />

        <Card
          url={sajilee}
          name="Sajilee Khurana"
          post="CONTENT HEAD"
          linkedin="https://www.linkedin.com/in/sajilee-khurana/"
          mail="k.sajilee@iitg.ac.in"
        />

      </div>

      <h1 className="about-aer1">Team AER</h1>

      <div className="about-aer">
        <Card
          url={dean}
          name="Prof. Kaustubha Mohanty"
          post="DEAN AER"
          linkedin="https://www.linkedin.com/in/profkm/"
          mail="doaaer@iitg.ac.in"
        />

        <Card
          url={tanmay}
          name="Prof. Tanmay Dutta"
          post="FC ALUMNI RELATIONS"
          linkedin="https://www.linkedin.com/in/tanmay-dutta/"
          mail="fcar@iitg.ac.in"
        />

      </div>
    </div>
  );
};

export default Team;
