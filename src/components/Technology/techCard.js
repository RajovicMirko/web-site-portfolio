import React from "react";

function techCard({ cardData }) {
  return (
    <div className="tech-card page-card-hover card text-muted col-12 col-md-2 mx-1 m-4 p-0">
      <div className="card-header text-center">
        <i className={cardData.headerIcon}></i>
        <h6 className="card-title m-0">{cardData.title}</h6>
      </div>
      <div className="card-body p-0">
        <ul className="list-group list-group-flush text-center m-0">
          {cardData.list.map((item, i) => (
            <li key={i} className="list-group-item m-0 p-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default techCard;
