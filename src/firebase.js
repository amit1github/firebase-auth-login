import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM2G0QxDd2uuiXU_cx1VzdCdbVpige1E4",
  authDomain: "fir-auth-testing-8a89f.firebaseapp.com",
  projectId: "fir-auth-testing-8a89f",
  storageBucket: "fir-auth-testing-8a89f.appspot.com",
  messagingSenderId: "277432513796",
  appId: "1:277432513796:web:5d5ab1576c0a2f3ada8c51",
  measurementId: "G-T9PG3MHBQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
