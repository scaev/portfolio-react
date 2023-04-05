import React from "react";
import "./About.scss";
import portfolio2 from "../../../assets/portfolio2.png";
import { bios } from "../../../Data";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </div>
      <div className="about_container">
        <div className="about_left"></div>
        <img src={portfolio2} alt="about-img" />
        <div className="about_right">
          <p>
            I'm a software and mechanical engineer with a passion for building
            and improving systems. With a strong foundation in both fields, I
            bring a unique perspective to problem-solving and have a track
            record of delivering innovative solutions.
          </p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className="biokey">{bio.icon}{bio.key}</span>
                <span className="bioValue">{bioValue}</span>
              </div>
            )
          })}
          <a href="#" download="">Download Resume ⇩</a>
        </div>
      </div>
    </div>
  );
};
export default About;
