import { initializeApp } from "firebase/app";
import { getAuth ,onAuthStateChanged} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'




const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "olxapp-f2f7e.firebaseapp.com",
    projectId: "olxapp-f2f7e",
    storageBucket: "olxapp-f2f7e.appspot.com",
    messagingSenderId: "1019141328639",
    appId: "1:1019141328639:web:e57e2f1ac50d900f18c6ca",
    measurementId: "G-QR7EWYK35L"
  };

  // Initialize Firebase 
  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)
