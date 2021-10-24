// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-IHlyv6HH7NkMmVeylzEv1LklNUl1GBQ",
  authDomain: "movieku-82e64.firebaseapp.com",
  projectId: "movieku-82e64",
  storageBucket: "movieku-82e64.appspot.com",
  messagingSenderId: "893622281638",
  appId: "1:893622281638:web:46d56264ae01e8f625db67",
  measurementId: "G-T1E6M5BZ2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)