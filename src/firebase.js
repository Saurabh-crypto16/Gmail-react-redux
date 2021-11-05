// v9 compat packages are API compatible with v8 code
//import firebase from "firebase/compat/app";
import firebase from "firebase";
//import "firebase/compat/auth";
//import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlzbtW1BA_Mh8o0oDYnbw-neTI43Quw-k",
  authDomain: "react-redux-b044f.firebaseapp.com",
  projectId: "react-redux-b044f",
  storageBucket: "react-redux-b044f.appspot.com",
  messagingSenderId: "38432577937",
  appId: "1:38432577937:web:c8544204dd64173ff32230",
  measurementId: "G-GGW5HB8R6Y",
};

//initializing the firebase app
//it connects the frontend to backend at firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//getting the database in db
/*
Cloud FireStore is a noSQL database
Each collection has many docs(indivisual components) and each doc has its own collection
*/
const db = firebaseApp.firestore();

//getting auth
const auth = firebase.auth();

//getting google auth(popup login option)
const provider = new firebase.auth.GoogleAuthProvider();

//explicit exports for having multiple named exports per file
export { auth, provider, db };
