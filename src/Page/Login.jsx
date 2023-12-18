import React from "react";
import { app, authService } from "../service/firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/Login.module.css";

const Login = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authService, provider)
      .then((data) => {
        setUserData(data.user);
        navigate("/player");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGitHubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(authService, provider)
      .then((data) => {
        setUserData(data.user);
        navigate("/player");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(userData);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>Music Player</h1>
        <p>원하는 음악 파일을 업로드하여 나만의 재생 목록을 만들어보세요!</p>
      </div>

      <div className={styles.btnContainer}>
        <button type="button" onClick={handleGoogleLogin}>
          구글 로그인으로 시작하기
        </button>
        <button type="button" onClick={handleGitHubLogin}>
          깃허브 로그인으로 시작하기
        </button>
      </div>
    </section>
  );
};

export default Login;
