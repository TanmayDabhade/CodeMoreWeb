// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCUbyxG9FN73GlKoSGTnf1g1JhAIH8W6Ds",
//   authDomain: "codemoreweb.firebaseapp.com",
//   projectId: "codemoreweb",
//   storageBucket: "codemoreweb.appspot.com",
//   messagingSenderId: "490972167984",
//   appId: "1:490972167984:web:43f0404253841a6397d2f5",
//   measurementId: "G-V235CHN7Z4"
// };

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
