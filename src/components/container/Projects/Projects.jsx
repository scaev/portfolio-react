import React from 'react'
import "./Projects.scss";
import { workNavs } from "../../../Data";
import { workImages } from '../../../Data';
import {FiGithub, FiEye} from "react-icons/fi"


const Projects = () => {
    const [active, setActive] = useState(1)
    return (
        <div className="container" id='projects'>
            <div className="title">
                <span>My Work</span>
                <h1>Projects</h1>
            </div>
            <div
        className="buttons"
      >
        {workNavs.map((workNav ,index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              key={index}>{workNav}</button>
          )
        })}
      </div>
    </div>
       
    );
};

export dedfault Projects;