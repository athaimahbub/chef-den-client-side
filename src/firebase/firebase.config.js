// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZLlXAVpGuvk6fxqZz6C65mUYWgs4O0lE",
  authDomain: "chef-recipe-hunter-5ccaf.firebaseapp.com",
  projectId: "chef-recipe-hunter-5ccaf",
  storageBucket: "chef-recipe-hunter-5ccaf.appspot.com",
  messagingSenderId: "766458470229",
  appId: "1:766458470229:web:82cf516a5471851ab719dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;