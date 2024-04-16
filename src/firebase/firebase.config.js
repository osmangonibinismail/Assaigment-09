// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPK1X1tWp850VwKzUXRS94XyDU4J9_vKM",
  authDomain: "assaigment-09.firebaseapp.com",
  projectId: "assaigment-09",
  storageBucket: "assaigment-09.appspot.com",
  messagingSenderId: "562816274856",
  appId: "1:562816274856:web:d47695558d5d3b26500d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;