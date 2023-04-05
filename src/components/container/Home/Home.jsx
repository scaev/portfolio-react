import React from "react";
import portfolio from "../../../assets/portfolio.jpg";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container " id="home">
      <div className="profile">
        <img src={portfolio} alt="portfolio-img" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Kaan Karadag</span>
        </h3>
        <span className="job">Full-Stack Developer Based on Canada</span>
        <span className="text">
          Passionate
          <br /> to craft innovative <br /> web products.
        </span>
        <a href="contact">connect with me</a>
        <div className="web">Web Developer</div>
        <div className="ui">UI/UX Designer</div>
        <div className="mecengineer">Mechanical Engineer</div>
      </div>
    </div>
  );
};
