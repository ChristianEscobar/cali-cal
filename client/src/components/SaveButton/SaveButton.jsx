import React, { Component } from 'react';
import './SaveButton.css';

export default class SaveButton extends Component {
  render() {
    return (
      <button className='save-btn btn btn-default' 
        onClick={(e) => {
          console.log("from SaveButton", this.props.newEvent.eventDetails);

          e.preventDefault(); 

          let errors = 

          if(Object.keys(errors).length > 0) {
            this.props.setFormErrors(errors);
          } else {
            this.props.saveTask(this.props.newEvent, this.props.isAllDay);
          }
        }}>
        <i className="fa fa-send-o" aria-hidden="true"> Submit</i>
      </button>
    );
  }
}