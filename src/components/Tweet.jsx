import React from "react";
import ProfileImage from "./ProfileImage";

function Tweet(prop) {

  const {name, handle, image} = prop.tweet.user;
  const {timestamp, message} = prop.tweet

  return (
    <div className="tweet">
      <ProfileImage image = { image } />

      <div className="tweet_body">
        <div className="tweet_top">
          <span className="tweet_user">
            <span className="tweet_name">{name}</span>
            <span className="tweet_handle">@{handle}</span>
          </span>

          <span className="tweet_timestamp">{timestamp}</span>
        </div>
        <div className="tweet_message">
          <p>{message}</p>
          </div>

        <div className="tweet_actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  )
}

export default Tweet