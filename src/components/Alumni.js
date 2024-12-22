import React, { useEffect, useState } from 'react';
import '../styles/Alumni.css';

function Alumni() {
  const [counts, setCounts] = useState({
    startups: 0,
    iimAlumni: 0,
    msAbroad: 0,
    students: 0,
  });

  const targets = {
    startups: 90,
    iimAlumni: 100,
    msAbroad: 1730,
    students: 5231,
  };

  useEffect(() => {
   
    const duration = 2000;
    const interval = duration / Math.max(...Object.values(targets)); 

    const incrementCount = () => {
      const newCounts = { ...counts };
      let completed = 0; 

      const countInterval = setInterval(() => {
        let allCompleted = true; 

        for (const key in targets) {
          if (newCounts[key] < targets[key]) {
            newCounts[key] = Math.min(newCounts[key] + 1, targets[key]);
            allCompleted = false; 
          }
        }

        setCounts(newCounts);

      
        if (allCompleted) {
          clearInterval(countInterval);
        }
      }, interval);
    };

    incrementCount();
  }, []);

  return (
    <div className="alumni">
      <h2>Our Alumni</h2>
      <p>Some highlights of our alumni achievements.</p>
      <div className="alumni-stats">
        <div>
          <h3>{counts.startups}+</h3>
          <p>Startups</p>
        </div>
        <div>
          <h3>{counts.iimAlumni}+</h3>
          <p>IIM Alumni</p>
        </div>
        <div>
          <h3>{counts.msAbroad}+</h3>
          <p>MS Abroad</p>
        </div>
        <div>
          <h3>{counts.students}+</h3>
          <p>Students</p>
        </div>
      </div>
    </div>
  );
}

export default Alumni;
