import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPqXWTJT9AOnHrnvuzwwICcJDoftAs0Wc",
  authDomain: "clone-ac82c.firebaseapp.com",

  projectId: "clone-ac82c",
  storageBucket: "clone-ac82c.appspot.com",
  messagingSenderId: "104986568322",
  appId: "1:104986568322:web:5bf95fba95ed847fc7769b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
