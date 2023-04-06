import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/container/Home/Home";
import About from "./components/container/About/About.jsx";
import Skills from "./components/container/Skills/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default App;
