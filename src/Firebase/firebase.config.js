// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaNUHJtk3zYldV9qk32E7hgX0_xnNsyv0",
  authDomain: "automotive-brand-585bc.firebaseapp.com",
  projectId: "automotive-brand-585bc",
  storageBucket: "automotive-brand-585bc.appspot.com",
  messagingSenderId: "100851201909",
  appId: "1:100851201909:web:dd5addc24876301f43853c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;