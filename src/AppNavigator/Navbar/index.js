import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
       
        <div className="navbar-middle">Anh Pham</div>
        <div className="navbar-right-container">
          <div className="navbar-right">
            <div className="twitter-logo">
              <i className="fab fa-twitter" />
            </div>
            <div className="github-logo">
              <i className="fab fa-github" />
            </div>
            <div className="stackoverflow-logo">
              <i className="fab fa-stack-overflow" />
            </div>
            <div className="linkedin-logo">
              <i className="fab fa-linkedin" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
