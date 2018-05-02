import React, { Component } from 'react';
import Task from '../Task/TaskContainer';
import Header from '../Header/Header';
import UpdateButton from '../UpdateButton/UpdateButtonContainer';
import SaveButton from '../SaveButton/SaveButtonContainer';
import CancelButton from '../CancelButton/CancelButtonContainer';
import './EventForm.css';

export default class EventForm extends Component {
  //redirects to home route after task update  
  componentWillReceiveProps(nextProps) {
    if (nextProps.updStatus === "updated") {
      this.props.history.push('/');
    }
  };
 
  /*
  handleSubmit = (e) => {
    let errors = {};

    if(this.props.event.eventDetails.event === '') errors.event = "Value must be provided";
    if(this.props.event.eventDetails.start === '') errors.start = "Value must be provided";
    if(this.props.event.eventDetails.end === '') errors.end = "Value must be provided";

    if(Object.keys(errors).length > 0) {
      this.props.setFormErrors(errors);
    } else {
      // submit new task here
    }
  }
  */
 
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
    console.log(this.props.editing);
    return(
      <div>
        <div>
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">  
              <form className="form-horizontal">
                <div className="group form-group">
                  <label htmlFor="event">Event: </label>
                  <input className="form-control"  id="event" required name="event" type="input" value={this.props.event.eventDetails.event} onChange={this.handleChange}/>
                  <span>{this.props.formErrors.errors.event}</span>
                </div>
                <div className = "group form-group">
                  <label htmlFor="start">Start Time: </label>
                  <input className="form-control" required disabled={this.props.isAllDay.allDay} name="start" type="time" step="1800" value={this.props.event.eventDetails.start} onChange={this.handleChange}/>
                  <span>{this.props.formErrors.errors.start}</span>
                </div>
                <div className = "group form-group">
                  <label htmlFor="end">End Time: </label>
                  <input className="form-control"  required disabled={this.props.isAllDay.allDay} name="end" type="time" step="1800" value={this.props.event.eventDetails.end} onChange={this.handleChange}/>
                  <span>{this.props.formErrors.errors.end}</span>
                </div>
                <div className = "group form-group">
                  <label htmlFor="allDay">All Day</label>
                  <input className="form-check" id="name" name="allDay" type="checkbox" onClick={ () => { (this.props.isAllDay.allDay) ? this.props.setAllDay(false) : this.props.setAllDay(true) } } />
                </div>
                <div className = "buttons">
                  <CancelButton />
                  {(this.props.editing.editEvent) ? <UpdateButton /> : <SaveButton />}
                </div>
                {/*<button type="button" onClick={this.handleSubmit}>Submit</button>*/}
              </form>
            </div>
            <div className="col-md-6 col-sm-12">
                <Task />
            </div>
          </div>
        </div>
      </div>
    );
  }
}