import React from "react";

import Page from "../global/page";
import Paragraf from './paragraf'

function index() {
  const data = [
    {
      title: 'History',
      text: [
        "I am a frontend developer with over two years of experience in BPM (Business Processes Management) development for Leasing companies.",
        "I worked on multiple projects based on water flow methodology, from initial specification planning, development, testing, deployment, and maintenance",
      ]
    },
    {
      title: "Objectiv",
      text: [
        "To obtain junior/medior Frontend Developer position in an environment that I can contribute my programming passion and continue to develop experience and professional growth."
      ]
    }
  ]

  const cards = data.map(paragraf => <Paragraf title={paragraf.title} paragraf={paragraf.text} />)

  return (
    <section id="about-me">
      <Page title="About Me" cards={cards} />
    </section>
  );
}

export default index;
