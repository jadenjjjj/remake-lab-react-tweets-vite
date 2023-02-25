function Tweet(prop) {

  const { name, handle, image } = prop.tweet.user;
  const { timestamp, message } = prop.tweet;

  return (
    <div>
      
      <img
        src={image}
        className="profile"
        alt="profile" 
      />

    </div>
  )
}

export default Tweet;