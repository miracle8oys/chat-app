// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMVSC-_jFKY5fQnxWq1fkUq9HvEvl8nag",
    authDomain: "balinese-chat.firebaseapp.com",
    projectId: "balinese-chat",
    storageBucket: "balinese-chat.appspot.com",
    messagingSenderId: "434585720888",
    appId: "1:434585720888:web:441b59672223dbbea7aecd"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
}

const db = getFirestore(app);

const storage = getStorage(app);

export {auth, db, signInWithGoogle, storage}