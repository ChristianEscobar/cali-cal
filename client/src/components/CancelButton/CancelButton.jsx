import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CancelButton.css';

export default class CancelButton extends Component {
  render() {
    return (
      <Link to="/">
        <button className='cancel-btn btn btn-default' onClick={this.props.turnEventEditOff}>
          <i className="fa fa-close" aria-hidden="true">Cancel</i>
        </button>
      </Link>
    );
  }
}