import React from "react";

export default class Emojfier extends React.Component {
  render() {
    return (
      <div className="emojifier">
        <div className="emoji-project-container">
          <div className="emoji-project">
            <div className="emoji-cont">
              <div className="emoji" />
            </div>
            <div className="shadow" />
          </div>
        </div>
        <div className="emojifier-description">
          <div className="emojifier-description-title">Emojfier</div>
          <div className="emojifier-description-details">
            Emojifier is an implementation of a sequence model in Machine
            Learning - Long Short Term Memory Networks. It will analyse the
            meaning or context of the sentence, the give that sentence an
            appropriate emoji.
          </div>
          <a href="#"><i className="fab fa-github"></i> View projects</a>
        </div>
      </div>
    );
  }
}
