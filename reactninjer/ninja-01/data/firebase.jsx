// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfLJpnMGsXLXmXgRFHspBnls1qEZIY9VA",
    authDomain: "data-93a94.firebaseapp.com",
    projectId: "data-93a94",
    storageBucket: "data-93a94.firebasestorage.app",
    messagingSenderId: "150131332950",
    appId: "1:150131332950:web:1ad2f01c4798c9e72fa8f7",
    measurementId: "G-MX0GL8RGLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);