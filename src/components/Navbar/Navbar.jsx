import React, { useState } from "react";
import { navLinks } from "../../Data";
import { socialIcons } from "../../Data";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { Variant, motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };

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
        <div className="social_icons">
          {socialIcons.map((socialIcon, index) => {
            return <div key={index}>{socialIcon}</div>;
          })}
        </div>
        <div className="menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>
        <motion.div
          className="closeMenu"
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>
        <motion.div className="menuX">
          <HiX onClick={() => setToggle(false)} />
          {navLinks.map((navlink, index) => {
            return (
              <li key={index}>
                <a href={`${navlink}`}>{navlink}</a>
              </li>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
