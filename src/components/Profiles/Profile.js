import React from "react";
import Instructor from "../Instructor/Instructor";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/instructors.css";

const instructors = [
  {
    name: "CERA",
    image: `${process.env.PUBLIC_URL}/images/cera.png`,
    title: "Instructor",
    specialties: "Hip Hop, Choreography, Jazz",
    description:
      "Cera is a talented instructor with a passion for Hip Hop, Choreography, and Jazz. She has performed in numerous dance festivals.",
    classes: ["Hip Hop", "Choreography", "Jazz"],
    ageRange: "All Ages",
    level: "Beginner, Learner, Intermediate",
  },
  {
    name: "ARDEN",
    image: `${process.env.PUBLIC_URL}/images/arden.png`,
    title: "Instructor",
    specialties: "Waacking, Hip Hop, Choreography",
    description:
      "Arden is a versatile instructor skilled in Hip Hop and Choreography. He has choreographed for various music videos.",
    classes: ["Waacking", "Hip Hop", "Choreography"],
    ageRange: "All Ages",
    level: "Beginner, Learner",
  },
  {
    name: "MARIA",
    image: `${process.env.PUBLIC_URL}/images/maria.png`,
    title: "Instructor",
    specialties: "Waacking, Jazz",
    description:
      "Maria is a talented instructor with a passion for Waacking and Jazz. She has performed in numerous dance festivals.",
    classes: ["Waacking", "Jazz"],
    ageRange: "All Ages",
    level: "Intermediate, Master",
  },
  {
    name: "ALEX",
    image: `${process.env.PUBLIC_URL}/images/alex.png`,
    title: "Choreographer",
    specialties: "Tutting, Break Dance",
    description:
      "Alex is a versatile choreographer skilled in Tutting and Break Dance. He has choreographed for various stage performances.",
    classes: ["Tutting", "Break Dance"],
    ageRange: "All Ages",
    level: "Beginner, Intermediate",
  },
  {
    name: "REDY",
    image: `${process.env.PUBLIC_URL}/images/Redy.png`,
    title: "Choreographer",
    specialties: "Hip Hop, Break Dance",
    description:
      "Redy is a renowned choreographer with a unique style in Urban Hip Hop and Street Dance. He has won multiple awards.",
    classes: ["Hip Hop", "Break Dance"],
    ageRange: "12-18",
    level: "Beginner, Learner, Intermediate",
  },
  {
    name: "SARA",
    image: `${process.env.PUBLIC_URL}/images/Sara.png`,
    title: "Instructor",
    specialties: "Jazz, Street Dance",
    description:
      "Sara is a passionate instructor known for her expertise in Locking and Street Dance. She has been teaching for over 10 years.",
    classes: ["Jazz", "Street Dance"],
    ageRange: "All Ages",
    level: "Beginner, Intermediate",
  },
  {
    name: "AUDREY",
    image: `${process.env.PUBLIC_URL}/images/Audrey.png`,
    title: "Instructor",
    specialties: "Jazz, Breaking, Tutting",
    description:
      "Audrey brings a blend of Jazz, Breaking, and Tutting to her classes, captivating her students with dynamic routines.",
    classes: ["Jazz", "Breaking", "Tutting"],
    ageRange: "All Ages",
    level: "Beginner, Learner, Intermediate",
  },
  {
    name: "MATTHEW",
    image: `${process.env.PUBLIC_URL}/images/matthew.png`,
    title: "Choreographer",
    specialties: "Tap, Jazz, House",
    description:
      "Matthew is a versatile choreographer skilled in Tap, Jazz, and House. He has choreographed for various stage performances.",
    classes: ["Break Dance", "Jazz", "Choreography"],
    ageRange: "All Ages",
    level: "Intermediate, Master",
  },
];

const Instructors = () => {
  return (
    <div className="profiler">
      <div className="container">
        <div className="text-center mt-5">
          <h1 className="font-weight-bold">INSTRUCTORS</h1>
          <p>View all our Instructors</p>
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
      </div>
    </div>
  );
};

export default Instructors;
