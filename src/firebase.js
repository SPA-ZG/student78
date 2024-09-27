// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9t4vXUlApfQE4aqM068HOHmq7gVl4DEU",
  authDomain: "pokusaj2-11b50.firebaseapp.com",
  projectId: "pokusaj2-11b50",
  storageBucket: "pokusaj2-11b50.appspot.com",
  messagingSenderId: "1073042598104",
  appId: "1:1073042598104:web:b2378263971afc63200fad",
  measurementId: "G-3L1KGQPSGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db} ;
