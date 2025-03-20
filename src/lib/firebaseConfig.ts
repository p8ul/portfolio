// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQH3HSRWP638pLX0qf2wFGN4IUIZ4BWeU",
  authDomain: "portfolio-f8a92.firebaseapp.com",
  projectId: "portfolio-f8a92",
  storageBucket: "portfolio-f8a92.firebasestorage.app",
  messagingSenderId: "937292608650",
  appId: "1:937292608650:web:ad5e4d4a2e244058d0e973",
  measurementId: "G-0PW5YJR1B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const timestamp = serverTimestamp;