import React from "react";

function ProfileImage(prop) {

    const { image } = prop;

    return (
        <img
        src = {image}
        className = "profile"
        alt = "profile"
        />
    )
}

export default ProfileImage