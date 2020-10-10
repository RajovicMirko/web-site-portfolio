import React from "react";

import { HashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand mr-logo" href="#">
        MR
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse d-flex-md justify-content-md-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <HashLink className="nav-link" to="#">
              Home
            </HashLink>
          </li> */}
          <li className="nav-item" id="about-me-link">
            <HashLink className="nav-link" to="#about-me">
              About me
            </HashLink>
          </li>
          <li className="nav-item" id="technology-link">
            <HashLink className="nav-link" to="#technology">
              Technology
            </HashLink>
          </li>
          <li className="nav-item" id="portfolio-link">
            <HashLink className="nav-link" to="#portfolio">
              Portfolio
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
