import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Task from '../Task/TaskContainer';
import Header from '../Header/Header';
import UpdateButton from '../UpdateButton/UpdateButtonContainer';

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
                <input name="event" type="input" value={this.props.eventData.event} onChange={this.props.changeEvent}/>
              </div>
              <div>
                <label htmlFor="start">Start Time: </label>
                <input name="start" type="time" value={this.props.eventData.start} onChange={this.props.changeEventStart}/>
              </div>
              <div>
                <label htmlFor="end">End Time: </label>
                <input name="end" type="time" value={this.props.eventData.end} onChange={this.props.changeEventEnd}/>
              </div>
              <div>
                <label htmlFor="allDay">All Day</label>
                <input name="allDay" type="checkbox"/>
              </div>
              <Link to="/">
                <button type="button">Cancel</button>
              </Link>
<<<<<<< HEAD
              <button type="button" onClick={() => console.log(this.props.editing, this.props.selectedDay)}>Submit</button>
=======
              <UpdateButton />
              {/* <button type="submit">Submit</button> */}
>>>>>>> c929ae9a34fe1b1fa8c239ac17669469ff57425c
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