import React from 'react';
import Notification from '../Notifications/Notification';
import './Day.css';

const Day = (props) => {
  return (
    <div className="day-container">
      <span className="dayOfWeek">{props.day}</span>
      <div className="events-container">
        <Notification message={props.dayCount} />
      </div>
    </div>
  );
};

export default Day;