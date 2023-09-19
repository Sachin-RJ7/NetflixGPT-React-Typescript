import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtWiWLrZRtzRmlsxFZ0lMZQX3cPc4NH-c",
  authDomain: "popcorngpt-5daf9.firebaseapp.com",
  projectId: "popcorngpt-5daf9",
  storageBucket: "popcorngpt-5daf9.appspot.com",
  messagingSenderId: "1064251310588",
  appId: "1:1064251310588:web:2e5937148c018a7febb279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();