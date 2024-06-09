import React from "react";
import Instructor from "./Instructor";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/instructors.css";

const instructors = [
  {
    image: "/images/Redy.png",
    name: "REDY",
    title: "Choreographer",
    specialties: "Urban Hip Hop, Street Dance",
    description:
      "Redy is a renowned choreographer with a unique style in Urban Hip Hop and Street Dance. He has won multiple awards...",
    classes: "Urban Hip Hop, Street Dance",
    ageRange: "12-18",
    level: "Learner, Intermediate",
  },
  {
    image: "/images/Sara.png",
    name: "SARA",
    title: "Instructor",
    specialties: "Locking, Street Dance",
    description:
      "Sara is a passionate instructor known for her expertise in Locking and Street Dance. She has been teaching for over 10 years...",
    classes: "Locking, Street Dance",
    ageRange: "10-16",
    level: "Beginner, Intermediate",
  },
  {
    image: "/images/Audrey.png",
    name: "AUDREY",
    title: "Instructor",
    specialties: "Jazz, Breaking, Tutting",
    description:
      "Audrey brings a blend of Jazz, Breaking, and Tutting to her classes, captivating her students with dynamic routines...",
    classes: "Jazz, Breaking, Tutting",
    ageRange: "15-20",
    level: "Beginner, Learner",
  },
  {
    image: "/images/Matthew.png",
    name: "MATTHEW",
    title: "Choreographer",
    specialties: "Tap, Jazz, House",
    description:
      "Matthew is a versatile choreographer skilled in Tap, Jazz, and House. He has choreographed for various stage performances...",
    classes: "Tap, Jazz, House",
    ageRange: "14-19",
    level: "Intermediate, Master",
  },
];

const Instructors = () => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1 className="font-weight-bold">INSTRUCTORS</h1>
        <p>View our Highlighted Instructors</p>
      </div>
      <div className="row">
        {instructors.map((instructor, index) => (
          <Instructor
            key={index}
            image={instructor.image}
            name={instructor.name}
            title={instructor.title}
            specialties={instructor.specialties}
            description={instructor.description}
            classes={instructor.classes}
            ageRange={instructor.ageRange}
            level={instructor.level}
          />
        ))}
      </div>
      <div className="see-all-profiles">
        <a href="#">SEE ALL PROFILES</a>
        <p>Click on the Artist images to learn more</p>
      </div>
    </div>
  );
};

export default Instructors;
