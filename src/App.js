import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Rates from "./components/Rates";
import Levels from "./components/Levels";
import Instructors from "./components/Instructors";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Levels />
      <Rates />
      <Location />
      <Instructors />
      <Footer />
    </div>
  );
}

export default App;
