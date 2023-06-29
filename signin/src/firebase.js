// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

  


const firebaseConfig = {
  apiKey: "AIzaSyCmW2XO3hjQI1l8g6bTZdSHViw_6cygWTY",
  authDomain: "signin-750fb.firebaseapp.com",
  projectId: "signin-750fb",
  storageBucket: "signin-750fb.appspot.com",
  messagingSenderId: "856955101069",
  appId: "1:856955101069:web:09f90b140172311702a7c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);