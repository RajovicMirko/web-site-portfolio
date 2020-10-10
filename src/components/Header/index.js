import React from "react";

function index() {
  return (
    <section id="home" className="d-flex flex-column justify-content-center align-items-center text-white">
      <h1 className="display-3 text-center">Mirko Rajović</h1>
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
    </section>
  );
}

export default index;
