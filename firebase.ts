import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBy10WIvEidwOMu9tBILpmCyWfthJRJ_XQ",
  authDomain: "tuzukuru.firebaseapp.com",
  projectId: "tuzukuru",
  storageBucket: "tuzukuru.appspot.com",
  messagingSenderId: "968933996809",
  appId: "1:968933996809:web:1e849553906148fe6dfbd8",
  measurementId: "G-17Q0KPXJYV"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;