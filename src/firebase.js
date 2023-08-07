// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu4pwXaA1dyyMREBcr-hxf9NYXpuT5yUc",
  authDomain: "anukalp-protfolio.firebaseapp.com",
  projectId: "anukalp-protfolio",
  storageBucket: "anukalp-protfolio.appspot.com",
  messagingSenderId: "969049493282",
  appId: "1:969049493282:web:5cf43b2a0e872c90735f7b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();


