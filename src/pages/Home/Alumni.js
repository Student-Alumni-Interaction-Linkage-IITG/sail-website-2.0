import React, { useEffect, useState, useRef } from 'react';
import '../../styles/Home/Alumni.css'; // Import your CSS file
import grad from '../../images/home/graduation 1.png';
import idea from '../../images/home/idea 1.png';
import workteam from '../../images/home/work-team 1.png';
import worlde from '../../images/home/worldwide 1.png';

const AlumniStats = () => {
  const [counts, setCounts] = useState({
    startups: 0,
    iimAlumni: 0,
    msAbroad: 0,
    students: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 } 
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const totalDuration = 2000; // Total time in milliseconds
    const intervalTime = 10; // Time interval for updating numbers
    const steps = totalDuration / intervalTime;

    const targets = {
      startups: 90,
      iimAlumni: 100,
      msAbroad: 1730,
      students: 5231,
    };

    const incrementValues = {
      startups: targets.startups / steps,
      iimAlumni: targets.iimAlumni / steps,
      msAbroad: targets.msAbroad / steps,
      students: targets.students / steps,
    };

    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        const newCounts = { ...prevCounts };

        Object.keys(newCounts).forEach((key) => {
          if (newCounts[key] < targets[key]) {
            newCounts[key] = Math.min(
              newCounts[key] + incrementValues[key],
              targets[key]
            );
          }
        });

        return newCounts;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="alumni-stats" ref={statsRef}>
      <div className="acontent">
        <h2>Our Alumni</h2>
        <p>
          IIT Guwahati has now established itself as a treasured and admired organization in
          different parts of the world. Its vast reservoir of talent is now spreading its footprint
          everywhere, showcasing the best that IITG has to offer.
        </p>
      </div>
      <div className="stats">
        <div className="stats-container">
          <div className="order1">
            <div className="stat">
              <div className="icon">
                <img src={idea} alt="Startups" />
              </div>
              <div className="count">{Math.floor(counts.startups)}+</div>
              <div className="label">Startups</div>
            </div>
            <div className="stat">
              <div className="icon">
                <img src={worlde} alt="IIM Alumni" />
              </div>
              <div className="count">{Math.floor(counts.iimAlumni)}+</div>
              <div className="label">IIM Alumni</div>
            </div>
          </div>
          <div className="order2">
            <div className="stat">
              <div className="icon">
                <img src={workteam} alt="MS Abroad" />
              </div>
              <div className="count">{Math.floor(counts.msAbroad)}+</div>
              <div className="label">MS Abroad</div>
            </div>
            <div className="stat">
              <div className="icon">
                <img src={grad} alt="Students" />
              </div>
              <div className="count">{Math.floor(counts.students)}+</div>
              <div className="label">Students</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniStats;
