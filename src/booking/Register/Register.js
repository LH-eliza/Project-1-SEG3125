import React, { useState, useEffect } from "react";
import "./register.css";
import ProgressIndicator from "../../components/Progress/Progress";

const Register = ({
  prevStage,
  nextStage,
  updateFormData,
  formData,
  currentStage,
  goToStage,
}) => {
  const [type, setType] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [date, setDate] = useState("");
  const [dancers, setDancers] = useState("");
  const [time, setTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [email, setEmail] = useState("");
  const [dancerNames, setDancerNames] = useState([""]);
  const [timeError, setTimeError] = useState("");

  const levelDurations = {
    Beginner: 30,
    Learner: 45,
    Intermediate: 60,
    Master: 120,
  };

  const isValidNumber = (value) => {
    const number = parseInt(value, 10);
    return !isNaN(number) && number >= 0;
  };

  useEffect(() => {
    const generateTimeSlots = (duration, isWeekend) => {
      const startHour = isWeekend ? 14 : 16;
      const endHour = 22;
      const timeSlots = [];

      for (let hour = startHour; hour < endHour; hour++) {
        for (let minutes = 0; minutes < 60; minutes += duration + 15) {
          const timeSlot = `${String(hour).padStart(2, "0")}:${String(
            minutes
          ).padStart(2, "0")}`;
          timeSlots.push(timeSlot);
        }
      }

      return timeSlots;
    };

    const duration = levelDurations[formData.level] || 60;
    if (date) {
      const selectedDate = new Date(date);
      const dayOfWeek = selectedDate.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      setAvailableTimes(generateTimeSlots(duration, isWeekend));
    }
  }, [formData.level, date]);

  useEffect(() => {
    const dancerCount = parseInt(dancers, 10);
    if (dancerCount > 0) {
      const updatedDancerNames = new Array(dancerCount)
        .fill("")
        .map((_, i) => dancerNames[i] || "");
      setDancerNames(updatedDancerNames);
    } else {
      setDancerNames([""]);
    }
  }, [dancers]);

  const handleNext = () => {
    updateFormData({ type, ageGroup, date, dancers, time, email, dancerNames });
    nextStage();
  };

  const handleDancerNameChange = (index, value) => {
    const updatedNames = [...dancerNames];
    updatedNames[index] = value;
    setDancerNames(updatedNames);
  };

  const handleDancersChange = (value) => {
    if (isValidNumber(value)) {
      setDancers(value);
    }
  };

  const handleDateChange = (value) => {
    setDate(value);
    const selectedDate = new Date(value);
    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      setTimeError("");
    } else if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      setTimeError("");
    } else {
      setTimeError("Invalid date selection. Please select a valid date.");
    }
  };

  return (
    <div className="register-container mt-5">
      <h1 className="text-center">BOOKING</h1>
      <h2 className="text-center">COMPARE YOUR OPTIONS</h2>
      <ProgressIndicator currentStage={currentStage} goToStage={goToStage} />
      <div className="form-group text-center">
        <label className="form-label">Choose a type</label>
        <div className="btn-group">
          {["Private", "Semi-Private", "Open"].map((t) => (
            <button
              key={t}
              className={`btn btn-option ${type === t ? "selected" : ""}`}
              onClick={() => setType(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group text-center">
        <label className="form-label">Choose an Age Group</label>
        <div className="btn-group">
          {["4-8", "9-12", "13-15", "16-17", "18+"].map((group) => (
            <button
              key={group}
              className={`btn btn-option ${
                ageGroup === group ? "selected" : ""
              }`}
              onClick={() => setAgeGroup(group)}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group text-center">
        <label className="form-label">Chosen Groups</label>
        <div className="chosen-groups">
          <p>Level - {formData.level}</p>
          <p>Instructor - {formData.instructor}</p>
          <p>Style - {formData.styles.join(", ")}</p>
        </div>
      </div>

      <div className="form-group text-center">
        <label className="form-label">Choose a Date</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </div>

      {timeError && <p className="text-danger text-center">{timeError}</p>}

      <div className="form-group text-center">
        <label className="form-label">Choose a Time</label>
        <div className="btn-group">
          {availableTimes.map((timeSlot) => (
            <button
              key={timeSlot}
              className={`btn btn-option ${
                time === timeSlot ? "selected" : ""
              }`}
              onClick={() => setTime(timeSlot)}
            >
              {timeSlot}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group text-center">
        <label className="form-label">How many dancers?</label>
        <input
          type="number"
          className="form-control"
          value={dancers}
          onChange={(e) => handleDancersChange(e.target.value)}
          min="1"
        />
      </div>

      <div className="form-group text-center">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group text-center">
        <label className="form-label">Names of Dancers</label>
        {dancerNames.map((name, index) => (
          <div key={index} className="dancer-name-field">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => handleDancerNameChange(index, e.target.value)}
            />
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
          disabled={
            !type ||
            !ageGroup ||
            !date ||
            !dancers ||
            !time ||
            !email ||
            dancerNames.some((name) => name === "")
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Register;
