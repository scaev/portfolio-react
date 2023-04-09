import React, { useState, useEffect } from "react";
import { navLinks } from "../../Data";
import { socialIcons } from "../../Data";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.4,
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <motion.div
      initial={{ y: -25 }}
      animate={{ y: -5 }}
      transition={{ duration: 0.6 }}
      className={scroll ? "header active" : "header"}
    >
      <div className="Nav_container">
        <div className="logo">
          <img src="favicon.ico" alt="icon" />
        </div>
        <ul className="nav_links">
          {navLinks.map((navlink, index) => {
            return (
              <li key={index}>
                <a href={`#${navlink}`}>{navlink}</a>
              </li>
            );
          })}
        </ul>
        <div className="social_icons">
          {socialIcons.map((socialIcon, index) => {
            return (
              <a
                key={index}
                href={socialIcon.href}
                target="_blank"
                rel="noreferrer"
              >
                {socialIcon.icon}
              </a>
            );
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
        <motion.div
          className="menuX"
          variants={navLinkVariants}
          animate={toggle ? "visible" : "hidden"}
        >
          <HiX onClick={() => setToggle(false)} />
          {navLinks.map((navlink, index) => {
            return (
              <li key={index}>
                <a href={`#${navlink}`} onClick={() => setToggle(false)}>
                  {navlink}
                </a>
              </li>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
