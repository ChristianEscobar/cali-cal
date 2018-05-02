import React, { Component } from 'react';
import Notification from '../Notifications/Notification';
import './Day.css';


export default class Day extends Component {
  render() {
    // Set background color for selected day
    let className = this.props.selectedDay ? "events-container events-container-selected" : "events-container";

    if (this.props.eventCount === 0) {
      return (
        <div className="day-container col-sm-12 col-lg-1">
          <div className='day text-center'>
            <span className="dayOfWeek">{this.props.dayName}</span>
          </div>
          <div className={className} onClick={() => this.props.changeDay(this.props.dayNumber)}>
            {/* <Notification message={this.props.eventCount} /> */}
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="day-container col-sm-12 col-lg-1">
          <div className='day text-center'>
            <span className="dayOfWeek">{this.props.dayName}</span>
          </div>
          <div className={className} onClick={() => this.props.changeDay(this.props.dayNumber)}>
            <Notification message={this.props.eventCount} />
          </div>
        </div>
      );
    }
  }
}