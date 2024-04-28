import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMCEGIdYx8pg3XfyakHKk-p0kJabYo_Ck",
  authDomain: "myecom-36c76.firebaseapp.com",
  projectId: "myecom-36c76",
  storageBucket: "myecom-36c76.appspot.com",
  messagingSenderId: "351483701686",
  appId: "1:351483701686:web:d764b6776b614b4967f917",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
