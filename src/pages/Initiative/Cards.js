import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/Initiatives/Cards.css";
import AMP from "../../images/Initiatives/AMP.png";
import Newsletter from "../../images/Initiatives/NewsLetter.png";
import ChemicalCore from "../../images/Initiatives/core.png";
import Placements from "../../images/Initiatives/Placements.png";
import SandS from "../../images/Initiatives/summarise.png";
import Yearbook from "../../images/Initiatives/Yearbook.png";
import Alumni from "../../images/Initiatives/alumni.png";

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
        <div className="initiative-card">
          <div className="init" id="amp">
            <div className="initiative-card-image">
              <img src={AMP} alt="" />
            </div>
            <div className="initiative-card-content content-right top-card-content">
              <div className="contnt">
                <h2 className="Initiatives-Cards-h1">AMP</h2>
                <p className="initiatives-Cards-p long-para">
                  Everybody needs a mentor, a person who can guide us and help
                  us achieve our goals through his/her vast experience. And who
                  better to do this than one of our alumni, who once stood in
                  our shoes?
                </p>
              </div>
              <div className="btn">
                <button className="Card-button">Apply</button>
              </div>
            </div>
          </div>
          <div className="init" id="class-song">
            <div className="initiative-card-content content-left">
              <div className="contnt">
                <h2 className="Initiatives-Cards-h1">Class Song</h2>
                <p className="initiatives-Cards-p">
                  Each year, as a heartfelt farewell to the graduating class, We
                  release the Class Song, a cherished tradition at IITG. This
                  special song serves as a musical tribute to the unforgettable
                  journey of the graduating students, capturing the essence of
                  their time on campus. In a moving ceremony, all members of the
                  graduating class come together, hand in hand, to sing the
                  song, celebrating the friendships, memories, and milestones
                  they’ve achieved over the years. The Class Song is more than
                  just a melody; it symbolizes the unity, growth, and shared
                  experiences of the students, marking the end of an era and the
                  beginning of new adventures. This tradition not only
                  strengthens the bond among classmates but also leaves a
                  lasting legacy, allowing them to carry the spirit of IITG with
                  them as they step into the world beyond.
                </p>
              </div>
              <button
                className="Card-button long-button"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=2Df6pYrRIzQ&list=PLWf43cSrArKuysk9tKZSdEX3cHKJJAJWu",
                    "_blank"
                  )
                }
              >
                {" "}
                View
              </button>
            </div>
            <div className="initiative-card-image">
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

          <div className="init" id="yearbook">
            <div className="initiative-card-content content-left">
              <div className="contnt">
                <h2 className="Initiatives-Cards-h1">Yearbook</h2>
                <p className="initiatives-Cards-p long-para">
                  College life is filled with incredible moments and we take
                  some of them with us as memories. SAIL offers an opportunity
                  for the final year students to relive some of those special
                  occasions through the words and images of their peers in the
                  form of the Yearbook. It is the memories that live on and the
                  sweetest of them are made here at IITG!
                </p>
              </div>
              <div className="buttons">
                <button
                  className="Card-button long-button"
                  onClick={() =>
                    window.open("https://www.iitg.ac.in/yearbook/yearbook24/", "_blank")
                  }
                >
                  {" "}
                  View Yearbook
                </button>

                <button
                  className="Card-button long-button"
                  onClick={() =>
                    window.open("https://www.iitg.ac.in/yearbook", "_blank")
                  }
                >
                  {" "}
                  Yearbook Portal
                </button>
              </div>
            </div>
            <div className="initiative-card-image">
              <img src={Yearbook} alt="" />
            </div>
          </div>

          <div className="init" id="newsletter">
            <div className="initiative-card-image">
              <img src={Newsletter} alt="" />
            </div>
            <div className="initiative-card-content content-right">
              <div className="contnt">
                <h2 className="Initiatives-Cards-h1">Newsletter</h2>
                <p className="initiatives-Cards-p">
                  Every semester, SAIL publishes an Alumni Newsletter. It
                  comprises news about recent advancements as well as stories on
                  significant campus events and activities. This helps alumni
                  stay informed and up to date about the institute.
                </p>
              </div>
              <button className="Card-button long-button">
                Get Newsletter
              </button>
            </div>
          </div>

          <div className="init" id="core-mentorship">
            <div className="initiative-card-image">
              <img src={ChemicalCore} alt="" />
            </div>
            <div className="initiative-card-content content-right ">
              <div className="contnt">
                <h2 className="Initiatives-Cards-h1">Core mentorship</h2>
                <p className="initiatives-Cards-p">
                  The Core Mentorship Series by SAIL is designed to bridge the
                  gap between students and experienced professionals in core
                  engineering fields. Through one-on-one and group mentoring
                  sessions, students gain valuable insights into career
                  opportunities, skill development, and industry trends.
                  Featuring interactive discussions with alumni and experts,
                  this initiative empowers students to make informed decisions,
                  align their academic pursuits with career goals, and excel in
                  their respective domains.
                </p>
                <p className="initiatives-Cards-p"></p>
              </div>
            </div>
          </div>

          <div className="init" id="placement-mock-interview">
            <div className="initiative-card-content content-left">
              <div className="contnt">
                <h2 className="Initiatives-Cards-h1 big-h1">
                  Placement Mock Interview
                </h2>
                <p className="initiatives-Cards-p">
                  The Placement Mock Interviews initiative by SAIL is designed
                  to help students get ready for their recruitment journey by
                  creating realistic interview experiences. These mock
                  interviews offer tailored feedback, allowing participants to
                  pinpoint their strengths and areas that need improvement. The
                  program boosts confidence, enhances communication skills, and
                  deepens domain knowledge, providing students with the
                  resources they need to succeed in placement processes. This
                  initiative showcases SAIL's dedication to promoting career
                  readiness and empowering students for future success.
                </p>
              </div>
            </div>
            <div className="initiative-card-image">
              <img src={Placements} alt="" />
            </div>
          </div>

          <div className="init" id="alumni-greet">
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
                  Alumni Greet is a heartwarming initiative by the Student
                  Alumni Interaction Linkage (SAIL) aimed at welcoming freshers
                  to their new college life. Through self-shot videos, alumni
                  share their experiences, memories, and advice, offering a
                  personal touch to the hostel orientation. These videos, played
                  during the orientation, help bridge the gap between current
                  students and alumni, addressing common doubts about campus
                  life, academics, and hostel living. By sharing their journeys
                  and successes, alumni inspire and motivate freshers, making
                  them feel a part of a larger, supportive community. This
                  initiative not only reduces the anxiety of new students but
                  also fosters a strong sense of belonging and pride in their
                  institute.
                </p>
              </div>
            </div>
          </div>
          <div className="init" id="alumni-awards">
            <div className="initiative-card-content content-left">
              <div className="contnt">
                <h2 className="Initiatives-Cards-h1 big-h1">Alumni Awards</h2>
                <p className="initiatives-Cards-p">
                  As freshers, we are quite intrigued and excited about the idea
                  of joining a college. Along with this, we also have lots of
                  doubts regarding the campus and the Institute in general.
                  'Alumni Greet' is an initiative by SAIL, in which, a self-shot
                  welcome video, made by an alumnus/alumna from a hostel, is
                  played at the hostel orientation, for the freshers.
                </p>
              </div>
            </div>
            <div className="initiative-card-image">
              <img src={Alumni} alt="" />
            </div>
          </div>
          <div className="init" id="summarise-and-share">
            <div className="initiative-card-image">
              <img src={SandS} alt="" />
            </div>
            <div className="initiative-card-content content-left">
              <div className="contnt">
                <h2 className="Initiatives-Cards-h1">Summarise and Share</h2>
                <p className="Initiatives-Cards-p">
                  Summarize & Share is a thoughtful initiative designed to
                  ensure that the knowledge and insights imparted during
                  alumni-led webinars, talks and seminars are accessible to all.
                  Recognizing that not everyone can attend these events in real
                  time, this program focuses on capturing the key takeaways,
                  discussions, and highlights in a well-structured summary.
                  These summaries are then shared with the IITG student
                  community, allowing everyone to benefit from the wisdom and
                  experiences shared by our esteemed alumni.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="init" id="ask-the-alumni">
            <div className="initiative-card-image">
              <img src={ask} alt="" />
            </div>
            <div className="initiative-card-content content-right">
              <div className="contnt">
                <h2 className="Initiatives-Cards-h1 big-h1">Ask the Alumni</h2>
                <p className="initiatives-Cards-p">
                  Learning happens when we ask questions. The more we question,
                  the better answers we get.Ask the Alumni is an initiative by
                  SAIL where we choose an alumnus/alumna to address the queries
                  of our campus janta. The alumni will provide short videos to
                  answer the questions, which will be posted on our Instagram
                  handle.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
