/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe407Rm-ISvcbY2uNTqmp3ltGDy27Hof0",
  authDomain: "crossword-e3636.firebaseapp.com",
  projectId: "crossword-e3636",
  storageBucket: "crossword-e3636.firebasestorage.app",
  messagingSenderId: "1047372165254",
  appId: "1:1047372165254:web:cc902c00f8be34ea562107",
  measurementId: "G-K854KDFZ1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);