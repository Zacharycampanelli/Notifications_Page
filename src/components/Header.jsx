const Header = ({ number, setNumber, notifications, setNotifications, setClearAll }) => {
  const clearAll = () => {
    let temp = [...notifications];
    let arr = temp.map((item) => {
      if (item.new === true) item.new = false;
      return item;
    });
    setNotifications([...arr]);
    setClearAll(true);
  };

  return (
    <header>
      <div className="notification-numbers">
        <h1>Notifications</h1>
        <div className="total">{number}</div>
      </div>
      <button type="button" onClick={clearAll}>
        Mark all as read
      </button>
    </header>
  );
};

export default Header;
