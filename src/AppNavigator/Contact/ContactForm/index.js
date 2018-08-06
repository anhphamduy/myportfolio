import React from "react";

const ContactForm = () => (
  <div className="contact-form">
    <div className="title">Want to get in touch?</div>
    <div className="form">
      <div className="name-field">
        <input placeholder="Your name" />
      </div>
      <div className="email-field">
        <input placeholder="Your email" />
      </div>
      <div className="message-field">
        <textarea placeholder="Your message" />
      </div>
      <button>SUBMIT</button>
    </div>
    <div className="direct-contact">
      <div className="title">Or contact directly?</div>
      <div className="direct-contact-detail">anhphamduy@outlook.com</div>
      <div className="direct-contact-detail">0414 968 373</div>
    </div>
  </div>
);

export default ContactForm;
