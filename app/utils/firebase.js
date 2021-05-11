import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwi0pmOcSN3gOHZIhXMWVJ1nAQwUwkr9w",
  authDomain: "indigeo-a0fd7.firebaseapp.com",
  databaseURL: "https://indigeo-a0fd7.firebaseio.com",
  projectId: "indigeo-a0fd7",
  storageBucket: "indigeo-a0fd7.appspot.com",
  messagingSenderId: "944244728337",
  appId: "1:944244728337:ios:add4a2518b78290e0107b0",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export default { firebase };
