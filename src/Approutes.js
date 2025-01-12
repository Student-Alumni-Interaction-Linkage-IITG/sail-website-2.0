import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/About.js";
import Home from "./pages/Home/Home.js";
import EventSmriti from "./pages/Events/Smriti.js";
import EventFinalis from "./pages/Events/Finalis.js";
import EventGraduationTeaParty from "./pages/Events/Graduation Tea Party.js";
import EventInternational from "./pages/Events/International.js";
import EventGraduationBallDance from "./pages/Events/Graduation Ball Dance.js";
import EventSeminar from "./pages/Events/Seminar.js";

import Initiative from "./pages/Initiative/Initiative.js";
import Calender from "./pages/Calender/Calender.js";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events/smriti" element={<EventSmriti/>} />
        <Route path="/events/finalis-resonare" element={<EventFinalis/>} />
        
        <Route path="/events/graduation-tea-party" element={<EventGraduationTeaParty/>} />
        <Route path="/events/international-students-day" element={<EventInternational/>} />
        <Route path="/events/graduation-ball-dance" element={<EventGraduationBallDance/>} />
        <Route path="/events/seminars" element={<EventSeminar/>} />
        
        <Route path="/initiative" element={<Initiative />} />
        <Route path="/calendar" element={<Calender />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;