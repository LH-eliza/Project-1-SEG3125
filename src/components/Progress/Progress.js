import React from "react";
import "./progress.css";

const ProgressIndicator = ({ currentStage, goToStage }) => {
  const stages = ["Level", "Style", "Instructor", "Register"];

  return (
    <div className="stages-container d-flex justify-content-center mb-4">
      {stages.map((stage, index) => (
        <div
          key={index}
          className={`stage ${index <= currentStage ? "completed" : ""}`}
          onClick={() => goToStage(index)}
        >
          Stage {index + 1} - {stage}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
