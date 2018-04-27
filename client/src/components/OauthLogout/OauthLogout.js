import React from 'react';
// import ReactDOM from 'react-dom';
import { GoogleLogout } from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
}

export default () => (
  <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
  </GoogleLogout>
)