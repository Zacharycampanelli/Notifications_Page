const Comment = ({ userData, image, secondImage }) => {
  return (
    <>
      <img src={image} className="icon" />
      <div className="comment">
        <div className="info">
          <div className="info-content">
            <a href="#">
              <h2>{userData.data.user}</h2>
            </a>
            <p> commented on your {userData.data.post}</p>
          </div>
          <div className="info-time">
            <p>{userData.data.time} ago</p>
          </div>
        </div>
      </div>
      { 

        <a href="#">
        <img src={secondImage} className="photo" id={userData.data.user} />
      </a>
      }
    </>
  );
};

export default Comment;
