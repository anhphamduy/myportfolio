import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

const sentencesToTypes = ["I do React", "I code cool websites"];

export default class Landing extends React.Component {
  state = {
    doneTyping: false,
    sentencesToTypes
  };

  onTypingDone = () => {
    this.setState(
      {
        sentencesToTypes: null
      },
      () =>
        // run this callback after the state updates
        this.setState({
          sentencesToTypes
        })
    );
  };

  render() {
    return (
      <div className="landing">
        {/* Dummy div for space-between */}
        <div />
        <div className="landing-content">
          <div>
            <div className="landing-content-subtitle">oh, hello</div>
            <div className="landing-content-subtitle-dummy" />
            <div className="landing-content-description">
              I am Anh, a full-stack web developer &amp; Machine Learning
              engineer.
              {this.state.sentencesToTypes && (
                <Typist onTypingDone={this.onTypingDone}>
                  <Typist.Delay ms={1000} />
                  {this.state.sentencesToTypes.map(i => {
                    return (
                      <span key={i.toString()}>
                        {i}
                        {<Typist.Backspace count={20} delay={1000} />}
                      </span>
                    );
                  })}
                </Typist>
              )}
            </div>
            <i className="fas fa-arrow-down" />
          </div>
        </div>
        {/* Dummy div for space-between */}
        <div />
      </div>
    );
  }
}
