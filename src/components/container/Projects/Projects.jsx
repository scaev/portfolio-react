import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { workNavs } from "../../../Data";
import { workImages } from "../../../Data";
import { FiGithub, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import Light from "../Lights/Light";

const Projects = () => {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages);
    } else {
      const newWork = workImages.filter((workImage) => {
        return workImage.category.toLowerCase() === tab.name;
      });
      setWorks(newWork);
    }
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <Light />
      <div className="container" id="projects">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [65, 0], opacity: 1 }}
          className="title"
        >
          <span>My Work</span>
          <h1>Projects</h1>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, y: -50 }}
          className="buttons"
        >
          {workNavs.map((workNav, index) => {
            return (
              <button
                onClick={(e) => activeTab(e, index)}
                className={`${active === index ? "active" : ""}`}
                key={index}
              >
                {workNav}
              </button>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, x: -50 }}
          className="workImages"
        >
          {works.map((work) => {
            return (
              <motion.div
                className="workImage"
                key={work.id}
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ y: [150, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.07 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <img src={work.img} alt="workImg" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: [0.3, 0.8] }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="hoverLayer"
                >
                  <motion.a
                    href={work.github}
                    target="_blank"
                    rel="noreferrer"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiGithub />
                  </motion.a>

                  <motion.a
                    href={work.deployed}
                    target="_blank"
                    rel="noreferrer"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiEye />
                  </motion.a>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
