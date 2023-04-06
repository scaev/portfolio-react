import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { workNavs } from "../../../Data";
import { workImages } from "../../../Data";
import { FiGithub, FiEye } from "react-icons/fi";

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
    <div className="container" id="projects">
      <div className="title">
        <span>My Work</span>
        <h1>Projects</h1>
      </div>
      <div className="buttons">
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
      </div>
      <div className="workImages">
        {workImages.map((workImage) => {
          return (
            <div className="workImage">
              <img src={workImage.img} alt="work-image" />;
              <div className="hoverLayer">
                <a href="#">
                  <FiGithub />
                </a>
                <a href="">
                  <FiEye />
                </a>
                  </div>
                  ;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
