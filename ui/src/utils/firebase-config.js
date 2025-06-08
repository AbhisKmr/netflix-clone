import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwYcVz2CfWuSfDorPvo2s5br5nmcMXPoo",
  authDomain: "super-knowledge-8eeb9.firebaseapp.com",
  databaseURL: "https://super-knowledge-8eeb9.firebaseio.com",
  projectId: "super-knowledge-8eeb9",
  storageBucket: "super-knowledge-8eeb9.firebasestorage.app",
  messagingSenderId: "209033797336",
  appId: "1:209033797336:web:c8809ed5cdb3b3494901ad",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
