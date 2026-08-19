import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYCPdB1ORgP6u4PLbu2q_BzBAUziiWvkQ",
  authDomain: "bwera-tours.firebaseapp.com",
  databaseURL: "https://bwera-tours-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bwera-tours",
  storageBucket: "bwera-tours.appspot.com",
  messagingSenderId: "357240774443",
  appId: "1:357240774443:web:d41cb3943a5147dc942f6e",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;