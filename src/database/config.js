import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhhi3eM3G3uiI6I5XQHb8M8CNWC-_jrcU",
  authDomain: "taskjam-9a5d5.firebaseapp.com",
  projectId: "taskjam-9a5d5",
  storageBucket: "taskjam-9a5d5.appspot.com",
  messagingSenderId: "416531692817",
  appId: "1:416531692817:web:05f4ccb5ad8e5aba9ee0b0"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);