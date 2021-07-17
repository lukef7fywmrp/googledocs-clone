import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnYQQw6vD55CzFIoXAQT15SHGE4S4dn7k",
  authDomain: "docs-42aa7.firebaseapp.com",
  projectId: "docs-42aa7",
  storageBucket: "docs-42aa7.appspot.com",
  messagingSenderId: "952314956133",
  appId: "1:952314956133:web:37cd939a9d3c8813b8398c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
