// PopupMenu.jsx
import React from "react";
import { Link } from "react-scroll";
import "./PopupMenu.css";

const PopupMenu = ({ isVisible, togglePopup }) => {
  return (
    <div className={`popup-menu ${isVisible ? "visible" : ""}`}>
      <p>Locate your needs:</p>
      <ul className="list-unstyled">
        <li>
          <Link to="lessons" smooth={true} duration={500} onClick={togglePopup}>
            Types of Lessons
          </Link>
        </li>
        <li>
          <Link to="styles" smooth={true} duration={500} onClick={togglePopup}>
            Dance Styles
          </Link>
        </li>
        <li>
          <Link to="rates" smooth={true} duration={500} onClick={togglePopup}>
            Class Rates
          </Link>
        </li>
        <li>
          <Link
            to="instructors"
            smooth={true}
            duration={500}
            onClick={togglePopup}
          >
            Instructors
          </Link>
        </li>
        <li>
          <Link
            to="location"
            smooth={true}
            duration={500}
            onClick={togglePopup}
          >
            Location
          </Link>
        </li>
        <li>
          <Link
            to="schedule"
            smooth={true}
            duration={500}
            onClick={togglePopup}
          >
            Open Classes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PopupMenu;
