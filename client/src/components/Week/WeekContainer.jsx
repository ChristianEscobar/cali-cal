import React, { Component } from 'react';
import Day from './Day';

export default class WeekContainer extends Component {
  constructor(props) {
    super(props);

    // Set initial state

    // Create array storing days of week
    this.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Bind functions
    this.createDaysOfWeek = this.createDaysOfWeek.bind(this);
  }

  // Create days of week
  createDaysOfWeek() {
    return this.daysOfWeek.map( day => <Day className="day" key={day} day={day} dayCount={0} />);
  }

  render() {
    return(
      this.createDaysOfWeek()
    );
  }
};
