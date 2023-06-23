import Comment from "./NotificationTypes/Comment";
import Follow from "./NotificationTypes/Follow";
import Group from "./NotificationTypes/Group";
import Message from "./NotificationTypes/Message";
import Reaction from "./NotificationTypes/Reaction";

const Notification = ({notification, image }) => {

  const typeOfNotification = (notification) => {
    switch (notification.type) {
      case 'reaction':
        return <Reaction userData={notification} image={image} />;
      case 'follow':
        return <Follow userData={notification} image={image} />
      case 'group':
        return <Group userData={notification} image={image} />
      case 'message':
        return <Message userData={notification} image={image} />
      case 'comment':
        return <Comment userData={notification} image={image} />
    }

  }


  return (
    <div className={`notification ${notification.new === true ? `unread` : '' }`} >
     
     {typeOfNotification(notification )}
      {/* <img src={require(`../images/${notification.data.photo}`)} /> */}
    </div>
  )
}

export default Notification
