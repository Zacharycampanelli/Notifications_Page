import temp from '../../assets/images/avatar-angela-gray.webp';

const Follow = ({ userData, image }) => {
  console.log(image)
  return (
    <>
      <img src={image} className="icon" />
      <div className="info">
        <div className="info-content">
          <h2>{userData.data.user}</h2>
          <p> followed you  </p>
        </div>
        <div className="info-time">
        <p>{userData.data.time} ago</p>

        </div>
      </div>
    </>
  );
};

export default Follow;
