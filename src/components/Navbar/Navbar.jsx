import React from "react";
import { navLinks } from "../../Data";
import { socialIcons } from '../../Data';
import "./Navbar.scss";



const Navbar = () => {
  return (
    <div className="header">
      <div className="Nav_container">
        <div className="logo">
          <h3>A</h3>
        </div>
        <ul className="nav_links">
          {navLinks.map((navlink, index) => {
            return (
              <li key={index}>
                <a href={`${navlink}`}>{navlink}</a>
              </li>
            );
          })}
              </ul>
              <div className="social_icons" >
                  {socialIcons.map((socialIcon, index) => {
                  return (
                      <div key={index}>
                          {socialIcon}
                      </div>
                  )
              })}
              </div>
      </div>
    </div>
  );
};

export default Navbar;
