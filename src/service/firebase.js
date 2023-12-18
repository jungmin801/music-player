import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY40ImWYkekl6zZaOBVlWJY3e9mYtC0Pc",
  authDomain: "music-player-43864.firebaseapp.com",
  projectId: "music-player-43864",
  storageBucket: "music-player-43864.appspot.com",
  messagingSenderId: "444225018387",
  appId: "1:444225018387:web:0cf10f63a7f13636d5bde6",
};

export const app = initializeApp(firebaseConfig);
export const authService = getAuth();
