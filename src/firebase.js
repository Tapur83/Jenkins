
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxHArVwstF9JcOVGzqLxKKPvzh8F_MlVE",
  authDomain: "task7-9174d.firebaseapp.com",
  projectId: "task7-9174d",
  storageBucket: "task7-9174d.appspot.com",
  messagingSenderId: "945892807837",
  appId: "1:945892807837:web:8fc9d38958694718963074"
  };
  


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);

export default app;