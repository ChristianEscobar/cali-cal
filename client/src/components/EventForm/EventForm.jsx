import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Task from '../Task/TaskContainer';
import Header from '../Header/Header';

export default class EventForm extends Component {
  render() {
    return(
      <div>
        <div>
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <form>
              <div>
                <label htmlFor="event">Event: </label>
                <input name="event" type="input" value={this.props.eventData.event}/>
              </div>
              <div>
                <label htmlFor="start">Start Time: </label>
                <input name="start" type="time" value={this.props.eventData.start}/>
              </div>
              <div>
                <label htmlFor="end">End Time: </label>
                <input name="end" type="time" value={this.props.eventData.end}/>
              </div>
              <div>
                <label htmlFor="allDay">All Day</label>
                <input name="allDay" type="checkbox"/>
              </div>
              <Link to="/">
                <button type="button">Cancel</button>
              </Link>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="row">
            <Task />
          </div>
        </div>
      </div>
    );
  }
}