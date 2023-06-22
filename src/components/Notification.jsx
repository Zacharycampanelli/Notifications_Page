import Comment from "./NotificationTypes/Comment";
import Follow from "./NotificationTypes/Follow";
import Group from "./NotificationTypes/Group";
import Message from "./NotificationTypes/Message";
import Reaction from "./NotificationTypes/Reaction";

const Notification = ({notification}) => {

  const typeOfNotification = (notification) => {
    switch (notification.type) {
      case 'reaction':
        return <Reaction userData={notification} />;
      case 'follow':
        return <Follow userData={notification} />
      case 'group':
        return <Group userData={notification} />
      case 'message':
        return <Message userData={notification} />
      case 'comment':
        return <Comment userData={notification} />
    }

  }
//   reaction
// follow
// group
// message
// comment

console.log(notification.type)
  return (
    <div className={`notification ${notification.new === true ? `unread` : '' }`} >
     
     {typeOfNotification(notification )}
      {/* <img src={require(`../images/${notification.data.photo}`)} /> */}
    </div>
  )
}

export default Notification
