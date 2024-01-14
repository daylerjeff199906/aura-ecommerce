"use client";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQBPXI8n99m8RyTj7lETg45ZuXRlc1tss",
  authDomain: "aurora-ecommerce.firebaseapp.com",
  projectId: "aurora-ecommerce",
  storageBucket: "aurora-ecommerce.appspot.com",
  messagingSenderId: "807290273802",
  appId: "1:807290273802:web:a4dab014565aee5a01dff3",
  measurementId: "G-H6P06QXC0K",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
