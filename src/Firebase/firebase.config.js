// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvjoYUM9hgfhyNnAQaiNlyLPzxKsr7JVA",
    authDomain: "playnest-project.firebaseapp.com",
    projectId: "playnest-project",
    storageBucket: "playnest-project.firebasestorage.app",
    messagingSenderId: "1016713749303",
    appId: "1:1016713749303:web:9f01a7258f171aa5a570b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;