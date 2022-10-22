// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApNhArkoJ7-8pe0GIM8_AOXigtXAGC50o",
  authDomain: "thestormlightapi.firebaseapp.com",
  projectId: "thestormlightapi",
  storageBucket: "thestormlightapi.appspot.com",
  messagingSenderId: "253690695101",
  appId: "1:253690695101:web:b0da24403499af8ea756d4",
  measurementId: "G-WYFMFV0JC4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = app.database();

export default app;
