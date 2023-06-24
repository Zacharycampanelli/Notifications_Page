const Reaction = ({ userData, image }) => {
  return (
    <>
      <img src={image} className="icon" />
      <div className="info">
        <div className="info-content">
          <h2>{userData.data.user}</h2>
          <p>
            {' '}
            reacted to your recent post <span className="post-topic">{userData.data.post}</span>
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
