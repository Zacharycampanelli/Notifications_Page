import temp from '../../assets/images/avatar-angela-gray.webp';

const Follow = ({ userData }) => {
  return (
    <>
      <img src={temp} className="icon" />
      <div className="info">
        <div className="info-content">
          <h2>{userData.data.user}</h2>
          <p> followed you  </p>
        </div>
        <div className="info-time"></div>
        <p>{userData.data.time} ago</p>
      </div>
    </>
  );
};

export default Follow;
