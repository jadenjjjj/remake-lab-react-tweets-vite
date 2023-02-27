import React from "react";
import ProfileImage from "./ProfileImage";
import TimeStamp from "./TimeStamp";
import User from "./User";
import Message from "./Message";
import Action from './Action';

function Tweet(prop) {

  const {name, handle, image} = prop.tweet.user;
  const {timestamp, message} = prop.tweet

  return (
    <div className="tweet">
      <ProfileImage image = {image} />

      <div className="tweet_body">
        <div className="tweet_top">

          <span className="tweet_user">
          <User userData = {prop.tweet.user} />
          </span>

          
          <TimeStamp time = {prop.tweet.timestamp}/>
        </div>
        
        <Message message = {prop.tweet.message}/>

        
        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  )
}

export default Tweet