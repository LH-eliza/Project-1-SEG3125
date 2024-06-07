import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/levels.css";

const levels = [
  {
    image: "/images/beginner.png",
    title: "BEGINNER",
    duration: "30 MIN",
    price: "$49",
    description: "New to dance? Kickstart your journey with our intro program.",
  },
  {
    image: "/images/learner.png",
    title: "LEARNER",
    duration: "45 MIN",
    price: "$59",
    description:
      "Got the basics? Enhance your skills with new moves and routines.",
  },
  {
    image: "/images/intermediate.png",
    title: "INTERMEDIATE",
    duration: "1 HOUR",
    price: "$79",
    description:
      "Feeling confident? Tackle more challenging skills and pieces.",
  },
  {
    image: "/images/master.png",
    title: "MASTER",
    duration: "2 HOURS",
    price: "$119",
    description:
      "Already a pro? Train with top choreographers to master the craft.",
  },
];

const DanceClasses = () => {
  return (
    <div className="container1">
      <h1 className="title">
        OUR OTTAWA STUDIO LOCATION AND DANCE CLASSES - LEARNING LEVELS FOR ALL
      </h1>
      <p className="lead">
        Step-by-Step Learning For All Levels | Private, Semi-Private, and Open
        classes are Available for ALL AGES
      </p>
      <div className="row">
        {levels.map((level, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-img-container">
                <img
                  src={level.image}
                  className="card-img-top rounded-circle"
                  alt={level.title}
                />
                <div className="card-img-overlay">
                  <h5 className="card-title font-weight-bold">{level.title}</h5>
                  <p className="card-text">
                    {level.duration} - {level.price}
                  </p>
                </div>
              </div>
              <div className="card-body">
                <p className="card-body-text">{level.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="btn btn-primary mt-3">
        BOOK NOW
      </a>
      <p className="mt-3">Have more questions? Call us at (613) 555-0192</p>
      <p className="small text-muted">*Rates are based on skill level</p>
    </div>
  );
};

export default DanceClasses;
