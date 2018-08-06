import React from "react";
import { CSSTransition } from "react-transition-group";

export default class Navbar extends React.Component {
  state = {
    iconVisible: true
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 30) {
      this.setState({ iconVisible: false });
    } else {
      this.setState({ iconVisible: true });
    }
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <img src="/avatar.jpg" alt="Anh Pham avatar" />
        </div>
        <div className="navbar-right-container">
          <div className="navbar-right">
            <div
              className={
                "position-indicator" + (this.props.onContent ? " on-white" : "")
              }
            >
              <BurgerMenuContent
                updateCurrent={this.props.updateCurrent}
                current={this.props.current}
                onTransition={this.props.onTransition}
              />
              <div className="position-indicator-burger-menu">
                <BurgerMenu
                  current={this.props.current}
                  onTransition={this.props.onTransition}
                />
                <CSSTransition
                  in={this.state.iconVisible}
                  unmountOnExit
                  classNames="fade"
                  timeout={300}
                >
                  <div>
                    <div
                      onClick={() =>
                        window.open("https://twitter.com/anhphamduy", "_blank")
                      }
                      className="twitter-logo"
                    >
                      <i className="fab fa-twitter" />
                    </div>
                    <div
                      onClick={() =>
                        window.open("https://github.com/anhphamduy", "_blank")
                      }
                      className="github-logo"
                    >
                      <i className="fab fa-github" />
                    </div>
                    <div
                      onClick={() =>
                        window.open(
                          "https://stackoverflow.com/users/8005315/anh-pham",
                          "_blank"
                        )
                      }
                      className="stackoverflow-logo"
                    >
                      <i className="fab fa-stack-overflow" />
                    </div>
                    <div
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/anhphamduy/",
                          "_blank"
                        )
                      }
                      className="linkedin-logo"
                    >
                      <i className="fab fa-linkedin" />
                    </div>
                  </div>
                </CSSTransition>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const BurgerMenu = ({ current }) => (
  <React.Fragment>
    <div className="burger-icon-dummy" />
    {Array.from(Array(4).keys()).map(value => {
      return (
        <div
          className={"burger-icon" + (current === value ? " current-icon" : "")}
          key={value}
        />
      );
    })}
  </React.Fragment>
);

const BurgerMenuContent = ({ current, onTransition, updateCurrent }) => (
  <div className="position-indicator-current-position">
    <CSSTransition
      in={current === 0 && !onTransition}
      timeout={300}
      classNames="message"
      unmountOnExit
      key={"1"}
      onExited={() => updateCurrent()}
    >
      <div>About</div>
    </CSSTransition>
    <CSSTransition
      in={current === 1 && !onTransition}
      timeout={300}
      classNames="message"
      unmountOnExit
      key="2"
      onExited={() => updateCurrent()}
    >
      <div>Work</div>
    </CSSTransition>
    <CSSTransition
      in={current === 2 && !onTransition}
      timeout={300}
      classNames="message"
      unmountOnExit
      key="3"
      onExited={() => updateCurrent()}
    >
      <div>Talks</div>
    </CSSTransition>
    <CSSTransition
      in={current === 3 && !onTransition}
      timeout={300}
      classNames="message"
      unmountOnExit
      key="4"
      onExited={() => updateCurrent()}
    >
      <div>Contact</div>
    </CSSTransition>
  </div>
);
