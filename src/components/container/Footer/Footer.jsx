import React from "react";
import "./Footer.scss";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="footer"
      //   initial={{ x: 0, opacity: 0 }}
      //   whileInView={{ x: [-250, 0], opacity: 1 }}
      //   transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 2 }}
    >
      <div className="copyright">
        <p>
          Copyright&copy;2023 All rights reserved. Made by{" "}
          <span>Kaan Karadag</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
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
      </div>
    </motion.div>
  );
};

export default Footer;
