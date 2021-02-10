import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDsoD9Cyk_ajnBehEmiJnGe9a42iGo8yS4",
  authDomain: "fir-chat-10380.firebaseapp.com",
  projectId: "fir-chat-10380",
  storageBucket: "fir-chat-10380.appspot.com",
  messagingSenderId: "111235902142",
  appId: "1:111235902142:web:06d55e8c0a715a1690ccef",
});

export const Context = createContext<any | null>(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{ auth, firestore, firebase }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
