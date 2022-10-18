import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBkGEYpUs0aCBITA-RmaVD3VlwNAooVfSQ",
  authDomain: "netflix-clone-hari.firebaseapp.com",
  projectId: "netflix-clone-hari",
  storageBucket: "netflix-clone-hari.appspot.com",
  messagingSenderId: "271110044481",
  appId: "1:271110044481:web:477416f587d241512f3fc0",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
