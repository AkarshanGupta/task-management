import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";
const firebaseConfig = {
  apiKey: "AIzaSyDXNciFujojschU4peWbwTkaeQOmJJI7MQ",
  authDomain: "task-2cd99.firebaseapp.com",
  projectId: "task-2cd99",
  storageBucket: "task-2cd99.appspot.com",
  messagingSenderId: "760865090690",
  appId: "1:760865090690:web:1ed079c28211e4612a189b"
};
firebase.initializeApp(firebaseConfig);

export const ui = new firebaseui.auth.AuthUI(firebase.auth());
export { firebase };
