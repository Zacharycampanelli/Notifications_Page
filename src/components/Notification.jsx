import { useState } from "react";
import Comment from "./NotificationTypes/Comment";
import Follow from "./NotificationTypes/Follow";
import Group from "./NotificationTypes/Group";
import Message from "./NotificationTypes/Message";
import Reaction from "./NotificationTypes/Reaction";

const Notification = ({notifications, setNotifications, notification, image, setNumber, number }) => {
  const [isNew, setIsNew] = useState(notification.new)

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

  console.log(isNew, notification)
const readNotification = () => {
  let temp = {...notification}
  if(isNew) {
    temp.new = false;
    console.log(temp)
    setIsNew(false)
    // setIsNew(false);
     setNumber((prev) => prev - 1);
    // console.log(number)
    // setNotifications({...notifications, notification})
  }
}

  return (
    <div onClick={readNotification} className={`notification ${isNew === true ? `unread` : '' }`} >
     
     {typeOfNotification(notification )}
      {/* <img src={require(`../images/${notification.data.photo}`)} /> */}
    </div>
  )
}

export default Notification
