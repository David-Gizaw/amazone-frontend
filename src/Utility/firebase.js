import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPX8kc_daAGrFHSNpOgPGUXNadnV2eFjM",
  authDomain: "clone-417e7.firebaseapp.com",
  projectId: "clone-417e7",
  storageBucket: "clone-417e7.appspot.com",
  messagingSenderId: "737989584369",
  appId: "1:737989584369:web:969c10f243877474a35050",
  measurementId: "G-V7EE7MMFEZ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
