// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo-AzGoDRjPVa6vtl9xUWw7v-wk7rj35M",
  authDomain: "codemore-4f7ef.firebaseapp.com",
  projectId: "codemore-4f7ef",
  storageBucket: "codemore-4f7ef.appspot.com",
  messagingSenderId: "554354481859",
  appId: "1:554354481859:web:a4548690896247b6ed6076",
  measurementId: "G-LWXQWNWXBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);