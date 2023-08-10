// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmkE_paeu-MFgV_4iXI9QAk51jysVpwlQ",
  authDomain: "binance--auth.firebaseapp.com",
  projectId: "binance--auth",
  storageBucket: "binance--auth.appspot.com",
  messagingSenderId: "570103795769",
  appId: "1:570103795769:web:46adc28fabf534543abde8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();