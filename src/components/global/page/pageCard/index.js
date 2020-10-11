import React from "react";

function index({ title, cards, addClass }) {
  return (
    <div className={`container ${addClass}`}>
      <div className="page-card card mt-6">
        <div className="card-header text-center bg-secondary text-light">
          <h4 className="m-0">{title}</h4>
        </div>
        <div className="card-body d-flex flex-wrap justify-content-around px-4 px-md-0">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default index;
