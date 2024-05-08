import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvQTRHkprFg9e2eDDYDy3vEiaBHAhDCEA",
  authDomain: "comision-54095-629b1.firebaseapp.com",
  projectId: "comision-54095-629b1",
  storageBucket: "comision-54095-629b1.appspot.com",
  messagingSenderId: "857214410523",
  appId: "1:857214410523:web:a11e3fbacc7360d5507dbe"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )