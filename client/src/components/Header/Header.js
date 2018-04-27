import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <a href="">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            Calendar
          </a>
        </div>
      </div>
    )
  }
};