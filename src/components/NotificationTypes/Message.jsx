const Message = ({ userData, image }) => {
  return (
    <>
      <img src={image} className="icon" />
      <div className="info">
        <div className="info-content">
        <a href="#"><h2>{userData.data.user}</h2></a>          <p>
            {' '}
            sent you a private message <span className="post-topic">{userData.data.post}</span>
          </p>
        </div>
        <div className="info-time">
          <p>{userData.data.time} ago</p>
        </div>
        <div className="info-message">
          <p>{userData.data.message}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
