import React from "react";
import "./Footer.scss";
import { socialIcons } from "../../../Data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright&copy;2023 All rights reserved.Made by{" "}
          <span>Kaan Karadag</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((socialIcon, index) => {
            return <div key={index}>{socialIcon}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
