import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKsmwPmORHnBJ9tzbkCJm_r3PTyMg-PBI",
  authDomain: "webreact-345ae.firebaseapp.com",
  projectId: "webreact-345ae",
  storageBucket: "webreact-345ae.appspot.com",
  messagingSenderId: "715331743968",
  appId: "1:715331743968:web:684716878b77728892a085",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
