import React from 'react';
import './SignUpButton.css';
import { Link } from 'react-router-dom';

export default class SignUpButton extends React.Component{
  render(){
    return(
      <Link to="/auth/google">
        <button className='signup-btn'>
          START NOW FOR FREE!
        </button>
      </Link>
    );
  }
}