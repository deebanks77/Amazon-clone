// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_mDgPWANIgX2uELUlJ-L1IdetU7fVXVs",
  authDomain: "clone-5a890.firebaseapp.com",
  projectId: "clone-5a890",
  storageBucket: "clone-5a890.appspot.com",
  messagingSenderId: "525036329012",
  appId: "1:525036329012:web:acb733696be8a7e86b5261",
  measurementId: "G-YL91LCKMYL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// For Realtime Database
// const db = getDatabase(firebaseApp);

// For Firestore Database
const firestoreDB = getFirestore(app);

// const auth = firebase.auth();
const auth = getAuth(app);

// For google Authentication
const provider = new GoogleAuthProvider();

export { provider, auth };
export default app;
