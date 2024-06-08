import React, { useState } from "react";
import "../styles/instructors.css";

const Instructor = ({
  image,
  name,
  title,
  specialties,
  description,
  classes,
  ageRange,
  level, // New property
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="col-md-3 instructor-card">
      <div
        className="flip-container"
        onClick={handleFlip}
        aria-label="Click to flip the card"
      >
        <div className={`flipper ${flipped ? "flipped" : ""}`}>
          <div className="front">
            <img src={image} className="card-img-top" alt={name} />
          </div>
          <div className="back">
            <div className="card-info">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <strong>Classes:</strong> {classes}
              </p>
              <p className="card-text">
                <strong>Age Range:</strong> {ageRange}
              </p>
              <p className="card-text">
                <strong>Level:</strong> {level}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-uppercase">{title}</p>
        <p className="card-text">{specialties}</p>
        <p className="card-text">
          <strong>Level:</strong> {level}
        </p>
      </div>
    </div>
  );
};

export default Instructor;
