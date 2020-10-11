import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'



function SignIn() {

  let firebaseui = require('firebaseui');
  let ui = new firebaseui.auth.AuthUI(firebase.auth());  

  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  });

  let uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        return true;
      },
      uiShown: function () {
        document.getElementById('loader').style.display = 'none';
      }
    },
    signInFlow: 'popup',
    signInSuccessUrl: 'https://saulius-b.github.io/React-crud-deployed/todo',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  };

  ui.start('#firebaseui-auth-container', uiConfig);  

  return (
    <div>
      <h4>Please sign or create a new account with email to access the app</h4>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">
        <div className="spinner"></div>
      </div>
    </div>
  )
}

export default SignIn