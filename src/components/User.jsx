import React from "react";

function User(prop) {
    const { name, handle} = prop.userData

    return (
        <span className="tweet_user">
            <span className="tweet_name">{name}</span>
            <span className="tweet_handle">@{handle}</span>
        </span>
    )
}

export default User;