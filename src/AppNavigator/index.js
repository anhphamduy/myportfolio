import React from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import "./styles.css";
import { CSSTransition } from "react-transition-group";
import Emojifier from "./Emojifier";
import AtSchool from "./AtSchool";

export default class AppNavigator extends React.Component {
  state = {
    onLanding: true,
    onContent: false,
    onEmojifier: false,
    onAtSchool: false,
    onChanging: false,
    onReading: false
  };

  // componentDidMount() {
  //   // window.addEventListener("resize", this.updateWindowDimensions);
  //   // window.addEventListener("scroll", this.scrollTrack);
  //   window.addEventListener("touchstart", this.handleTouchStart, false);
  //   // this.updateWindowDimensions();
  // }

  // handleTouchStart = e => {
  //   this.setState({ xDown: e.touches[0].clientX, yDown: e.touches[0].clientY });
  // };

  // componentWillUnmount() {
  //   // window.removeEventListener("resize", this.updateWindowDimensions);
  //   // window.removeEventListener("scroll", this.scrollTrack);
  // }

  // // updateWindowDimensions = () => {
  // //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  // // };

  // scrollChange = e => {
  //   console.log("here");
  //   console.log("this");
  //   if (!this.state.onChanging && !this.state.onReading) {
  //     this.setState({ onReading: true }, () =>
  //       setTimeout(() => this.setState({ onReading: false }), 1500)
  //     );
  //     if (e.deltaY > 0) {
  //       // mouse down
  //       this.handleGoDown();
  //     } else if (e.deltaY < -0) {
  //       this.handleGoUp();
  //     }
  //   }
  // };

  // handleGoDown = () => {
  //   console.log("here on handleGoDown");
  //   if (!this.state.onContent) {
  //     this.setState({ onChanging: true }, () => {
  //       console.log(this.state);
  //       if (this.state.onLanding) {
  //         this.setState({ onLanding: false, onEmojifier: true });
  //       } else if (this.state.onEmojifier) {
  //         this.setState({ onEmojifier: false, onAtSchool: true });
  //       } else if (this.state.onAtSchool) {
  //         console.log("here");
  //         this.setState({ onAtSchool: false, onContent: true });
  //       }
  //     });
  //   }
  // };

  // handleGoUp = () => {
  //   if (!this.state.onLanding) {
  //     this.setState({ onChanging: true }, () => {
  //       if (this.state.onContent) {
  //         this.setState({ onAtSchool: true, onContent: false });
  //       } else if (this.state.onAtSchool) {
  //         this.setState({ onEmojifier: true, onAtSchool: false });
  //       } else if (this.state.onEmojifier) {
  //         this.setState({ onLanding: true, onEmojifier: false });
  //       }
  //     });
  //   }
  // };

  // onTouch = e => {
  //   if (!this.state.onReading && !this.state.onChanging) {
  //     if (!this.state.xDown || !this.state.yDown) {
  //       return;
  //     }

  //     const xUp = e.touches[0].clientX;
  //     const yUp = e.touches[0].clientY;

  //     const xDiff = this.state.xDown - xUp;
  //     const yDiff = this.state.yDown - yUp;

  //     if (Math.abs(xDiff) <= Math.abs(yDiff)) {
  //       if (yDiff > 0) {
  //         this.handleGoDown();
  //       } else {
  //         this.handleGoUp();
  //       }
  //     }
  //   }
  // };

  render() {
    return (
      <div onTouchMove={this.onTouch} onWheel={this.scrollChange}>
        <Navbar />
        <Landing />
        <Emojifier />
        <AtSchool />
        <CSSTransition
          classNames="fade"
          timeout={500}
          in={this.state.onLanding && !this.state.onChanging}
          unmountOnExit
          onExited={() => this.setState({ onChanging: false })}
        >
          <div ref={ref => (this.landingRef = ref)}>
            <Navbar />
            <Landing />
          </div>
        </CSSTransition>
        <CSSTransition
          classNames="fade"
          timeout={500}
          in={this.state.onEmojifier && !this.state.onChanging}
          unmountOnExit
          onExited={() => this.setState({ onChanging: false })}
        >
          <Emojifier />
        </CSSTransition>
        <CSSTransition
          classNames="fade"
          timeout={500}
          in={this.state.onAtSchool && !this.state.onChanging}
          unmountOnExit
          onExited={() => this.setState({ onChanging: false })}
        >
          <AtSchool />
        </CSSTransition>
        <CSSTransition
          classNames="fade"
          timeout={500}
          in={this.state.onContent && !this.state.onChanging}
          unmountOnExit
          onExited={() => this.setState({ onChanging: false })}
        >
          <div
            style={{
              height: "100vh",
              backgroundColor: "blue"
            }}
          />
        </CSSTransition>
      </div>
    );
  }
}
