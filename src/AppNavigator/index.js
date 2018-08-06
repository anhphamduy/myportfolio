import React from "react";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Talks from "./Talks";
import "./styles.css";

export default class AppNavigator extends React.Component {
  state = {
    current: 0,
    currentDummy: 0,
    onContent: false,
    onNavTransition: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollTrack);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollTrack);
  }

  scrollTrack = () => {
    if (window.scrollY < 10 && this.state.current !== 0) {
      this.setState({
        onNavTransition: true,
        currentDummy: 0
      });
    }
    if (
      this.projectsRef.getBoundingClientRect().top < 200 &&
      this.state.current !== 1 &&
      this.projectsRef.getBoundingClientRect().top > 0
    ) {
      this.setState({
        onNavTransition: true,
        currentDummy: 1
      });
    } else if (
      this.talkRef.getBoundingClientRect().top < 200 &&
      this.state.current !== 2 &&
      this.talkRef.getBoundingClientRect().top > 0
    ) {
      this.setState({
        onNavTransition: true,
        currentDummy: 2
      });
    } else if (
      this.contactRef.getBoundingClientRect().top < 500 &&
      this.state.current !== 3 &&
      this.contactRef.getBoundingClientRect().top > 0
    ) {
      this.setState({
        onNavTransition: true,
        currentDummy: 3
      });
    }
    if (this.mainContentRef.getBoundingClientRect().top < 30) {
      this.setState({ onContent: true });
    } else {
      this.setState({ onContent: false });
    }
  };

  updateCurrent = current => () => {
    this.setState({ current }, () => this.setState({ onNavTransition: false }));
  };

  render() {
    return (
      <div onTouchMove={this.onTouch} onWheel={this.scrollChange}>
        <Navbar
          current={this.state.current}
          onContent={this.state.onContent}
          onTransition={this.state.onNavTransition}
          updateCurrent={this.updateCurrent(this.state.currentDummy)}
        />
        <Landing />
        <div className="main-content" ref={ref => (this.mainContentRef = ref)}>
          <div ref={ref => (this.projectsRef = ref)} className="projects">
            <Projects />
          </div>
          <div className="talks" ref={ref => (this.talkRef = ref)}>
            <Talks />
          </div>
          <div className="contact" ref={ref => (this.contactRef = ref)}>
            <Contact />
          </div>
        </div>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          ©2018 Created by Anh Pham
        </div>
      </div>
    );
  }
}
