// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfT7UIqf57eP8PKVcxOg_o6hhrDNFSIxM",
  authDomain: "otpproject-c3524.firebaseapp.com",
  projectId: "otpproject-c3524",
  storageBucket: "otpproject-c3524.appspot.com",
  messagingSenderId: "921680739433",
  appId: "1:921680739433:web:f721ef3bc38962da4376f8",
  measurementId: "G-VVRY0V0T0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);