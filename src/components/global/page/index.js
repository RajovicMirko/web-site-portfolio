import React from "react";

// import PageTitle from "./pageTitle";
import PageCard from "./pageCard";

function index({ id, title, cards }) {
  return (
    // <div className="m-0 p-0">
    // <PageTitle title={title} />
    <PageCard title={title} cards={cards} />
    // </div>
  );
}

export default index;
