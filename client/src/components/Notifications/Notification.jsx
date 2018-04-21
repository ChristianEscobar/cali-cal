import React from 'react';
import "./Notification.css";

const Notification = (props) => {
  return (
    <div className="notification-container">
      <span className="message">{props.message}</span>
    </div>
  );
};

export default Notification;