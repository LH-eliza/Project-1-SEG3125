import React from "react";
import "./thankyou.css";

const ThankYou = ({ goToStage }) => {
  return (
    <div className="wrapper">
      <div className="text-center">
        <h1>THANK YOU</h1>
        <p>Your Order Number is #0001</p>
        <div className="checkmark-container">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
        <p>
          We’ve sent an email for your payment confirmation and order summary!
        </p>
        <p>We can’t wait to dance with you!</p>
        <p
          onClick={() => goToStage(0)}
          style={{ cursor: "pointer", color: "blue" }}
        >
          Go back to Booking Page to schedule your next dance lesson!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
