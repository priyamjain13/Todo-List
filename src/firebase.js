// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARjnSzwJzw_oHPAXlaSmNcJuKGN1rknWw",
  authDomain: "todo-list-4cbc2.firebaseapp.com",
  projectId: "todo-list-4cbc2",
  storageBucket: "todo-list-4cbc2.appspot.com",
  messagingSenderId: "658410166513",
  appId: "1:658410166513:web:8649742975b64422fa7150",
  measurementId: "G-D70Z06ZV0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)