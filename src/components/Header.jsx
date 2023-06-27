const Header = ({ number, setNumber, notifications, setNotifications }) => {


  const clearAll = () => {
    // console.log(typeof notifications)
    notifications.map((notification) => {
      console.log(notifications)
      setNotifications({...notification, new: false})})  
    // setNumber(0);
  }


  return (
    <header>
      <div className="notification-numbers">
        <h1>Notifications</h1>
        <div className="total">{number}</div>
      </div>
      <button type="button" onClick={clearAll} >Mark all as read</button>
    </header>
  );
};

export default Header;
