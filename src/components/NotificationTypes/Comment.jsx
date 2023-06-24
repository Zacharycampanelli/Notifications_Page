const Comment = ({ userData, image }) => {
  return (
    <>


      <img src={image} className="icon" />
     
    <div className="comment">
      <div className="info">
        <div className="info-content">
          <h2>{userData.data.user}</h2>
          <p> commented on your {userData.data.post}</p>
        </div>
        <div className="info-time">
          <p>{userData.data.time} ago</p>
          </div>
        </div>
      </div>
      <img src={userData.data.imgUrl} className="photo" />
    </>
  );
};

export default Comment;
