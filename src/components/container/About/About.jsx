import React from "react";
import "./About.scss";
import portfolio2 from "../../../assets/portfolio2.png";
import { bios } from "../../../Data";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';


const About = () => {
  return (
    <div className="container" id="about">
      <div className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </div>
      <div className="about_container">
        <div className="about_left">
          <img
            src={portfolio2}
            alt="about-img"
          />
        </div>
        <div className="about_right">
          <p>
            I'm a software and mechanical engineer with a passion for building
            and improving systems. With a strong foundation in both fields, I
            bring a unique perspective to problem-solving and have a track
            record of delivering innovative solutions.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="biokey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href="#"
            download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};
export default About;
