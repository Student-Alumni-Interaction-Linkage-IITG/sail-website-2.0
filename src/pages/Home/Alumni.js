import React, { useEffect, useState } from 'react';
import '../../styles/Home/Alumni.css'; // Import your CSS file
import grad from '../../images/home/graduation 1.png'
import idea from '../../images/home/idea 1.png'
import workteam from '../../images/home/work-team 1.png'
import worlde from '../../images/home/worldwide 1.png'

const AlumniStats = () => {
  const [counts, setCounts] = useState({
    startups: 0,
    iimAlumni: 0,
    msAbroad: 0,
    students: 0,
  });

  useEffect(() => {
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
  }, []);

  return (
    <div className="alumni-stats">
    <div className='acontent'>
      <h2 >Our Alumni</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
      </div>
      <div className='stats'>
      <div className="stats-container">
      <div className='order1'>
        <div className="stat">
          <div className="icon"><img src={idea}/></div>
          <div className="count">{Math.floor(counts.startups)}+</div>
          <div className="label">Startups</div>
        </div>
        <div className="stat">
          <div className="icon"><img src={worlde}/></div>
          <div className="count">{Math.floor(counts.iimAlumni)}+</div>
          <div className="label">IIM Alumni</div>
        </div>
        </div>
        <div className='order2'>
        <div className="stat">
          <div className="icon"><img src={workteam}/></div>
          <div className="count">{Math.floor(counts.msAbroad)}+</div>
          <div className="label">MS Abroad</div>
        </div>
        <div className="stat">
          <div className="icon"><img src={grad}/></div>
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
