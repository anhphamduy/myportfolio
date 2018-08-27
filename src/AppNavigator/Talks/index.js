import React from "react";
import TalkCard from "./TalkCard";

const Talks = () => (
  <React.Fragment>
    <div className="main-content-intro">Talks</div>
    <div className="talk-section">
      <div className="section-title">Past Apperances</div>
      <div className="talk-list">
        <TalkCard
          title="Building a better developer experience for React and React Native"
          place="CanberraJS"
          time="13/7/2018"
          talkDescription="My talk was a deep dive of Navigation APIs in React Native. Some
                  Navigation APIs I had introduced were IOS navigation and React
                  Navigation."
          placeDescription="is a monthly meetup of Javascript Developers and people interested
                  to learn more about app development using Javascript."
          url="https://www.meetup.com/CanberraJS/"
        />
        <TalkCard
          title="Emojifier in @ school"
          place="PyCon AU"
          time="24 - 28/8/2018"
          talkDescription="I talked about how I use Machine Learning with SPAs as well as Mobile Application using Python and React Native."
          placeDescription="is the Python Language Conference happening every year. It is the biggest Python Conference where nearly thousand of Python Developers gather together talking about Python."
          url="https://2018.pycon-au.org/"
        />
      </div>
    </div>
    <div className="talk-section">
      <div className="section-title">Upcoming Talks</div>
      <div className="talk-list">
        <TalkCard
          title="The truth behind Virtual DOM"
          place="Web Directions Summit"
          time="1 - 2/11/2018"
          talkDescription="I will be talking about the performance of Virtual DOM, and why it is actually not as fast as most engineers think."
          url="http://www.webdirections.org/wds/"
          placeDescription="is a Web Development Conference where about thoundsand of Web Developers together talking about design, development and engineering."
        />
      </div>
    </div>
  </React.Fragment>
);

export default Talks;
