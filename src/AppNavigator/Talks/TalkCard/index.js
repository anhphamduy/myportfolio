import React from "react";

const TalkCard = ({
  title,
  place,
  time,
  talkDescription,
  url,
  placeDescription
}) => (
  <div className="card">
    <div className="content">
      <div className="front">
        <div>
          <div>
            <div className="talk-title">{title}</div>
            <div className="talk-place">{place}</div>
          </div>
          <div className="talk-time">{time}</div>
        </div>
      </div>
      <div className="back">
        <div>
          <div className="back-container">
            <div className="talk-details">
              <div>{talkDescription}</div>
            </div>
            <div className="talk-place-description">
              <a href={url}>{place}</a> {placeDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TalkCard;
