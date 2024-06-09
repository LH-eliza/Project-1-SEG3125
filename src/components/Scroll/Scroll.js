import React, { useState, useEffect } from "react";
import Hero from "../Hero/Hero";
import Levels from "../Levels/Levels";
import DanceStyles from "../Dance/DanceStyles";
import Instructors from "../Instructor/Instructors";
import Rates from "../Rates/Rates";
import Location from "../Location/Location";
import Schedule from "../Schedule/Schedule";
import PopupMenu from "../Navbar/PopupMenu";
import { Element } from "react-scroll";
import "./scroll.css";

const Home = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.body.classList.add("popup-visible");
    } else {
      document.body.classList.remove("popup-visible");
    }
  }, [isPopupVisible]);

  return (
    <div>
      <PopupMenu isVisible={isPopupVisible} togglePopup={togglePopup} />
      <button className="question-mark-button" onClick={togglePopup}>
        ?
      </button>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="lessons">
        <Levels />
      </Element>
      <Element name="styles">
        <DanceStyles />
      </Element>
      <Element name="instructors">
        <Instructors />
      </Element>
      <Element name="rates">
        <Rates />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Element name="schedule">
        <Schedule />
      </Element>
    </div>
  );
};

export default Home;
