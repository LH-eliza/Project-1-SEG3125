import React from "react";
import "../styles/location.css";

const Location = () => {
  return (
    <div className="location-wrapper">
      <div className="location-container">
        <div className="location-info">
          <h1>LOCATION</h1>
          <span>
            <p>Where and when to find us?</p>
          </span>
          <p>1674 Cedarwood Drive</p>
          <p>Ottawa, ON K1H 7V6 Canada</p>
        </div>
        <div className="map-and-hours">
          <div className="map">
            <iframe
              title="Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.665632370904!2d-75.69812028450122!3d45.40245507910086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f9e3b08b3b1%3A0x728e25c7b8b50f48!2s1674%20Cedarwood%20Dr%2C%20Ottawa%2C%20ON%20K1H%207V6%2C%20Canada!5e0!3m2!1sen!2sus!4v1620456027767!5m2!1sen!2sus"
              width="450"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="hours-container">
            <div className="separator"></div>
            <div className="hours">
              <h2>Hours of Operation</h2>
              <ul>
                <li>
                  <span className="days">Sunday</span>
                  <span className="time">2 - 10 p.m.</span>
                </li>
                <li>
                  <span className="days">Monday</span>
                  <span className="time">4 - 10 p.m.</span>
                </li>
                <li>
                  <span className="days">Tuesday</span>
                  <span className="time">4 - 10 p.m.</span>
                </li>
                <li>
                  <span className="days">Wednesday</span>
                  <span className="time">4 - 10 p.m.</span>
                </li>
                <li>
                  <span className="days">Thursday</span>
                  <span className="time">4 - 10 p.m.</span>
                </li>
                <li>
                  <span className="days">Friday</span>
                  <span className="time">4 - 10 p.m.</span>
                </li>
                <li>
                  <span className="days">Saturday</span>
                  <span className="time">2 - 10 p.m.</span>
                </li>
              </ul>
              <p>
                <span className="closed">CLOSED</span> on Christmas, New Year's
                Day, Thanksgiving, and Labour Day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
