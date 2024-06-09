import React, { useEffect, useState } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${
        visible ? "" : "navbar-hidden"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="move">MOVE</span>{" "}
          <span className="italic-text">STUDIO</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link artist-link" href="/profiles">
                ARTISTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link artist-link" href="/">
                SCHEDULE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link artist-link" href="/booking">
                BOOK NOW
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link artist-link dropdown-toggle"
                href="#"
                id="accountDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ACCOUNT
              </a>
              <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Log out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
