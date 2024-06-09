import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomDropdown from "./CustomDropdown";
import "./schedule.css";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedInstructors, setSelectedInstructors] = useState([
    "All Instructors",
  ]);
  const [selectedStyles, setSelectedStyles] = useState(["All Styles"]);
  const [selectedLevels, setSelectedLevels] = useState(["All Levels"]);
  const [selectedAges, setSelectedAges] = useState(["All Ages"]);
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookNow = (session) => {
    navigate("/checkout", { state: { session } });
  };

  const renderDayHeaders = () => {
    const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return dayHeaders.map((day, index) => (
      <div key={index} className="day-header">
        {day}
      </div>
    ));
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();
    const startDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    ).getDay();
    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className={`day ${i === selectedDate.getDate() ? "selected" : ""}`}
          onClick={() =>
            handleDateChange(
              new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)
            )
          }
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const renderSchedule = () => {
    const schedules = [
      {
        date: new Date(2024, 5, 8),
        sessions: [
          {
            time: "5:30 - 6:50PM",
            instructor: "Arden Cho",
            level: "Learner",
            style: "Hip Hop",
            age: "12-15",
            price: 59,
          },
          {
            time: "7:00 - 8:20PM",
            instructor: "Lisa Lee",
            level: "Master",
            style: "Hip Hop",
            age: "16-18",
            price: 119,
          },
          {
            time: "8:00 - 9:50PM",
            instructor: "Cherry Seo",
            level: "Intermediate",
            style: "Hip Hop",
            age: "18+",
            price: 79,
          },
        ],
      },
    ];

    const todaySchedule = schedules.find(
      (s) => s.date.toDateString() === selectedDate.toDateString()
    );

    return todaySchedule ? (
      todaySchedule.sessions
        .filter(
          (session) =>
            (selectedInstructors.includes("All Instructors") ||
              selectedInstructors.includes(session.instructor)) &&
            (selectedStyles.includes("All Styles") ||
              selectedStyles.includes(session.style)) &&
            (selectedLevels.includes("All Levels") ||
              selectedLevels.includes(session.level)) &&
            (selectedAges.includes("All Ages") ||
              selectedAges.includes(session.age))
        )
        .map((session, index) => (
          <div key={index} className="session">
            <div className="details">
              <div className="time">{session.time}</div>
              <div className="instructor">
                Instructor - {session.instructor}
              </div>
              <div className="open-level">
                {session.level} - {session.style} (${session.price})
              </div>
              <div className="age">Age Group - {session.age}</div>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleBookNow(session)}
            >
              BOOK NOW
            </button>
          </div>
        ))
    ) : (
      <div>No sessions available</div>
    );
  };

  return (
    <div
      className="schedule-container"
      style={{
        backgroundImage: "url('/images/frame.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="schedule-container">
        <div className="header">
          <h2>OPEN CLASS SCHEDULE</h2>
          <p>
            Considering just dropping by for an OPEN class, see what suits your
            needs!
          </p>
          <div className="filters">
            <CustomDropdown
              options={["Arden Cho", "Lisa Lee", "Cherry Seo"]}
              selectedOptions={selectedInstructors}
              onChange={setSelectedInstructors}
              placeholder="Select Instructors"
              allLabel="All Instructors"
            />
            <CustomDropdown
              options={["Hip Hop"]}
              selectedOptions={selectedStyles}
              onChange={setSelectedStyles}
              placeholder="Select Styles"
              allLabel="All Styles"
            />
            <CustomDropdown
              options={["Learner", "Intermediate", "Master"]}
              selectedOptions={selectedLevels}
              onChange={setSelectedLevels}
              placeholder="Select Levels"
              allLabel="All Levels"
            />
            <CustomDropdown
              options={["12-15", "16-18", "18+"]}
              selectedOptions={selectedAges}
              onChange={setSelectedAges}
              placeholder="Select Ages"
              allLabel="All Ages"
            />
          </div>
        </div>
        <div className="calendar-container">
          <button
            className="btn btn-light"
            onClick={() =>
              handleDateChange(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() - 1,
                  1
                )
              )
            }
          >
            ←
          </button>
          <div className="month-year">
            {selectedDate.toLocaleString("default", { month: "long" })}{" "}
            {selectedDate.getFullYear()}
          </div>
          <button
            className="btn btn-light"
            onClick={() =>
              handleDateChange(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() + 1,
                  1
                )
              )
            }
          >
            →
          </button>
        </div>
        <div className="calendar">
          {renderDayHeaders()}
          {renderCalendar()}
        </div>
        <div className="schedule">
          <div className="date">
            {selectedDate.getDate()} -{" "}
            {selectedDate.toLocaleDateString("default", { weekday: "long" })}
          </div>
          {renderSchedule()}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
