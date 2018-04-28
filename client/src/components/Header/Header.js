import React from 'react';
import './Header.css';
import OauthLogin from '../OauthLogin';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <div className="col-xs-6 col-sm-4">
            <Link to="/">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              Calendar
              </Link>
          </div>
          <div className="col-sm-5" />
          <div className="col-xs-6 col-sm-3">
            <OauthLogin />
          </div>
        </div>
      </div>
    )
  }
};