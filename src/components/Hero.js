import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  const heroStyle = {
    backgroundImage: 'url("/images/image1.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-container">
        <div className="divider">
          <div className="hero-text">
            <h1>START YOUR DANCE GOALS</h1>
            <p>
              Join hundreds of us online or in-person for technical dance
              classes. No matter how advanced or beginner you are, we have a
              class for you.
            </p>
            <button>BOOK A CLASS</button>
          </div>
        </div>
        <div className="address">
          <div className="hero-contact">
            <span className="number">
              <p>(613) 555-0192</p>
            </span>
            <p>1674 Cedarwood Drive</p>
            <p>Ottawa, ON K1H 7V6 Canada</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
