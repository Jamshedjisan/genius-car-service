// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYzIeNbsI1P8ukG7bsSBm7qbZPXeUbFJU",
  authDomain: "genius-car-services-a3c39.firebaseapp.com",
  projectId: "genius-car-services-a3c39",
  storageBucket: "genius-car-services-a3c39.appspot.com",
  messagingSenderId: "533104489064",
  appId: "1:533104489064:web:c80fbc294f1014643ec1dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
