import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7C5XaYe21oifwnyjlfqYfxezVaUNRVgI",
    authDomain: "ecommerce-coder-13ee4.firebaseapp.com",
    projectId: "ecommerce-coder-13ee4",
    storageBucket: "ecommerce-coder-13ee4.appspot.com",
    messagingSenderId: "36328964385",
    appId: "1:36328964385:web:dd768876af1f21565bfe60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);