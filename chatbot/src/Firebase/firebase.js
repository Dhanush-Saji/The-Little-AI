// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-KY6a4bQ7Q9kkxrSaDTsPi5Tys82zHl8",
  authDomain: "the-little-ai.firebaseapp.com",
  projectId: "the-little-ai",
  storageBucket: "the-little-ai.appspot.com",
  messagingSenderId: "1085572015071",
  appId: "1:1085572015071:web:0af2c37f2229bddf8e5a6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export {auth,provider};