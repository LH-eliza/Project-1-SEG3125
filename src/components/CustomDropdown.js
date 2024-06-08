import React, { useState } from "react";
import "../styles/schedule.css";

const CustomDropdown = ({
  options,
  selectedOptions,
  onChange,
  placeholder,
  allLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    if (option === allLabel) {
      onChange([allLabel]);
    } else {
      if (selectedOptions.includes(allLabel)) {
        onChange([option]);
      } else if (selectedOptions.includes(option)) {
        onChange(selectedOptions.filter((item) => item !== option));
      } else {
        onChange([...selectedOptions, option]);
      }
    }
  };

  const handleRemove = (option) => {
    onChange(selectedOptions.filter((item) => item !== option));
  };

  const displayText = selectedOptions.includes(allLabel)
    ? allLabel
    : selectedOptions.length > 0
    ? selectedOptions.join(", ")
    : placeholder;

  return (
    <div className="custom-dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {displayText}
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          <div
            className={`dropdown-item ${
              selectedOptions.includes(allLabel) ? "selected" : ""
            }`}
            onClick={() => handleSelect(allLabel)}
          >
            {allLabel}
          </div>
          {options.map((option, index) => (
            <div
              key={index}
              className={`dropdown-item ${
                selectedOptions.includes(option) ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
              {selectedOptions.includes(option) && (
                <span
                  className="remove-hover"
                  onClick={() => handleRemove(option)}
                >
                  Remove Item
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
