import React, { Component } from 'react';
import './AddEventButton.css';

export default class AddEventButton extends Component{
  render() {
    return(
        <button className='add-btn' onClick={this.props.addEvent}>
            <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
    );
  }
}