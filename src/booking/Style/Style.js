import React, { useState } from "react";
import ProgressIndicator from "../../components/Progress/Progress";
import "./style.css";

const StyleStage = ({
  nextStage,
  prevStage,
  updateFormData,
  currentStage,
  goToStage,
}) => {
  const [selectedStyle, setSelectedStyle] = useState("");

  const handleNext = () => {
    updateFormData({ styles: [selectedStyle] });
    nextStage();
  };

  const handleStyleClick = (styleName) => {
    setSelectedStyle(selectedStyle === styleName ? "" : styleName);
  };

  return (
    <div className="level-container mt-5">
      <h1 className="text-center">BOOKING</h1>
      <h2 className="text-center">COMPARE YOUR OPTIONS</h2>
      <p className="text-center">
        What style are you interested in learning right now?
      </p>
      <ProgressIndicator currentStage={currentStage} goToStage={goToStage} />
      <div className="styles d-flex justify-content-center flex-wrap">
        {[
          "BreakDance",
          "Waacking",
          "Choreography",
          "Tutting",
          "Jazz",
          "HipHop",
        ].map((styleName, index) => (
          <div
            key={index}
            className={`style ${selectedStyle === styleName ? "selected" : ""}`}
            onClick={() => handleStyleClick(styleName)}
          >
            <div
              className="style-image"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL
                }/images/${styleName.toLowerCase().replace(/ /g, "-")}.png)`,
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="btn-pop text-center mt-4">
        <button className="btn btn-secondary mr-2" onClick={prevStage}>
          Back
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!selectedStyle}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StyleStage;
