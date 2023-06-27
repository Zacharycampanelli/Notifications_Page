import { useEffect } from "react"

import Notification from "./Notification"

import angela from '../assets/images/avatar-angela-gray.webp'
import anna from '../assets/images/avatar-anna-kim.webp'
import jacob from '../assets/images/avatar-jacob-thompson.webp'
import kimberly from '../assets/images/avatar-kimberly-smith.webp'
import mark from '../assets/images/avatar-mark-webber.webp'
import nathan from '../assets/images/avatar-nathan-peterson.webp'
import rizky from '../assets/images/avatar-rizky-hasanuddin.webp'

const avatars = [mark, angela, jacob, rizky, kimberly, nathan, anna];

const MessageBoard = ({ number, setNumber, notifications, setNotifications } ) => {
    useEffect(() => {

      notifications.map((item) => item.new === true && setNumber((number) => number + 1));
    }, [notifications]);


  return (
    <div className="message-board">
      {
        notifications.map((note, i) => (
             <Notification notifications={notifications} setNotifications={setNotifications} notification={note} image={avatars[i]} key={note} setNumber={setNumber} number={number}  />
        )
        )

      }
    </div>
  )
}

export default MessageBoard
