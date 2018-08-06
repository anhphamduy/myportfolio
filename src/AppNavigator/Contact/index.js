import React from "react";
import Map from "./Map";
import ContactForm from "./ContactForm";

export default class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-content-intro">Contact</div>
        <div className="contact-section">
          <Map />
          <div className="contact-form-container">
            <ContactForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
