// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCp9ZGwnWZ2w1A98xdkIRVNzXDFv1dI2jY",
  // authDomain: "toy-market-auth.firebaseapp.com",
  // projectId: "toy-market-auth",
  // storageBucket: "toy-market-auth.appspot.com",
  // messagingSenderId: "1091080667811",
  // appId: "1:1091080667811:web:34964beb170faeb5073516"

  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJETID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID

  


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app