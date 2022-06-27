// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV5z-b7SAs8s-oZe-tci9LxoVvAs9cPa4",
  authDomain: "ema-john-authentication-25d9d.firebaseapp.com",
  projectId: "ema-john-authentication-25d9d",
  storageBucket: "ema-john-authentication-25d9d.appspot.com",
  messagingSenderId: "399488203471",
  appId: "1:399488203471:web:d38cf9645a79c2fbe895ba",
  measurementId: "G-YM4QKYGBW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
