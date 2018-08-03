import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

export default class Landing extends React.Component {
  state = {
    doneTyping: false
  };

  render() {
    return (
      <div className="landing">
        {/* Dummy div for space-between */}
        <div />
        <div className="landing-content">
          <div>
            <Typist
              onTypingDone={() => {
                this.setState({ doneTyping: true });
              }}
              avgTypingSpeed={60}
              startDelay={2000}
            >
              <span> I am a React Developer</span>
              <Typist.Backspace count={15} delay={300} />
              <span>Flask Developer</span>
            </Typist>
          </div>
          <div
            className={
              "landing-content-details " + (this.state.doneTyping ? "show" : "")
            }
          >
            Hello
          </div>
        </div>
        <div>
          <i
            className={
              "fas fa-arrow-down " + (this.state.doneTyping ? "show" : "")
            }
          />
        </div>
      </div>
    );
  }
}
