import { useEffect, useState } from 'react';
import Comment from './NotificationTypes/Comment';
import Follow from './NotificationTypes/Follow';
import Group from './NotificationTypes/Group';
import Message from './NotificationTypes/Message';
import Reaction from './NotificationTypes/Reaction';
import chess from '../assets/images/image-chess.webp';

const Notification = ({ notification, image, setNumber, number, clearAll }) => {
  const [isNew, setIsNew] = useState(notification.new);

  const typeOfNotification = (notification) => {
    switch (notification.type) {
      case 'reaction':
        return <Reaction userData={notification} image={image} />;
      case 'follow':
        return <Follow userData={notification} image={image} />;
      case 'group':
        return <Group userData={notification} image={image} />;
      case 'message':
        return <Message userData={notification} image={image} />;
      case 'comment':
        return <Comment userData={notification} image={image} secondImage={chess} />;
    }
  };

  useEffect(() => {
    if (clearAll === true) {
      readNotification();
    }
  }, [clearAll]);

  const readNotification = () => {
    if (isNew) {
      setIsNew(false);
      setNumber((prev) => prev - 1);
    }
  };

  return (
    <div onClick={readNotification} className={`notification ${isNew === true ? `unread` : ''}`}>
      {typeOfNotification(notification)}
    </div>
  );
};

export default Notification;
