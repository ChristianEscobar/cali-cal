import React from 'react';
// import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
}

export default () => (
  <GoogleLogin
    clientId="748496685450-pl3pb60lcibbn2217ck29mag4anjf66k.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />
)

// const Logout = () => (
//   <GoogleLogout
//       buttonText="Logout"
//       onLogoutSuccess={logout}
//     >
//   </GoogleLogout>
// )

// export { Login };