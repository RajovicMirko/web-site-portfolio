import React from "react";

import Page from "../global/page";
import TechnologyCard from "./techCard";

function index() {
  const cards = [
    {
      id: "1",
      headerIcon: "fas fa-window-maximize",
      title: "FRONTEND",
      list: [
        "HTML5",
        "CSS3|SASS",
        "Bootstrap",
        "Semantic UI",
        "JavaScript",
        "jQuery",
        "React|Redux|Thunk",
        "Vue/Vuex",
        "Quasar",
      ],
    },
    {
      id: "2",
      headerIcon: "fas fa-server",
      title: "SERVER",
      list: ["NodeJS", "Express"],
    },
    {
      id: "3",
      headerIcon: "fas fa-database",
      title: "DATABASE",
      list: ["MySQL", "MSSQL", "MongoDB", "Firestore"],
    },
    {
      id: "4",
      headerIcon: "fas fa-feather-alt",
      title: "OTHER",
      list: ["NPM", "GitHub", "Webpack", "Babel", "Heroku", "Firebase"],
    },
  ];

  const TechnologyList =
    cards &&
    cards.map((card) => <TechnologyCard key={card.id} cardData={card} />);

  return (
    <section id="technology">
      <Page title="Technology" cards={TechnologyList} />
    </section>
  );
}

export default index;
