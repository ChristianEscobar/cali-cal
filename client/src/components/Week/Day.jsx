import React, { Component } from 'react';
import Notification from '../Notifications/Notification';
import './Day.css';


export default class Day extends Component {
  render() {
    // Set background color for selected day
    let className = this.props.selectedDay ? "events-container events-container-selected" : "events-container";

    return (
      <div className="day-container col-sm-12 col-lg-1">
        <span className="dayOfWeek">{this.props.dayName}</span>
        <div className={className} onClick={() => this.props.changeDay(this.props.dayNumber)}>
          <Notification message={this.props.eventCount} />
        </div>
      </div>
    );
  }
}