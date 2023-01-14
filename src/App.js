import React from "react";
import Break from "./components/Break";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import WhereIveWorked from "./components/WhereIveWorked";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Break />
      <AboutMe />
      <Break />
      <WhereIveWorked />
      <Break />
      <Projects />
      <Break />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
