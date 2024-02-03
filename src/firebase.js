// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpiCvPYPGe32q8WLo05nROG9QAgyH-Tvo",
  authDomain: "reels-d32cd.firebaseapp.com",
  projectId: "reels-d32cd",
  storageBucket: "reels-d32cd.appspot.com",
  messagingSenderId: "863339967829",
  appId: "1:863339967829:web:aef4423e9af060deac2bdc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
 const firestore=firebase.firestore();
 export const database={
   users:firestore.collection('users'),
   posts:firestore.collection('posts'),
   comments:firestore.collection('comments'),
  getTimeStamp : firebase.firestore.FieldValue.serverTimestamp
 }
 export const storage=firebase.storage();


