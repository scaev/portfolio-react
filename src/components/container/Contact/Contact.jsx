import React from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="title">
        <span>Get in touch</span>
        <h1>Contact Me</h1>
      </div>
      <div className="contact_form">
        <div className="contact_left_container">
          <h3>Just Say Hi!</h3>
          <p>
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
        </div>
        <div className="contact_right">
                  <h3>Get In Touch</h3>
                  <div className="row">
                      <input type="text"
                          placeholder="First Name" />
                      <input type="text"
                      placeholder="Last Name"/>
                  </div>
                  <div className="row">
                      <input type="number" placeholder="Phone Number" />
                      <input type="email"
                          placeholder="Email" />
                  </div>
                  <div className="row">
                      <textarea placeholder="message"></textarea>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
