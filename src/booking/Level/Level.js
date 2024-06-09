import React, { useState } from "react";
import ProgressIndicator from "../../components/Progress/Progress";
import "./Level.css";

const Level = ({ nextStage, updateFormData, currentStage, goToStage }) => {
  const [level, setLevel] = useState("");

  const handleNext = () => {
    updateFormData({ level });
    nextStage();
  };

  const handleLevelClick = (levelName) => {
    setLevel(level === levelName ? "" : levelName);
  };

  return (
    <div className="level-container mt-5">
      <h1 className="text-center">BOOKING</h1>
      <h2 className="text-center">COMPARE YOUR OPTIONS</h2>
      <p className="text-center">What is your current dance level?</p>
      <ProgressIndicator currentStage={currentStage} goToStage={goToStage} />
      <div className="levels">
        {[
          { name: "Beginner", description: "I can dance a little bit" },
          {
            name: "Learner",
            description: "I know how to dance but want to improve my skills",
          },
          {
            name: "Intermediate",
            description:
              "I've been dancing for a while and comfortable with routines",
          },
          {
            name: "Master",
            description: "Dance is my career, I'm a trained dancer",
          },
        ].map(({ name, description }) => (
          <div
            key={name}
            className={`level ${level === name ? "selected" : ""}`}
            onClick={() => handleLevelClick(name)}
          >
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!level}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Level;
