// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh0go58lHLFh90-xHfTz4hEZe7DdJV25M",
  authDomain: "mi-app-react-11566.firebaseapp.com",
  projectId: "mi-app-react-11566",
  storageBucket: "mi-app-react-11566.appspot.com",
  messagingSenderId: "239131187229",
  appId: "1:239131187229:web:880df0a2ec8b52e56f8ef4",
  measurementId: "G-N9TQ0S7M06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);