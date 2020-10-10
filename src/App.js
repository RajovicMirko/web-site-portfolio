import React from "react";
import NavBar from "./components/layout/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Technology from "./components/Technology";
import Portfolio from "./components/Portfolio";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Header />
        <AboutMe />
        <Technology />
        <Portfolio />
      </div>
    </BrowserRouter>
  );
}

export default App;
