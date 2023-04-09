import React from "react";
import portfolio from "../../../assets/portfolio.jpg";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
      className="container "
      id="home"
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio-img" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Kaan Karadag</span>
        </h3>
        <span className="job">Full-Stack Developer Based on Canada</span>
        <span className="text">
          Dedicated to creating
          <br /> impactful digital products, <br /> brands, and experiences.
        </span>
        <motion.a
          href="#contact"
          variants={moveVariants}
          animate="animation"
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
    </motion.div>
  );
};

export default Home;
