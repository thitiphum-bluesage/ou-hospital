// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8YlXYv7PDF1tPZ-C_lDKf4m0175ar5-k",
  authDomain: "oujob-5c5ad.firebaseapp.com",
  databaseURL: "https://oujob-5c5ad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "oujob-5c5ad",
  storageBucket: "oujob-5c5ad.appspot.com",
  messagingSenderId: "132504882805",
  appId: "1:132504882805:web:33cce795db4a4e2817323c",
  measurementId: "G-FQ7FQ1CTGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db1 = getFirestore(app)
export const db2 = getDatabase(app);




