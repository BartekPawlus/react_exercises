// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASmcMx0hAKs_7oqApejvhzgxIaTfC13Lo",
  authDomain: "reactprojectfirebase-1f6f3.firebaseapp.com",
  projectId: "reactprojectfirebase-1f6f3",
  storageBucket: "reactprojectfirebase-1f6f3.appspot.com",
  messagingSenderId: "394503418828",
  appId: "1:394503418828:web:d518098506c19b48dda369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

