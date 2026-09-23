import React, { useState } from 'react';
import '../../styles/events/Latent48.css';

const UNSTOP_REGISTRATION_URL =
  'https://unstop.com/p/dataforge-sail-granica-hackathon-forging-the-data-that-powers-ai-iit-guwahati-1750359?lb=logged_out_user%3Futm_medium%3DShare&utm_source=online_coding_challenge&utm_campaign=Logged_out_user';

const GRANICA_WEBSITE_URL = 'https://www.granica.ai/';

const Latent48 = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const faqs = [
    {
      q: 'Who is eligible to participate in LATENT48?',
      a: 'The hackathon is open to all Undergraduate, Postgraduate, and Engineering college students across recognized universities. Students from all branches with an interest in AI, ML, and Data are welcome.',
    },
    {
      q: 'What is the team size requirement?',
      a: 'Teams can have between 1 to 3 members. You can participate solo or with up to two fellow students.',
    },
    {
      q: 'Where will Round 01 be held?',
      a: 'Round 01 is an offline, 48-hour hackathon conducted in-person at the Indian Institute of Technology (IIT), Guwahati campus.',
    },
    {
      q: 'How will Round 02 (Final Presentation) be conducted?',
      a: 'The Top 10 teams from Round 01 will qualify for Round 02, which is conducted online. Each team gets a 20-minute slot (7-minute presentation followed by 13-minute Q&A) before a jury panel from Granica.',
    },
    {
      q: 'What are the Pre-Placement Interviews (PPI) with Granica?',
      a: 'The Top 3 teams will be offered direct Pre-Placement Interviews (PPIs) with the Granica engineering team, giving participants the opportunity to explore full-time career roles.',
    },
    {
      q: 'Is there any registration fee?',
      a: 'No, registration on the Unstop portal is completely free.',
    },
  ];

  return (
    <div className="latent-page">
      {/* ==================== HERO HEADER ==================== */}
      <header className="latent-hero">
        <div className="latent-hero-container">
          <h1 className="latent-hero-h1">LATENT48 Hackathon</h1>
          <p className="latent-hero-subtitle">
            Forging the Data that Powers AI • Think. Build. Ship.
          </p>

          <p className="latent-hero-description">
            A 48-hour offline hackathon organised by the Students' Alumni Interaction Linkage (SAIL),
            IIT Guwahati, in collaboration with Granica. Solve real-world challenges at the intersection
            of Artificial Intelligence, Machine Learning, and Data Engineering.
          </p>

          <div className="latent-hero-actions">
            <a
              href={UNSTOP_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="latent-btn-crimson"
            >
              <span>Register on Unstop</span>
              <span>↗</span>
            </a>
            <a href="#stages" className="latent-btn-outline">
              <span>View Timeline</span>
              <span>↓</span>
            </a>
          </div>

          <div className="latent-hero-deadline">
            <span>⏳ Registration Deadline: <strong>23 Sep 2026, 11:59 PM IST</strong></span>
          </div>
        </div>
      </header>

      {/* ==================== MAIN CONTENT ==================== */}
      <main className="latent-content-container">
        {/* Quick Highlights Bar */}
        <div className="latent-stats-grid">
          <div className="latent-stat-card">
            <div className="latent-stat-icon">🏆</div>
            <div className="latent-stat-val">₹1,00,000</div>
            <div className="latent-stat-lbl">Total Cash Prizes & Awards</div>
          </div>
          <div className="latent-stat-card">
            <div className="latent-stat-icon">💼</div>
            <div className="latent-stat-val">Granica PPIs</div>
            <div className="latent-stat-lbl">Pre-Placement Interviews for Top 3</div>
          </div>
          <div className="latent-stat-card">
            <div className="latent-stat-icon">⏱️</div>
            <div className="latent-stat-val">48 Hours</div>
            <div className="latent-stat-lbl">In-Person Offline Hackathon</div>
          </div>
          <div className="latent-stat-card">
            <div className="latent-stat-icon">👥</div>
            <div className="latent-stat-val">1 - 3 Members</div>
            <div className="latent-stat-lbl">Undergraduate & Postgraduate</div>
          </div>
        </div>

        {/* About Organizers */}
        <div className="latent-section-heading">
          <h2>About the Organizers</h2>
          <p>Connecting student talent directly with industry innovators and alumni leadership.</p>
        </div>

        <div className="latent-org-grid">
          <div className="latent-org-box">
            <div>
              <span className="latent-org-tag">Technology Partner</span>
              <h3>Granica</h3>
              <p>
                Co-founded by IIT Guwahati alumni, Granica is an AI infrastructure company building
                the efficiency layer for enterprise AI. Granica creates foundational technologies
                for large-scale data optimization, compression, and enterprise data processing.
              </p>
            </div>
            <a
              href={GRANICA_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="latent-org-link"
            >
              Visit Granica Website (granica.ai) ↗
            </a>
          </div>

          <div className="latent-org-box">
            <div>
              <span className="latent-org-tag">Host Institute</span>
              <h3>SAIL, IIT Guwahati</h3>
              <p>
                Students' Alumni Interaction Linkage (SAIL) is the student body of IIT Guwahati
                dedicated to bridging students with alumni networks, professional mentorship,
                distinguished lectures, and high-impact student competitions.
              </p>
            </div>
            <a href="/sail/about" className="latent-org-link">
              Learn More About SAIL ↗
            </a>
          </div>
        </div>

        {/* Focus Domains */}
        <div className="latent-domain-strip">
          <span className="latent-domain-chip">🤖 Artificial Intelligence</span>
          <span className="latent-domain-chip">📈 Machine Learning</span>
          <span className="latent-domain-chip">📊 Data Science</span>
          <span className="latent-domain-chip">⚙️ Data Engineering</span>
        </div>

        {/* Prizes Section */}
        <div className="latent-section-heading" id="prizes">
          <h2>Rewards and Prizes</h2>
          <p>Cash prizes worth ₹1,00,000, Granica Pre-Placement Interviews, and certificates.</p>
        </div>

        <div className="latent-prizes-grid">
          {/* Rank 2 */}
          <div className="latent-prize-card">
            <div className="latent-prize-rank">🥈 1st Runner Up (Rank 02)</div>
            <div className="latent-prize-cash">₹30,000</div>
            <div className="latent-prize-note">Direct Cash Award</div>
            <ul className="latent-prize-list">
              <li>✓ <strong>Pre-Placement Interview</strong> with Granica</li>
              <li>✓ Certificate of Excellence</li>
              <li>✓ Granica Special Kit</li>
            </ul>
          </div>

          {/* Rank 1 */}
          <div className="latent-prize-card latent-prize-featured">
            <span className="latent-featured-ribbon">Winner</span>
            <div className="latent-prize-rank">🥇 Winner (Rank 01)</div>
            <div className="latent-prize-cash">₹50,000</div>
            <div className="latent-prize-note">Grand Cash Award</div>
            <ul className="latent-prize-list">
              <li>✓ <strong>Pre-Placement Interview</strong> with Granica</li>
              <li>✓ Direct Mentorship from Granica Team</li>
              <li>✓ Winner Trophy & Certificate</li>
              <li>✓ Granica Special Kit</li>
            </ul>
          </div>

          {/* Rank 3 */}
          <div className="latent-prize-card">
            <div className="latent-prize-rank">🥉 2nd Runner Up (Rank 03)</div>
            <div className="latent-prize-cash">₹20,000</div>
            <div className="latent-prize-note">Direct Cash Award</div>
            <ul className="latent-prize-list">
              <li>✓ <strong>Pre-Placement Interview</strong> with Granica</li>
              <li>✓ Certificate of Excellence</li>
              <li>✓ Granica Special Kit</li>
            </ul>
          </div>
        </div>

        {/* Additional Perks */}
        <div className="latent-perks-banner">
          <div className="latent-perk-snippet">
            <span>🎁</span>
            <span>Top 10 Teams: Special Kits & Finalist Certificates</span>
          </div>
          <div className="latent-perk-snippet">
            <span>📜</span>
            <span>All Participants: Verified Certificates of Participation</span>
          </div>
        </div>

        {/* Stages & Timelines */}
        <div className="latent-section-heading" id="stages">
          <h2>Stages and Timelines</h2>
          <p>Mark these key dates on your calendar to ensure you don't miss out.</p>
        </div>

        <div className="latent-timeline-list">
          {/* Stage 0 */}
          <div className="latent-step-card">
            <div className="latent-step-number latent-step-number-crimson">00</div>
            <div className="latent-step-content">
              <span className="latent-step-date">20 Sep 2026 • 06:29 PM IST</span>
              <h3 className="latent-step-title">Registration Deadline on Unstop</h3>
              <p className="latent-step-desc">
                Final date to submit team registrations (1 to 3 members). Make sure all members have
                completed their registration on Unstop before 06:29 PM IST.
              </p>
            </div>
          </div>

          {/* Round 1 */}
          <div className="latent-step-card">
            <div className="latent-step-number">01</div>
            <div className="latent-step-content">
              <span className="latent-step-date">25 Sep 2026, 06:30 PM — 27 Sep 2026, 06:31 PM IST</span>
              <h3 className="latent-step-title">Round 01: 48-Hour Offline Hackathon</h3>
              <p className="latent-step-desc">
                Conducted in-person at IIT Guwahati. Teams work over 48 continuous hours to ideate, develop,
                and build functional solutions in AI, Machine Learning, and Data. Solutions will be evaluated
                on innovation, technical implementation, and real-world impact.
                <strong> The Top 10 teams will qualify for Round 02.</strong>
              </p>
            </div>
          </div>

          {/* Round 2 */}
          <div className="latent-step-card">
            <div className="latent-step-number">02</div>
            <div className="latent-step-content">
              <span className="latent-step-date">03 Oct 2026 • 02:00 PM — 06:01 PM IST</span>
              <h3 className="latent-step-title">Round 02: Final Presentation & Jury Evaluation</h3>
              <p className="latent-step-desc">
                Conducted online. The Top 10 teams will present their solutions to a panel of judges from
                Granica. Each team is allotted 20 minutes (7 minutes for presentation and implementation demo,
                followed by 13 minutes for Q&A with the judges).
              </p>
            </div>
          </div>

          {/* Round 3 */}
          <div className="latent-step-card">
            <div className="latent-step-number latent-step-number-crimson">03</div>
            <div className="latent-step-content">
              <span className="latent-step-date">05 Oct 2026 • 05:16 AM — 06:17 AM IST</span>
              <h3 className="latent-step-title">Round 03: Pre-Placement Interview (PPI) Round</h3>
              <p className="latent-step-desc">
                The Top 3 teams will appear for direct Pre-Placement Interviews (PPI) with the Granica team,
                offering them the chance to explore engineering opportunities and careers with the company.
              </p>
            </div>
          </div>
        </div>

        {/* Eligibility & Criteria */}
        <div className="latent-info-columns">
          <div className="latent-info-panel">
            <h3>Eligibility Criteria</h3>
            <ul className="latent-info-list">
              <li><strong>Eligible Students:</strong> Open to Undergraduate, Postgraduate, and Engineering students.</li>
              <li><strong>Team Size:</strong> 1 to 3 members per team.</li>
              <li><strong>Inter-department:</strong> Cross-year and inter-branch team compositions are permitted.</li>
              <li><strong>Location:</strong> Round 01 requires physical attendance at IIT Guwahati campus.</li>
            </ul>
          </div>

          <div className="latent-info-panel">
            <h3>Evaluation Criteria</h3>
            <ul className="latent-info-list">
              <li><strong>Innovation & Approach:</strong> Originality in formulating and addressing the problem statement.</li>
              <li><strong>Technical Depth:</strong> Quality of implementation, model performance, and architectural soundness.</li>
              <li><strong>Scalability:</strong> Feasibility and robustness when handling large-scale data workloads.</li>
              <li><strong>Defense & Communication:</strong> Ability to clearly present, defend, and answer questions before the jury.</li>
            </ul>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="latent-section-heading">
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about registration, participation, and format.</p>
        </div>

        <div className="latent-faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="latent-faq-row">
                <button
                  className="latent-faq-button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="latent-faq-symbol">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <div className="latent-faq-text">{faq.a}</div>}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="latent-cta-box">
          <h3>Participate in LATENT48</h3>
          <p>
            Registrations close on 20 September 2026 at 06:29 PM IST. Form your team of 1 to 3 members
            and register on Unstop to compete for ₹1,00,000 in cash prizes and Granica PPIs.
          </p>
          <a
            href={UNSTOP_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="latent-btn-crimson"
          >
            Register on Unstop ↗
          </a>
        </div>
      </main>
    </div>
  );
};

export default Latent48;
