import React from "react";
import "./About.scss";
import portfolio2 from "../../../assets/portfolio2.png";
import { bios } from "../../../Data";
import { motion } from "framer-motion";
import Resume from "../../../assets/Resume.pdf";
import Light from "../Lights/Light";

const About = () => {
  return (
    <>
      <Light />
      <div className="container" id="about">
        <motion.div
          className="title"
          initial={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: 1 }}
        >
          <span>Who Am I?</span>
          <h1>About Me</h1>
        </motion.div>
        <div className="about_container">
          <motion.div
            className="about_left"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={portfolio2} alt="about-img" />
            <motion.div
              className="text"
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Simplicity is the ultimate sophistication.
              <br />
              <span style={{ opacity: 0.4 }}>Leonardo da Vinci</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="about_right"
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [250, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
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
              href={Resume}
              target="_blank"
              rel="noreferrer"
              download=""
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default About;
