import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About/About.js";
import Home from "./pages/Home/Home.js";
import Events from "./pages/Events/Events.js";
import Initiative from "./pages/Initiative/Initiative.js";
import Calender from "./pages/Calender/Calender.js";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/initiative" element={<Initiative />} />
        <Route path="/calendar" element={<Calender />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
