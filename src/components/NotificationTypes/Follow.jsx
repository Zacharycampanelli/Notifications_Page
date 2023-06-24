const Follow = ({ userData, image }) => {
  return (
    <>
      <img src={image} className="icon" />
      <div className="info">
        <div className="info-content">
        <a href="#"><h2>{userData.data.user}</h2></a>          <p> followed you </p>
        </div>
        <div className="info-time">
          <p>{userData.data.time} ago</p>
        </div>
      </div>
    </>
  );
};

export default Follow;
