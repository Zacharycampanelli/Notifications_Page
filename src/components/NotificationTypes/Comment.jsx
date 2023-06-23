import temp from '../../assets/images/avatar-angela-gray.webp';
import temp2 from '../../assets/images/image-chess.webp'
const Comment = ({ userData, image }) => {
  return (
    <>
    <img src={image} className="icon" />
    <div className="info">
      <div className="info-content">
        <h2>{userData.data.user}</h2>
        <p>
          {' '}
          commented on  your {userData.data.post}
        </p>
      </div>
      <div className="info-time">

      <p>{userData.data.time} ago</p>
      </div>
    </div>
    <img src={temp2} className="photo" />
  </>
  )
}

export default Comment
