// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from  'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDENVQbkEnXMtA6cxkDAwGSyQTGejCLDw",
  authDomain: "ecommerce1-792a7.firebaseapp.com",
  projectId: "ecommerce1-792a7",
  storageBucket: "ecommerce1-792a7.firebasestorage.app",
  messagingSenderId: "297595172435",
  appId: "1:297595172435:web:775fec0bc3fa5e06a078a6",
  measurementId: "G-971NLWED6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app)
const analytics = getAnalytics(app);