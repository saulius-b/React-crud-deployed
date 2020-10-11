import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDi8MT2c_MAfCsmJW5RcrCZ2iVLpS6Fv0E",
  authDomain: "final-todo-c8402.firebaseapp.com",
  databaseURL: "https://final-todo-c8402.firebaseio.com",
  projectId: "final-todo-c8402",
  storageBucket: "final-todo-c8402.appspot.com",
  messagingSenderId: "737002817299",
  appId: "1:737002817299:web:96b3c8413e9fe7ec70fce6"
};

firebase.initializeApp(firebaseConfig);

export default firebase