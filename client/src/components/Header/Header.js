import React from 'react';
import './Header.css';
// import OauthLogin from '../OauthLogin';
// import OauthLogout from '../OauthLogout';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    
    return (
      <header>
        <div className="col-xs-6 col-sm-4 calendar-logo">
          <Link to="/">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            Calendar
            </Link>
          </div>
        <div className="col-sm-5" />
        <div className="col-xs-6 col-sm-3 login fixed-bottom">
          {/* <OauthLogin /> */}
          {/* <br /> <br />
          <OauthLogout /> */}
        </div>
      </header>
    )
  };
};