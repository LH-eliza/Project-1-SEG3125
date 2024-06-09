import React, { useState } from "react";
import "./instructor.css";
import Progress from "../../components/Progress/Progress";

const instructors = [
  {
    name: "Cera",
    genres: ["HipHop", "Choreography", "Jazz"],
    difficulty: ["Beginner", "Learners"],
    upcomingClass: {
      date: "August 2, 2024",
      time: "5:30 - 6:50PM (EST)",
      level: "Master",
      genre: "Hip Hop",
    },
    image: "../images/cera.png",
  },
  {
    name: "Arden",
    genres: ["HipHop", "Choreography"],
    difficulty: ["Learners", "Beginner"],
    upcomingClass: {
      date: "May 8, 2024",
      time: "5:30 - 6:50PM (EST)",
      level: "Learners",
      genre: "HipHop",
    },
    image: "../images/arden.png",
  },

  {
    name: "Maria",
    genres: ["Waacking", "Jazz"],
    difficulty: ["Intermediate", "Master"],
    upcomingClass: {
      date: "July 14, 2024",
      time: "6:00 - 7:30PM (EST)",
      level: "Intermediate",
      genre: "Waacking",
    },
    image: "../images/maria.jpg",
  },
  {
    name: "Alex",
    genres: ["Tutting", "BreakDance"],
    difficulty: ["Beginner", "Intermediate"],
    upcomingClass: {
      date: "June 20, 2024",
      time: "4:00 - 5:30PM (EST)",
      level: "Beginner",
      genre: "Tutting",
    },
    image: "../images/alex.jpg",
  },

  {
    image: "../images/Redy.png",
    name: "Redy",
    genres: ["HipHop", "BreakDance"],
    difficulty: ["Learner", "Intermediate"],
    upcomingClass: {
      date: "TBD",
      time: "TBD",
      level: "Learner",
      genre: "Urban Hip Hop",
    },
  },
  {
    image: "../images/Sara.png",
    name: "Sara",
    genres: ["Jazz", "BreakDance"],
    difficulty: ["Beginner", "Intermediate"],
    upcomingClass: {
      date: "TBD",
      time: "TBD",
      level: "Beginner",
      genre: "Jazz",
    },
  },
  {
    image: "../images/Audrey.png",
    name: "Audrey",
    genres: ["Jazz", "Breaking", "Tutting"],
    difficulty: ["Beginner", "Learner"],
    upcomingClass: {
      date: "TBD",
      time: "TBD",
      level: "Beginner",
      genre: "Jazz",
    },
  },
];

const InstructorStage = ({
  nextStage,
  prevStage,
  updateFormData,
  selectedStyles,
  selectedLevel,
  currentStage,
  goToStage,
}) => {
  const [selectedInstructor, setSelectedInstructor] = useState("");

  const handleNext = () => {
    updateFormData({ instructor: selectedInstructor });
    nextStage();
  };

  const handleInstructorClick = (instructorName) => {
    setSelectedInstructor(
      selectedInstructor === instructorName ? "" : instructorName
    );
  };

  const filteredInstructors = instructors.filter(
    (instructor) =>
      instructor.genres.some((genre) => selectedStyles.includes(genre)) &&
      instructor.difficulty.includes(selectedLevel)
  );

  return (
    <div className="in-container mt-5">
      <h1 className="text-center">BOOKING</h1>
      <h2 className="text-center">COMPARE YOUR OPTIONS</h2>
      <p className="text-center">Select an instructor for your class</p>
      <Progress currentStage={currentStage} goToStage={goToStage} />
      <div className="in d-flex justify-content-center flex-wrap">
        {filteredInstructors.length > 0 ? (
          filteredInstructors.map((instructor, index) => (
            <div
              key={index}
              className={`in-card ${
                selectedInstructor === instructor.name ? "selected" : ""
              }`}
              onClick={() => handleInstructorClick(instructor.name)}
            >
              <img
                src={`images/${instructor.image}`}
                alt={instructor.name}
                className="in-image"
              />
              <div className="in-details">
                <h4>{instructor.name}</h4>
                <p>
                  <strong>Dance Genre:</strong>
                  <ul>
                    {instructor.genres.map((genre, i) => (
                      <li key={i}>{genre}</li>
                    ))}
                  </ul>
                </p>
                <p>
                  <strong>Difficulty:</strong>
                  <ul>
                    {instructor.difficulty.map((level, i) => (
                      <li key={i}>{level}</li>
                    ))}
                  </ul>
                </p>
                <p>
                  <strong>{instructor.name}'s Upcoming Open Classes:</strong>
                  <br />
                  {instructor.upcomingClass.time}
                  <br />
                  {instructor.upcomingClass.date}
                  <br />
                  <strong>{instructor.upcomingClass.level}</strong> -{" "}
                  {instructor.upcomingClass.genre}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No instructors available for the selected criteria.</p>
        )}
      </div>
      <div className="btn-pop text-center mt-4">
        <button className="btn btn-secondary mr-2" onClick={prevStage}>
          Back
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!selectedInstructor}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InstructorStage;
