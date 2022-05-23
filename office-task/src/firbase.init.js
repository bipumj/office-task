// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBctCtLOYHj7F8EFha8779Otc1QSkme0QQ",
    authDomain: "office-task-3b5b1.firebaseapp.com",
    projectId: "office-task-3b5b1",
    storageBucket: "office-task-3b5b1.appspot.com",
    messagingSenderId: "534566537198",
    appId: "1:534566537198:web:bab33691dd1fb0de5a70ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;