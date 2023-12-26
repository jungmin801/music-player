import React from "react";
import { authService } from "../service/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import googleImg from "../image/google.png";
import styles from "./css/form.module.css";

export function LoginForm({ setUserData, emailValue, passwordValue }) {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authService, provider)
      .then((data) => {
        setUserData(data.user);
        navigate("/player");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleBasicLogin = (event, authService, email, password) => {
    event.preventDefault();
    signInWithEmailAndPassword(authService, email, password)
      .then((data) => {
        setUserData(data.user);
        navigate("/player");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <form
      className={styles.form}
      onSubmit={(event) =>
        handleBasicLogin(event, authService, emailValue, passwordValue)
      }
    >
      <input
        type="text"
        placeholder="example@gmail.com"
        defaultValue={emailValue}
      />
      <input
        type="password"
        placeholder="password"
        defaultValue={passwordValue}
      />
      <button name="basic" className={styles.submitBtn}>
        {"로그인하기"}
      </button>
      <hr />
      <button type="button" name="google" onClick={handleGoogleLogin}>
        <img src={googleImg} alt="" />
        구글 계정으로 로그인
      </button>
    </form>
  );
}

export function SignUpForm() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="example@gmail.com" />
      <input type="password" placeholder="password" />
      <button name="basic" className={styles.submitBtn}>
        {"Music Player 시작하기"}
      </button>
    </form>
  );
}
