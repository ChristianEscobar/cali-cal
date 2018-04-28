import React from 'react';
// import ReactDOM from 'react-dom';
import { GoogleLogout } from 'react-google-login';
 
 
const logout = (response) => {
  console.log("logged out");
}

export default () => (
  <GoogleLogout
      buttonText="Logout"
      // onClick={GoogleAuth.signOut()}
      onLogoutSuccess={logout}
  />
)