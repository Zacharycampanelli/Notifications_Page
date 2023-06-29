const Group = ({ userData, image }) => {
  const action = userData.data.action;

  return (
    <>
      <img src={image} className="icon" />
      <div className="info">
        <div className="info-content">
          <a href="#">
            <h2>{userData.data.user}</h2>
          </a>
          <p>
            has {action} {action === 'joined' ? 'your' : 'the'} group{' '}
            <a href="#">
              <span className="post-topic">{userData.data.groupName}</span>
            </a>
          </p>
        </div>
        <div className="info-time">
          <p>{userData.data.time} ago</p>
        </div>
      </div>
    </>
  );
};

export default Group;
