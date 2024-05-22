// Import the functions you need from the SDKs you need
import { getApp,getAuth } from "firebase/auth";
import { getApp,getApps,initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKP82eYMJqzrc82lO1cuqhUwWv2PMlvxo",
  authDomain: "otpmbi.firebaseapp.com",
  projectId: "otpmbi",
  storageBucket: "otpmbi.appspot.com",
  messagingSenderId: "486757533195",
  appId: "1:486757533195:web:cb337106fa8edb344ca90e"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp():initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};