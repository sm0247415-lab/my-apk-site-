
// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyD1Hukuuy4IL85eh7y8NB6A12KsxEd0bx0",
  authDomain: "modapk-27631.firebaseapp.com",
  projectId: "modapk-27631",
  storageBucket: "modapk-27631.firebasestorage.app",
  messagingSenderId: "547402336295",
  appId: "1:547402336295:web:c3041c22297c210b35e602",
  measurementId: "G-CH9T0RQTG4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
