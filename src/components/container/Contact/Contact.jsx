import React from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        className="title"
        initial={{ opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
      >
        <span>Get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          className="contact_left_container"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>Just Say Hi!</h3>
          <p className="contact_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            autem animi ea, quibusdam iusto dolorem sequi. Possimus a nisi
            laboriosam laudantium exercitationem, magnam perspiciatis facilis
            eius, consectetur explicabo sequi id.
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              return <div key={index}>{socialIcon}</div>;
            })}
          </div>
        </motion.div>
        <motion.div
          className="contact_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="row">
            <input type="number" placeholder="Phone Number" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="row">
            <textarea placeholder="message"></textarea>
          </div>
          <motion.div
            className="btn"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="">Send</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
