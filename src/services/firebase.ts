import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

  var firebaseConfig = {
    apiKey: "AIzaSyAKtizTyP5yOe0cZJKfNJZpY4NZ084m3Po",
    authDomain: "letmeask-e1d25.firebaseapp.com",
    databaseURL: "https://letmeask-e1d25-default-rtdb.firebaseio.com",
    projectId: "letmeask-e1d25",
    storageBucket: "letmeask-e1d25.appspot.com",
    messagingSenderId: "515704618597",
    appId: "1:515704618597:web:ac059132037744a26f108c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database();