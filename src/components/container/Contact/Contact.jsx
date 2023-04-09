import React, { useRef, useState } from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5fk55xu",
        "template_8vyi1p4",
        ref.current,
        "kzd2LJ4KXsBl9xCM5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

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
            Thank you for taking the time to visit my portfolio website. If you
            have any questions or would like to discuss a project, please feel
            free to get in touch using the contact form. To get connected,
            simply fill out the form with a brief message about your project or
            inquiry. I'll get back to you as soon as possible to discuss the
            details.
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
              return <a key={index} href={socialIcon.href} target="_blank" rel="noreferrer">{socialIcon.icon}</a>;
            })}
          </div>
        </motion.div>
        <motion.Form
          className="contact_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          ref={ref}
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" placeholder="First Name" name="first_name" />
            <input type="text" placeholder="Last Name" name="last_name" />
          </div>
          <div className="row">
            <input type="number" placeholder="Phone Number" name="number" />
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className="row">
            <textarea placeholder="Message" name="message"></textarea>
          </div>
          <motion.div
            className="btn"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <button type="submit">Send</button>
          </motion.div>
          {success &&
            "Your message has been sent. I'll get back to you soon :)"}
        </motion.Form>
      </div>
    </div>
  );
};

export default Contact;
