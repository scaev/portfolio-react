import React, { useState } from "react";
import "./Skills.scss";
import { icons } from "../../../Data";
import { experiences } from "../../../Data";

const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="container" id="skills">
      <div className="title">
        <span>What I Expert</span>
        <h1>Skills And Experience</h1>
      </div>
      <div className="select">
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          Education & Experience
        </button>
      </div>
      <div className="skills">
        {active === 1 &&
          icons.map((icon, index) => {
            return (
              <div key={index} className="tools">
                {icon}
              </div>
            );
          })}
      </div>
      <div className="experiences">
        {active === 2 &&
          experiences.map((experience) => {
            return (
              <div className="experience" key={experience.id}>
                <span>{experience.year}</span>
                <div className="position">
                  <h3>{experience.position}</h3>
                  <p>{experience.company}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Skills;
