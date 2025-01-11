import React, { useState, useEffect } from "react";
import "../../styles/Home/Alumni_award.css";

import img from "../../images/home/sailhome1.png";
import img2 from "../../images/home/group_photo.svg";
import id_card_icon from "../../images/home/id_card_icon.png";
import transcript from "../../images/home/transcript_icon.png";
import VerticalSlider from './vslid';



const Aa = () => {



 

  return (
    <div className="aa-container1" id='service'>
      <div className="aa-Alumni">
        {/* Left content */}
        <div className="aa-car">

          <div className="aa-car-image1" >
            <img src="/image/homepage/alum_services.png" alt="img" />
          </div>

          <div className="aa-car-content1" >

            <div className="aa-car2">
              <h1>Alumni Services</h1>
              <p>
              We believe that every relationship is a two-way street. And the bond between alumni and the students of IITG is no different. We, as students of your alma mater, are always there to help you SAIL through any difficulties concerning IITG be it something major like the immediate Issuance of Original/Duplicate certificates, grade cards, the urgent requirement of Degree Transcripts, or minor ones like campus visits.
              </p>
            </div>
            <div className="aacar-buttons">
              <div className="admit-transcript-container">
                <div className="item" >
                
                  <img src={id_card_icon} alt="Admit Card Icon" className="icon" />
                  <p className="text" onClick={() => window.open('https://iitg.ac.in/acad/alumni/alumni_duplicate_transcript.php', '_blank', 'noopener,noreferrer')}>Get Alumni Card</p>
                </div>
                <div className="item">
                  <img src={transcript} alt="Transcript Icon" className="icon" />
                  <p className="text" onClick={() => window.open('https://online.iitg.ac.in/aerportal/', '_blank', 'noopener,noreferrer')}  >How to get Transcript?</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="cad">
          <div className="aa-card1">
            <div className="aa-card-content1">

              <div className="aa-card2">
                <h1>Alumni Awards</h1>
                <p>
                  
IIT Guwahati has instituted four categories of awards to be given annually to recognize and honour the achievements and contributions of its alumni. The three categories of awards are the Outstanding Service Awards (OSA), Distinguished Alumni Awards (DAA) and Young Alumni Achiever Awards (YAAA).
                </p>
              </div>
              <div className="aa-buttons">
                <button className="aa-buttons-apply" onClick={() => window.open('https://online.iitg.ac.in/aerportal/nomination/', '_blank', 'noopener,noreferrer')}>Apply</button>
                <button className="aa-buttons-readmore" onClick={() => window.open('https://www.iitg.ac.in/aer/alumni_award', '_blank', 'noopener,noreferrer')} >Read More</button>
              </div>
            </div>
            <div className="aa-card-image1">
              <img
                src={img}
                alt="alumn awards"
              />
              
            </div>
          </div>
          <div className="aa-card3">
            <VerticalSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aa;
