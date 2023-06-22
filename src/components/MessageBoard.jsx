import Notification from "./Notification"

const MessageBoard = ({ notifications }) => {

    console.log(notifications)
  return (
    <div className="message-board">
      {
        notifications.map((note) => (
             <Notification notification={note} />
        )
        )

      }
    </div>
  )
}

export default MessageBoard
