import React, { Component } from 'react';
import './SaveButton.css';

export default class SaveButton extends Component {
  render() {
    return (
      <button className='save-btn btn btn-default' onClick={(e) => {e.preventDefault(); this.props.saveTask(this.props.newEvent, this.props.isAllDay)}}>
        <i className="fa fa-send-o" aria-hidden="true"> Submit</i>
      </button>
    );
  }
}