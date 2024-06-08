import React from "react";
import Navbar from "../components/Navbar";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import DanceStyles from "../components/DanceStyles";
import Rates from "../components/Rates";
import Levels from "../components/Levels";
import Instructors from "../components/Instructors";
import Schedule from "../components/Schedule";
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
      <Schedule />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
