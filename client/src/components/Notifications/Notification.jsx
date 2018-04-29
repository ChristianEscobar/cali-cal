import React from 'react';
import "./Notification.css";

const Notification = (props) => {
  return (
    <ul className="dots">
      <li>
        <span>
          <mark className="big swing">
            <span className="message">{props.message}</span>  
          </mark>
        </span>
        {/* <div className="notification-container">
          <span className="message">{props.message}</span>
        </div> */}
      </li>
    </ul>
  );
};

export default Notification;