import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/container/Home/Home";
import About from "./components/container/About/About.jsx";
import Skills from "./components/container/Skills/Skills";
import Projects from "./components/container/Projects/Projects";
import Contact from "./components/container/Contact/Contact";
import Footer from "./components/container/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
