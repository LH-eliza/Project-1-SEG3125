import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./rates.css";
import { FaQuestionCircle } from "react-icons/fa";

const Rates = () => {
  return (
    <div className="rates-wrapper">
      <div className="top-line"></div>
      <h2 className="font-weight-bold mb-2">GENERAL RATES</h2>
      <div className="underline"></div>
      <div className="table-responsive">
        <table className="table text-left borderless">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">
                PRIVATE{" "}
                <span className="tooltip-wrapper">
                  <FaQuestionCircle className="question-mark" />
                  <span className="tooltip-text">
                    Have a 1 on 1 with an instructor
                  </span>
                </span>
              </th>
              <th scope="col">
                SEMI-PRIVATE{" "}
                <span className="tooltip-wrapper">
                  <FaQuestionCircle className="question-mark" />
                  <span className="tooltip-text">
                    Have 2-5 people in your class with an instructor
                  </span>
                </span>
              </th>
              <th scope="col">
                OPEN{" "}
                <span className="tooltip-wrapper">
                  <FaQuestionCircle className="question-mark" />
                  <span className="tooltip-text">Anyone can join</span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="category main">BEGINNER</td>
              <td>$100 (30 Minutes)</td>
              <td>$80 (30 Minutes)</td>
              <td>$49 (30 Minutes)</td>
            </tr>
            <tr>
              <td className="category main">LEARNER</td>
              <td>$120 (45 Minutes)</td>
              <td>$100 (45 Minutes)</td>
              <td>$59 (45 Minutes)</td>
            </tr>
            <tr>
              <td className="category main">INTERMEDIATE</td>
              <td>$130 (1 Hour)</td>
              <td>$120 (1 Hour)</td>
              <td>$79 (1 Hour)</td>
            </tr>
            <tr>
              <td className="category main">MASTER</td>
              <td>$200 (2 Hours)</td>
              <td>$160 (2 Hours)</td>
              <td>$119 (2 Hours)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="book">
        <Link to="/booking">BOOK NOW →</Link>
      </div>
      <p className="text-left mt-4 note">
        *Rates are per dancer. Classes are for all ages, levels, and styles.
      </p>
    </div>
  );
};

export default Rates;
