// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "todo-app-42eac.firebaseapp.com",
  projectId: "todo-app-42eac",
  storageBucket: "todo-app-42eac.appspot.com",
  messagingSenderId: "449325975846",
  appId: "1:449325975846:web:2f2ed19a776ffd3238d9e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
