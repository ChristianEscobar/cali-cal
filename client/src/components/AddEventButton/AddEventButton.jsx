import React, { Component } from 'react';

export default class AddEventButton extends Component{
  render() {
    return(
        <button className='add-btn'>
            <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
    );
  }
}