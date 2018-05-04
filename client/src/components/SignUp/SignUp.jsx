import React from 'react';
import './SignUp.css';
import SignUpButton from './SignUpButton';

const SignUp = props => (
  <div className="sign-up-container">
    <div className="col-xs-12 col-sm-6 sign-up">
      Cali-cal is a calendar app that will easily help you stay organized on the go.
    </div>
    <div className="col-sm-6 signup-btn-container">
      <SignUpButton />
    </div>
  </div>
);

export default SignUp;