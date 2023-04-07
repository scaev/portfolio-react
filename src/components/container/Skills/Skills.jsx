import React, { useState } from "react";
import "./Skills.scss";
import { icons } from "../../../Data";
import { experiences } from "../../../Data";
import { finishes } from "../../../Data";
import { motion } from "framer-motion";

const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="container" id="skills">
      <motion.div
        className="title"
        initial={{ opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
      >
        <span>What I Expert</span>
        <h1>Skills And Experience</h1>
      </motion.div>
      <motion.div
        className="select"
        initial={{ opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
      >
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
      </motion.div>
      <div className="skills">
        {active === 1 &&
          icons.map((icon, index) => {
            return (
              <motion.div
                key={index}
                className="tools"
                initial={{ opacity: 0 }}
                whileInView={{ y: [100, 0], opacity: 1 }}
              >
                {icon}
              </motion.div>
            );
          })}
      </div>
      <div className="experiences">
        {active === 2 &&
          experiences.map((experience) => {
            return (
              <motion.div
                className="experience"
                key={experience.id}
                initial={{ opacity: 0 }}
                whileInView={{ y: [50, 0], opacity: 1 }}
              >
                <span>{experience.year}</span>
                <div className="position">
                  <h3>{experience.position}</h3>
                  <p>{experience.company}</p>
                </div>
              </motion.div>
            );
          })}
      </div>
      <motion.div
        className="finishes_container"
        initial={{ opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
      >
        {active === 2 &&
          finishes.map((finish) => {
            return (
              <div className="finishes" key={finish.id}>
                <div className="number">{finish.number}</div>
                <h4 className="item_name">{finish.itemName}</h4>
              </div>
            );
          })}
      </motion.div>
    </div>
  );
};

export default Skills;
