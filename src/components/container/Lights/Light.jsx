import React from "react";
import "./Light.scss";
import { motion } from "framer-motion";


const Light = () => {
  return (
      <motion.div className="lights"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}>
      <span className="line"></span>
      <span className="border_left"></span>
      <span className="border_right"></span>
    </motion.div>
  );
};

export default Light;

