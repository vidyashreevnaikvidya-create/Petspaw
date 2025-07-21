// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeP-QR66-nUjcQ9DWcAJ9wdMDNPgb1zCg",
  authDomain: "petspaw-2a9c9.firebaseapp.com",
  projectId: "petspaw-2a9c9",
  storageBucket: "petspaw-2a9c9.firebasestorage.app",
  messagingSenderId: "646036519569",
  appId: "1:646036519569:web:68a69e1aa31f4a93b05d30",
  measurementId: "G-SWM8JH96SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
export * from "firebase/auth"; // Export auth functions for use in other components
import { getAuth } from "firebase/auth";
export const auth = getAuth(app); // Initialize Firebase Authentication and export it
export default app; // Export the initialized app for use in other parts of the application
// Note: Ensure that you have the Firebase SDK installed in your project