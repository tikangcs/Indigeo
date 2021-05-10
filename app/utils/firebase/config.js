import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAwi0pmOcSN3gOHZIhXMWVJ1nAQwUwkr9w",
  authDomain: "indigeo-a0fd7.firebaseapp.com",
  databaseURL: "https://indigeo-a0fd7.firebaseio.com",
  projectId: "indigeo-a0fd7",
  storageBucket: "indigeo-a0fd7.appspot.com",
  // messagingSenderId: "sender-id",
  appId: "1:944244728337:ios:add4a2518b78290e0107b0",
  // measurementId: "G-measurement-id",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
