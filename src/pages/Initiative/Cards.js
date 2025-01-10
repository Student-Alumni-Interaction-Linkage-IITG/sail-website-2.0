import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import "../../styles/Initiatives/Cards.css";
import AMP from "../../images/Initiatives/AMP.png";
import newsletter from "../../images/Initiatives/NewsLetter.png";
import ChemicalCore from "../../images/Initiatives/CHemicalCore.png";
import Placements from "../../images/Initiatives/Placements.png";
import SandS from "../../images/Initiatives/SummariseAndShare.png";
import ask from "../../images/Initiatives/Ask.png";

const Cards = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1); // Extract 'amp' from '#amp'
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center", // Centers the target in the viewport
        });
      }
    }
  }, [location]);


  return (
    <div className="initiative-cards">
      <div className="Initiative-cards-content">
        <div className="initiative-card" id="amp">
        <div className="init" id="amp">
          <div className="initiative-card-image">
            <img src={AMP} alt="" />
          </div>
          <div className="initiative-card-content content-right top-card-content" >
          <div className="contnt">
            <h2 className="Initiatives-Cards-h1">AMP</h2>
            <p className="initiatives-Cards-p long-para">
            Everybody needs a mentor, a person who can guide us and help us
              achieve our goals through his/her vast experience. And who better
              to do this than one of our alumni, who once stood in our
              shoes?
            </p>
            </div>
           <div className="btn">
            <button className="Card-button">Apply</button>
            </div>
          </div>
          </div>
          <div className="init" id="classsong">
          <div className="initiative-card-content content-left">
          <div className="contnt">
            <h2 className="Initiatives-Cards-h1">Class Song</h2>
            <p className="initiatives-Cards-p">
              As a goodbye gift to the graduating class each year, SAIL releases
              the class song, in which all of the graduating class members join
              hands to sing a song as a celebration of the great years they have
              spent on the IITG campus.
       </p>
     </div>
          </div>
          <div className="initiative-card-image" >
            <iframe
              className="card-iframe"
              src="https://www.youtube.com/embed/9yk5Ez-rNNg?si=gwdcLBRVCXFsiUoP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
         
        </div>
       
        <div className="init" id="yearbk"> 
          <div className="initiative-card-content content-left">
          <div className="contnt">
            <h2 className="Initiatives-Cards-h1">Yearbook</h2>
            <p className="initiatives-Cards-p long-para">
              College life is filled with incredible moments and we take some of
              them with us as memories. SAIL offers an opportunity for the final
              year students to relive some of those special occasions through
              the words and images of their peers in the form of the Yearbook.
              It is the memories that live on and the sweetest of them are made
              here at IITG!
            </p>
            <p className="initiatives-Cards-p small-para">
            College life is filled with incredible moments and we take some of them with us as memories. SAIL offers an opportunity for the final year students to relive some of those special occasions through the words and images of their peers in the form of the Yearbook.
            </p>
            </div>
            <button className="Card-button long-button" onClick={() => window.open('https://flipbook-pied.vercel.app/', '_blank')}> View Yearbook</button>
          </div>
          <div className="initiative-card-image">
            <iframe
              className="card-iframe"
              src="https://www.youtube.com/embed/vQIzSxSc7G4?si=b7Jgaj88w4-hESey"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
         
        </div>
       
        <div className="init" id="Newsleter">
          <div className="initiative-card-image">
            <img src={newsletter} alt="" />
          </div>
          <div className="initiative-card-content content-right">
          <div className="contnt">
            <h2 className="Initiatives-Cards-h1">Newsletter</h2>
            <p className="initiatives-Cards-p">
              Every semester, SAIL publishes an Alumni Newsletter. It comprises
              news about recent advancements as well as stories on significant
              campus events and activities. This helps alumni stay informed and
              up to date about the institute.
            </p>
            </div>
            <button className="Card-button long-button">Get Newsletter</button>
          </div>
         
        </div>
      
       
        
        <div className="init" id="chemicalcore">
          <div className="initiative-card-image">
            <img src={ChemicalCore} alt="" />
          </div>
          <div className="initiative-card-content content-right ">
          <div className="contnt">
            <h2 className="Initiatives-Cards-h1">Core mentorship</h2>
            <p className="initiatives-Cards-p">
              The Core Mentorship Series by SAIL is designed to bridge the gap
              between students and experienced professionals in core engineering
              fields. Through one-on-one and group mentoring sessions, students
              gain valuable insights into career opportunities, skill
              development, and industry trends. Featuring interactive
              discussions with alumni and experts, this initiative empowers
              students to make informed decisions, align their academic pursuits
              with career goals, and excel in their respective domains.
            </p>
            <p className="initiatives-Cards-p">
            </p>
            </div>
          </div>
          </div>
        
       
        <div className="init" id="placement">
          <div className="initiative-card-content content-left">
          <div className="contnt">
            <h2 className="Initiatives-Cards-h1 big-h1">Placement Mock Interview</h2>
            <p className="initiatives-Cards-p">
              The Placement Mock Interviews initiative by SAIL is designed to
              help students get ready for their recruitment journey by creating
              realistic interview experiences. These mock interviews offer
              tailored feedback, allowing participants to pinpoint their
              strengths and areas that need improvement. The program boosts
              confidence, enhances communication skills, and deepens domain
              knowledge, providing students with the resources they need to
              succeed in placement processes. This initiative showcases SAIL's
              dedication to promoting career readiness and empowering students
              for future success.
            </p>
            </div>
          </div>
          <div className="initiative-card-image">
            <img src={Placements} alt="" />
          </div>
          
        </div>
        
        <div className="init" id="alum">
          <div className="initiative-card-image">
            <iframe
              className="card-iframe"
              src="https://www.youtube.com/embed/yCkLjNkqrpY?si=q65mlqYfrPLeaZ79"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="initiative-card-content content-right">
          <div className="contnt">
            <h2 className="Initiatives-Cards-h1">Alumni Greet</h2>
            <p className="initiatives-Cards-p long-para">
              As freshers, we are quite intrigued and excited about the idea of
              joining a college. Along with this, we also have lots of doubts
              regarding the campus and the Institute in general. 'Alumni Greet'
              is an initiative by SAIL, in which, a self-shot welcome video,
              made by an alumnus/alumna from a hostel, is played at the hostel
              orientation, for the freshers.
            </p>
            <p className="initiatives-Cards-p small-para">'Alumni Greet' is an initiative by SAIL, in which, a self-shot welcome video, made by an alumnus/alumna from a hostel, is played at the hostel orientation, for the freshers.</p>
   </div>
        </div>
        {/* <div className="initiative-card left large-card" id="summarise-and-share"> 
          <div className="initiative-card-content content-left">
            <h2 className="Initiatives-Cards-h1">Summarise and Share</h2>
            <p className="initiatives-Cards-p">
              Summarize & Share is a thoughtful initiative designed to ensure
              that the knowledge and insights imparted during alumni-led
              webinars, talks and seminars are accessible to all. Recognizing
              that not everyone can attend these events in real time, this
              program focuses on capturing the key takeaways, discussions, and
              highlights in a well-structured summary. These summaries are then
              shared with the IITG student community, allowing everyone to
              benefit from the wisdom and experiences shared by our esteemed
              alumni.
            </p>
          </div>
          <div className="initiative-card-image">
            <img src={SandS} alt="" />
          </div> */}
          {/* </div> */}
         
        </div>
       
        <div className="init" id="ask-alum">
          <div className="initiative-card-image">
            <img src={ask} alt="" />
          </div>
          <div className="initiative-card-content content-right">
          <div className="contnt">
            <h2 className="Initiatives-Cards-h1 big-h1">Ask the Alumni</h2>
            <p className="initiatives-Cards-p">
              Learning happens when we ask questions. The more we question, the
              better answers we get.Ask the Alumni is an initiative by SAIL
              where we choose an alumnus/alumna to address the queries of our
              campus janta. The alumni will provide short videos to answer the
              questions, which will be posted on our Instagram handle.
            </p>
        </div>
          </div>
        </div>
      
        <div className="init" id="alum award">
          <div className="initiative-card-content content-left">
          <div className="contnt">
            <h2 className="Initiatives-Cards-h1 big-h1">Alumni Awards</h2>
            <p className="initiatives-Cards-p">
              As freshers, we are quite intrigued and excited about the idea of
              joining a college. Along with this, we also have lots of doubts
              regarding the campus and the Institute in general. 'Alumni Greet'
              is an initiative by SAIL, in which, a self-shot welcome video,
              made by an alumnus/alumna from a hostel, is played at the hostel
              orientation, for the freshers.
            </p>
            </div>
          </div>
          <div className="initiative-card-image">
            <img src={SandS} alt="" />
        
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cards;
