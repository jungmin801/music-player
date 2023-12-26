import React from "react";
import { app, authService } from "../service/firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/Login.module.css";
import noteImg from "../image/note.png";
import googleImg from "../image/google.png";

const Login = () => {
  const [userData, setUserData] = useState(null);
  const [emailValue, setEmailValue] = useState("test@gmail.com");
  const [passwordValue, setPasswordValue] = useState("test1234");
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

  const handleBasicLogin = (authService, email, password) => {
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
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <img src={noteImg} alt="로고" />
          <h1>Music Player</h1>
          <p>
            원하는 음악 파일을 업로드하여
            <span>나만의 재생 목록을 만들어보세요!</span>
          </p>
        </div>

        <div className={styles.loginContainer}>
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
          <button
            type="button"
            name="basic"
            onClick={() =>
              handleBasicLogin(authService, emailValue, passwordValue)
            }
          >
            {"로그인하기"}
          </button>
          <hr></hr>
          <button type="button" name="google" onClick={handleGoogleLogin}>
            <img src={googleImg} alt="" />
            구글 계정으로 로그인
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
