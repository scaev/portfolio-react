import React from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="title">
        <span>get in touch</span>
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
      </div>
    </div>
  );
};
