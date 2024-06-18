// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNJhTTfqHaJUGbdMHR1k96nSFtZ8hBOos",
  authDomain: "fir-react-d11b2.firebaseapp.com",
  projectId: "fir-react-d11b2",
  storageBucket: "fir-react-d11b2.appspot.com",
  messagingSenderId: "859120278649",
  appId: "1:859120278649:web:082ce94113035b294a48a8",
  measurementId: "G-ZC34EK2P83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);