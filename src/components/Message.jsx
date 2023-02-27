import React from "react";

function Message(prop) {
    const {message} = prop

    return (
        <div className="tweet_message">
              {message}  
        </div>
    )
}

export default Message;