import React from "react";
import portfolio from "../../../assets/portfolio.jpg";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="container " id="home">
      <div className="profile">
        <img src={portfolio} alt="portfolio-img" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Kaan Karadag</span>
        </h3>
        <span className="job">Full-Stack Developer Based on Canada</span>
        <span className="text">
          Passionate
          <br /> to craft innovative <br /> web products.
        </span>
        <motion.a
          href="contact"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          connect with me
        </motion.a>
        <div className="fullstack">Full-Stack Developer</div>
        <div className="ui">UI/UX Designer</div>
        <div className="mecengineer">Mechanical Engineer</div>
        <div className="freelancer">Freelancer</div>
      </div>
    </div>
  );
};

export default Home;
