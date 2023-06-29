const Reaction = ({ userData, image }) => {
  return (
    <>
      <img src={image} className="icon" />
      <div className="info">
        <div className="info-content">
          <a href="#"><h2>{userData.data.user}</h2></a>
          <p>
            reacted to your recent post <a href="#"><span className="post-topic">{userData.data.post}</span></a>
          </p>
        </div>
        <div className="info-time">
          <p>{userData.data.time} ago</p>
        </div>
      </div>
    </>
  );
};

export default Reaction;
