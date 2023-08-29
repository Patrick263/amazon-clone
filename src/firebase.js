
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXFHjftge8Q_579974yWsoobLaFvmhd4s",
  authDomain: "challenge-1f065.firebaseapp.com",
  projectId: "challenge-1f065",
  storageBucket: "challenge-1f065.appspot.com",
  messagingSenderId: "250343109598",
  appId: "1:250343109598:web:98d05fbd8d72545fc8234f",
  measurementId: "G-M3NG8X51SW"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

createUserWithEmailAndPassword(auth)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  export {db, auth} ;