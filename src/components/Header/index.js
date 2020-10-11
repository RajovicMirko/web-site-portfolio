import React from "react";

function index() {
  return (
    <section id="home" className="d-flex flex-column justify-content-center align-items-center">
      <div className="home-text-wrapper d-flex flex-column justify-content-center align-items-center text-white py-2 py-md-5">
        <span className="home-title text-center">Mirko Rajović</span>
        <h4>Frontend developer</h4>
        <div className="contact-list">
          <a
            href="https://www.linkedin.com/in/mirko-rajovic-170936158"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/RajovicMirko"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
          >
            <i className="fab fa-github-square"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default index;
