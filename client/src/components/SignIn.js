import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}
 
ReactDOM.render(
  <GoogleLogin
    clientId="558443099548-vptu910jbekmj9m3p80gb6b5lru6s9cs.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);

//Stay logged in isSignedIn={true} attribute will call onSuccess callback on load to keep current user signed in
<GoogleLogin
  clientId="558443099548-vptu910jbekmj9m3p80gb6b5lru6s9cs.apps.googleusercontent.com"
  onSuccess={responseGoogle}
  isSignedIn={true}
/>

//login hook
// import { useGoogleLogin } from 'react-google-login'
 
// const { signIn, loaded } = useGoogleLogin({
//     onSuccess,
//     onAutoLoadFinished,
//     clientId,
//     cookiePolicy,
//     loginHint,
//     hostedDomain,
//     autoLoad,
//     isSignedIn,
//     fetchBasicProfile,
//     redirectUri,
//     discoveryDocs,
//     onFailure,
//     uxMode,
//     scope,
//     accessType,
//     responseType,
//     jsSrc,
//     onRequest,
//     prompt
//   })

  //logout hook
//   import { useGoogleLogout } from 'react-google-login'
 
// const { signOut, loaded } = useGoogleLogout({
//     jsSrc,
//     onFailure,
//     clientId,
//     cookiePolicy,
//     loginHint,
//     hostedDomain,
//     fetchBasicProfile,
//     discoveryDocs,
//     uxMode,
//     redirectUri,
//     scope,
//     accessType,
//     onLogoutSuccess
//   })

import { GoogleLogout } from 'react-google-login';
<GoogleLogout
  clientId="558443099548-vptu910jbekmj9m3p80gb6b5lru6s9cs.apps.googleusercontent.com"
  buttonText="Logout"
  onLogoutSuccess={logout}
>
</GoogleLogout>