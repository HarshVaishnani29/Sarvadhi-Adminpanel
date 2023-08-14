import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADkXTJ7v-ux6Ea7WHqtFZ2KFs9_LQtE_A",
  authDomain: "final-project-2ba40.firebaseapp.com",
  projectId: "final-project-2ba40",
  storageBucket: "final-project-2ba40.appspot.com",
  messagingSenderId: "262807714166",
  appId: "1:262807714166:web:ff9c788d6401c3f0e92257"
};

// Initialize Firebase
const MyFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(MyFirebase);
export const db = getFirestore(MyFirebase)

