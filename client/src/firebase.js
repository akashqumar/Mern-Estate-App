// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8a47c.firebaseapp.com",
  projectId: "mern-estate-8a47c",
  storageBucket: "mern-estate-8a47c.appspot.com",
  messagingSenderId: "571033079547",
  appId: "1:571033079547:web:5950cc4691de5f05686a5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
