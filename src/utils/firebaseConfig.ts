// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCusyjOgu_WOIfbPTZQimM98oEL8f6dFOE",
  authDomain: "reactnative-trip-planner-2024.firebaseapp.com",
  projectId: "reactnative-trip-planner-2024",
  storageBucket: "reactnative-trip-planner-2024.appspot.com",
  messagingSenderId: "9174085353",
  appId: "1:9174085353:web:c96de8a897493cfb500a78",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
