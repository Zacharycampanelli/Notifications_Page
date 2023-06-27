import { useEffect, useState } from 'react';
import  {notificationData} from './assets/data/notifications';
import Header from './components/Header';
import MessageBoard from './components/MessageBoard';
import './styles/App.scss'





function App() {
  const[notifications, setNotifications] = useState(notificationData)
const [numOfNotifications, setNumOfNotifications] = useState(0);
let count = 0

useEffect(() => {
  notifications.forEach((item) => {
  //   if(item.new) {
  //     return count++;
      if (item.new === true) {
        count++
      }
    }
  // }
  )
  
  console.log(count)
  // console.log(count)
  // setNumOfNotifications(count)
  
}, [notifications])

console.log(notifications)
  return (
    <div className='container'>
      <Header number={numOfNotifications} setNumber={setNumOfNotifications} notifications={notifications} setNotifications={setNotifications} />
      <MessageBoard number={numOfNotifications} setNumber={setNumOfNotifications} notifications={notifications} setNotifications={setNotifications}  />
    </div>
  )
}

export default App
