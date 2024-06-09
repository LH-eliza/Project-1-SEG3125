import React, { useState } from "react";
import "./dancestyles.css";

const DanceStyles = () => {
  const danceStyles = [
    {
      name: "BREAK DANCE",
      image: "breakdance.png",
      description:
        "A style of street dance that originated among African American and Puerto Rican youths in the South Bronx of New York City.",
    },
    {
      name: "WAACKING",
      image: "waacking.png",
      description:
        "A form of dance created in the LGBT clubs of Los Angeles during the 1970s disco era.",
    },
    {
      name: "CHOREOGRAPHY",
      image: "choreography.png",
      description:
        "The art or practice of designing sequences of movements of physical bodies in which motion, form, or both are specified.",
    },
    {
      name: "TUTTING",
      image: "tutting.png",
      description:
        "A type of dance that involves intricate movements of the fingers and hands.",
    },
    {
      name: "JAZZ",
      image: "jazz.png",
      description:
        "A dance form or dance style that is matched to the rhythms and techniques of jazz music.",
    },
    {
      name: "HIP-HOP",
      image: "hiphop.png",
      description:
        "A culture and art movement that began in the Bronx in New York City during the late 1970s.",
    },
  ];

  const [selectedDance, setSelectedDance] = useState(null);

  const handleClick = (index) => {
    setSelectedDance(selectedDance === index ? null : index);
  };

  return (
    <div className="dance-styles-container text-center">
      <div className="dance-container">
        <h1 className="dance-styles-title display-4">
          LEARN A VARIETY DANCE STYLES
        </h1>
        <p className="dance-styles-subtitle lead">Available for ALL LEVELS</p>
        <div className="row">
          {danceStyles.map((style, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div
                className="dance-card card"
                onClick={() => handleClick(index)}
              >
                <img
                  src={`images/${style.image}`}
                  className="dance-card-img card-img-top"
                  alt={style.name}
                />
                {selectedDance === index && (
                  <div className="dance-card-description card-description">
                    <h5 className="dance-card-title card-title">
                      {style.name}
                    </h5>
                    <p className="dance-card-text">{style.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DanceStyles;
