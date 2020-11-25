import React from "react";

import Page from "../global/page";
import PortfolioCard from "./portfolioCard";

import salesControlPNG from "../../assets/portfolio/sales-control.png";
import chatPNG from "../../assets/portfolio/chat.png";
import npmPNG from "../../assets/portfolio/npmlogo.png";
import earthPng from "../../assets/portfolio/earth.png";

function index() {
  const cards = [
    {
      id: "1",
      img: salesControlPNG,
      title: "Sales control",
      actions: [
        {
          id: "1",
          value: "Git project",
          link: "https://github.com/RajovicMirko/SalesControl",
        },
        {
          id: "2",
          value: "Live",
          link: "https://salescontrolapp.herokuapp.com/#/login",
        },
      ],
    },
    {
      id: "2",
      img: chatPNG,
      title: "Chat master",
      actions: [
        {
          id: "1",
          value: "Git project",
          link: "https://github.com/RajovicMirko/chatmaster",
        },
        {
          id: "2",
          value: "Live",
          link: "https://chat-master-test.herokuapp.com/chat/",
        },
      ],
    },
    {
      id: "3",
      img: npmPNG,
      title: "NPM vue-form-terminator",
      actions: [
        {
          id: "1",
          value: "Git project",
          link: "https://github.com/RajovicMirko/vue-form-terminator",
        },
        {
          id: "2",
          value: "NPM",
          link: "https://www.npmjs.com/package/vue-form-terminator",
        },
      ],
    },
    {
      id: "4",
      img: npmPNG,
      title: "NPM vue-form-terminator Live",
      actions: [
        {
          id: "1",
          value: "Git project",
          link: "https://github.com/RajovicMirko/vue-form-terminator-live",
        },
        {
          id: "2",
          value: "Live",
          link: "https://vue-form-terminator-live.herokuapp.com/",
        },
      ],
    },
    {
      id: "5",
      img: earthPng,
      title: "Countries App",
      actions: [
        {
          id: "1",
          value: "Git project",
          link: "https://github.com/RajovicMirko/countries",
        },
        {
          id: "2",
          value: "Live",
          link: "https://rajovicmirko.github.io/countries/",
        },
      ],
    },
  ];

  const portfolioList =
    cards &&
    cards.map((card) => <PortfolioCard key={card.id} cardData={card} />);

  return (
    <section id="portfolio" data-hash="portfolio">
      <Page title="Portfolio" cards={portfolioList} addClass="mb-5" />
    </section>
  );
}

export default index;
