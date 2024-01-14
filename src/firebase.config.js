// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbtFZtT6YLZ3RSGEuNMxis2SFN5vLP-Hk",
  authDomain: "menwellco-phone-auth.firebaseapp.com",
  projectId: "menwellco-phone-auth",
  storageBucket: "menwellco-phone-auth.appspot.com",
  messagingSenderId: "338237732699",
  appId: "1:338237732699:web:86baeca1cf5855fe878c7e",
  measurementId: "G-9T53Q08P2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)