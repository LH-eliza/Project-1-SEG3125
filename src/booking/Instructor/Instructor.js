import React, { useState } from "react";
import "./instructor.css";
import Progress from "../../components/Progress/Progress";

const instructors = [
  {
    name: "Cera",
    genres: ["HipHop", "Choreography", "Jazz"],
    difficulty: ["Beginner", "Learner", "Intermediate"],
    upcomingClass: {
      date: "Trained - 19 years",
      time: "Awards - 92 Awards",
      genre: "Teaching Experience - 11 years",
    },
    image: `${process.env.PUBLIC_URL}/images/cera.png`,
  },
  {
    name: "Arden",
    genres: ["Waacking", "HipHop", "Choreography"],
    difficulty: ["Beginner", "Learner"],
    upcomingClass: {
      date: "Trained - 17 years",
      time: "Awards - 12 Awards",
      genre: "Teaching Experience - 5 years",
    },
    image: `${process.env.PUBLIC_URL}/images/arden.png`,
  },
  {
    name: "Maria",
    genres: ["Waacking", "Jazz"],
    difficulty: ["Intermediate", "Master"],
    upcomingClass: {
      date: "Trained - 22 years",
      time: "Awards - 32 Awards",
      genre: "Teaching Experience - 3 years",
    },
    image: `${process.env.PUBLIC_URL}/images/maria.png`,
  },
  {
    name: "Alex",
    genres: ["Tutting", "BreakDance"],
    difficulty: ["Beginner", "Intermediate"],
    upcomingClass: {
      date: "Trained - 11 years",
      time: "Awards - 9 Awards",
      genre: "Teaching Experience - 2 years",
    },
    image: `${process.env.PUBLIC_URL}/images/alex.png`,
  },
  {
    name: "Redy",
    genres: ["HipHop", "BreakDance"],
    difficulty: ["Beginner", "Learner", "Intermediate"],
    upcomingClass: {
      date: "Trained - 14 years",
      time: "Awards - 22 Awards",
      genre: "Teaching Experience - 1 year",
    },
    image: `${process.env.PUBLIC_URL}/images/Redy.png`,
  },
  {
    name: "Sara",
    genres: ["Jazz", "BreakDance"],
    difficulty: ["Beginner", "Learner", "Intermediate"],
    upcomingClass: {
      date: "Trained - 14 years",
      time: "Awards - 12 Awards",
      genre: "Teaching Experience - 5 years",
    },
    image: `${process.env.PUBLIC_URL}/images/Sara.png`,
  },
  {
    name: "Audrey",
    genres: ["Jazz", "Breaking", "Tutting"],
    difficulty: ["Beginner", "Learner", "Intermediate"],
    upcomingClass: {
      date: "Trained - 21 years",
      time: "Awards - 2 Awards",
      genre: "Teaching Experience - 9 years",
    },
    image: `${process.env.PUBLIC_URL}/images/Audrey.png`,
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
    <div className="profile mt-5">
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
                  src={instructor.image}
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
                    <strong>{instructor.name}'s Expertise:</strong>
                    <br />
                    {instructor.upcomingClass.time}
                    <br />
                    {instructor.upcomingClass.date}
                    <br />
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
    </div>
  );
};

export default InstructorStage;
