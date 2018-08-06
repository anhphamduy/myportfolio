import React from "react";

export default class AtSchool extends React.Component {
  render() {
    return (
      <div className="at-school">
        <div className="at-school-description">
          <div className="section-title">@ school</div>
          <div className="section-details">
            @ school is a learning management system. It is developed by a team
            of three members using React and Flask served as the server, and me
            myself is the team lead. @ school is aiming to be Series C startup
            by the end of this year.
          </div>
          <a href="https://atschool.live/">
            <i className="fas fa-globe" /> View product
          </a>
        </div>
        <div className="at-school-images-wrapper">
          <div className="at-school-images-container">
            <div className="cardholder">
              <div className="card">
                <img src="/atschool3.png" alt="one of the page website" />
              </div>
            </div>
            <div className="cardholder">
              <div className="card">
                <img src="/atschool1.png" alt="one of the page website" />
              </div>
            </div>

            <div className="cardholder">
              <div className="card">
                <img src="/atschool2.png" alt="one of the page website" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
