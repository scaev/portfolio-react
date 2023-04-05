import React from "react";
import { navLinks } from "../../Data";

const Navbar = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default Navbar;
