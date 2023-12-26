import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUqqz4onuSce1opiLCxoJ2V_BAMSAkCbQ",
  authDomain: "music-player-ca0b4.firebaseapp.com",
  projectId: "music-player-ca0b4",
  storageBucket: "music-player-ca0b4.appspot.com",
  messagingSenderId: "501256731627",
  appId: "1:501256731627:web:1fcaab40c492201ddf77ae",
};

export const app = initializeApp(firebaseConfig);
export const authService = getAuth();
export const storage = getStorage(app);
export const db = getFirestore(app);
