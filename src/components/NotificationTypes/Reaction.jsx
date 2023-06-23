import temp from '../../assets/images/avatar-angela-gray.webp';

const Reaction = ({ userData }) => {
  return (
    <>
      <img src={temp} className="icon" />
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
