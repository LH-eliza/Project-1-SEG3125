import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-call-to-action">
          <div className="cta-text">
            <p>Ready to get started?</p>
            <button className="cta-button">
              <span>BOOK NOW</span>
            </button>
          </div>
          <h1 className="footer-logo">
            <span className="move">MOVE</span>{" "}
            <span className="studio">STUDIO</span>
          </h1>
          <div className="footer-terms">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy</a>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-section">
            <p>Classes</p>
            <div className="content">
              <span>
                <a href="#">Instructors</a>
              </span>
              <span>
                <a href="#">Schedule</a>
              </span>
              <span>
                <a href="#">Buy Classes</a>
              </span>
              <span>
                <a href="#">Types of Classes</a>
              </span>
            </div>
          </div>
          <div className="link-section">
            <p>About</p>
            <div className="content">
              <span>
                <a href="#">About Us</a>
              </span>
              <span>
                <a href="#">FAQ</a>
              </span>
              <span>
                <a href="#">Contact Us</a>
              </span>
            </div>
          </div>
          <div className="link-section">
            <p>Contact info</p>
            <div className="content">
              <div className="information">
                <span>(613) 555-0192</span>
                <span>1674 Cedarwood Drive</span>
                <span>Ottawa, ON K1H 7V6</span>
                <span>Canada</span>
              </div>
            </div>
            <span className="email">
              <a href="mailto:info@movestudio.com">info@movestudio.com</a>
            </span>
            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
