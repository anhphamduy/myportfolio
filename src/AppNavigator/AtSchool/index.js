import React from "react";

export default class AtSchool extends React.Component {
  render() {
    return (
      <div className="at-school">
        <div className="at-school-description">
          <div className="at-school-description-title">@ school</div>
          <div className="at-school-description-details">
            Emojifier is an implementation of a sequence model in Machine
            Learning - Long Short Term Memory Networks. It will analyse the
            meaning or context of the sentence, the give that sentence an
            appropriate emoji.
          </div>
          <a href="#"><i className="fab fa-github"></i> View projects</a>
        </div>
        <div className="at-school-images-wrapper">
          <div className="at-school-images-container">
            <div className="cardholder">
              <div className="card">
                <img src="/atschool3.png" />
              </div>
            </div>
            <div className="cardholder">
              <div className="card">
                <img src="/atschool1.png" />
              </div>
            </div>

            <div className="cardholder">
              <div className="card">
                <img src="/atschool2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
