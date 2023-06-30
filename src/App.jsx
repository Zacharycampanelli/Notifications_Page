import { useEffect, useState } from 'react';
import { notificationData } from './assets/data/notifications';
import Header from './components/Header';
import MessageBoard from './components/MessageBoard';
import './styles/App.scss';

function App() {
  const [notifications, setNotifications] = useState(notificationData);
  const [numOfNotifications, setNumOfNotifications] = useState(0);

  const [clearAll, setClearAll] = useState(false);

  let count = 0;

  useEffect(() => {
    notifications.forEach((item) => {
      if (item.new === true) {
        count++;
      }
    });
  }, [notifications]);

  return (
    <div className="container">
      <Header
        number={numOfNotifications}
        notifications={notifications}
        setNotifications={setNotifications}
        setClearAll={setClearAll}
      />
      <MessageBoard
        number={numOfNotifications}
        setNumber={setNumOfNotifications}
        notifications={notifications}
        setNotifications={setNotifications}
        clearAll={clearAll}
      />
      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Zachary Campanelli</a>.
      </div>
    </div>
  );
}

export default App;
