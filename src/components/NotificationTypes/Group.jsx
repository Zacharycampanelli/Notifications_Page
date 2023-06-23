import temp from '../../assets/images/avatar-angela-gray.webp';


const Group = ({ userData }) => {
  const action = userData.data.action;
  return (
    <>
    <img src={temp} className="icon" />
    <div className="info">
      <div className="info-content">
        <h2>{userData.data.user}</h2>
        <p>
          {' '}
          has {action} the group <span className="post-topic">{userData.data.groupName}</span>
        </p>
      </div>
      <div className="info-time">

      <p>{userData.data.time} ago</p>
      </div>
    </div>
  </>
  )
}

export default Group
