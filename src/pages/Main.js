import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Location from "../components/Location/Location";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import DanceStyles from "../components/Dance/DanceStyles";
import Rates from "../components/Rates/Rates";
import Levels from "../components/Levels/Levels";
import Instructors from "../components/Instructor/Instructors";
import Schedule from "../components/Schedule/Schedule";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Levels />
      <DanceStyles />
      <Instructors />
      <Rates />
      <Location />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
