// src/firebase.js
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDuWTquaeO6w-VHvg-GBTQQn7yh3BIVI5U",
    authDomain: "myreact-374ba.firebaseapp.com",
    projectId: "myreact-374ba",
    storageBucket: "myreact-374ba.firebasestorage.app",
    messagingSenderId: "735876354958",
    appId: "1:735876354958:web:a58896de5ef23365710adf",
    measurementId: "G-LLL3CNM3NX"
  };    

  // Initialize Firebase
const app = initializeApp(firebaseConfig);


// export default app;
export const auth = getAuth(app);
// Initialize Firestore
const db = getFirestore(app);

export { db };
