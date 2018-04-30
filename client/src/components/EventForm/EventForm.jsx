import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Task from '../Task/TaskContainer';
import Header from '../Header/Header';
import UpdateButton from '../UpdateButton/UpdateButtonContainer';

export default class EventForm extends Component {
  handleSubmit = (e) => {
    let errors = {};

    console.log(this.props.event.eventDetails.event);

    if(this.props.event.eventDetails.event === '') errors.event = "Value must be provided";
    if(this.props.event.eventDetails.start === '') errors.start = "Value must be provided";
    if(this.props.event.eventDetails.end === '') errors.end = "Value must be provided";

    if(Object.keys(errors).length > 0) {
      this.props.setFormErrors(errors);
    } else {
      // submit new task here
    }
  }

  handleChange = (e) => {
    // Update event details
    let eventDetails = Object.assign({}, this.props.event.eventDetails);
    eventDetails[e.target.name] = e.target.value;

    // Double !! converts a value to a boolean and ensures a boolean type
    if(!!this.props.formErrors.errors[e.target.name]) {
      let formErrors = Object.assign({}, this.props.formErrors);
      

      delete formErrors.errors[e.target.name];

      // Work around for changing input field containing error.
      // Not optimal but it works.
      this.props.setFormErrors(formErrors.errors);
      this.props.changeEventDetails(eventDetails);
    } else {
      this.props.changeEventDetails( eventDetails );
    }
  }
  
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
                <input required name="event" type="input" value={this.props.event.eventDetails.event} onChange={this.handleChange}/>
                <span>{this.props.formErrors.errors.event}</span>
              </div>
              <div>
                <label htmlFor="start">Start Time: </label>
                <input required name="start" type="time" step="1800" value={this.props.event.eventDetails.start} onChange={this.handleChange}/>
                <span>{this.props.formErrors.errors.start}</span>
              </div>
              <div>
                <label htmlFor="end">End Time: </label>
                <input required name="end" type="time" step="1800" value={this.props.event.eventDetails.end} onChange={this.handleChange}/>
                <span>{this.props.formErrors.errors.end}</span>
              </div>
              <div>
                <label htmlFor="allDay">All Day</label>
                <input name="allDay" type="checkbox"/>
              </div>
              <div>
                <Link to="/">
                  <button type="button">Cancel</button>
                </Link>
                <UpdateButton />
              </div>
              {/*<button type="button" onClick={this.handleSubmit}>Submit</button>*/}
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