import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <a href="#">
            {/* <i class="far fa-calendar"></i> */}
            This is the header
          </a>
        </div>
      </div>
    )
  }
};