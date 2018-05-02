import React, { Component } from 'react';
import './SaveButton.css';
import { formValidation } from '../../utils/helper';

export default class SaveButton extends Component {
  render() {
    return (
      <button className='save-btn btn btn-default' 
        onClick={(e) => {
          e.preventDefault(); 

          let errors = formValidation(this.props.newEvent.eventDetails, this.props.isAllDay);

          if(Object.keys(errors).length > 0) {
            this.props.setFormErrors(errors);
          } else {
            this.props.saveTask(this.props.newEvent);
          }
        }}>
        <i className="fa fa-send-o" aria-hidden="true"> Submit</i>
      </button>
    );
  }
}