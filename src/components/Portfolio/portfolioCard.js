import React from "react";

function techCard({ cardData }) {
  return (
    <div className="portfolio-card page-card-hover card col-12 col-sm-5 col-md-3 mx-1 m-2 m-md-3 p-0">
      <img src={cardData.img} className="card-img-top" alt={cardData.title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-center">{cardData.title}</h5>

        <div className="d-flex justify-content-around align-items-end">
          {cardData.actions &&
            cardData.actions.map((action) => (
              <a
                className="card-link"
                key={action.id}
                href={action.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {action.value}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default techCard;
