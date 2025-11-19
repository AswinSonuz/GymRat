// firebase.js
import { initializeApp } from 
"https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth } from 
"https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { getFirestore } from 
"https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdMo2oLKlDXvr_eBTcw2remTKSMoZ-ZJk",
  authDomain: "gymbro-604a5.firebaseapp.com",
  projectId: "gymbro-604a5",
  storageBucket: "gymbro-604a5.firebasestorage.app",
  messagingSenderId: "871129538676",
  appId: "1:871129538676:web:59b184b0b4525a8ea5b121"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
