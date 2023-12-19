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
import noteImg from "../image/note.png";
import googleImg from "../image/google.png";
import githubImg from "../image/github.png";

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

  const handleLogin = (event) => {
    if (event.target.name === "google") {
      handleGoogleLogin();
    } else if (event.target.name === "github") {
      handleGitHubLogin();
    }
  };

  console.log(userData);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img src={noteImg} alt="로고" />
        <h1>Music Player</h1>
        <p>원하는 음악 파일을 업로드하여 나만의 재생 목록을 만들어보세요!</p>
      </div>

      <div className={styles.btnContainer} onClick={handleLogin}>
        <div>
          <button type="button" name="google">
            <img src={googleImg} alt="" />
            구글 계정으로 로그인
          </button>
        </div>

        <div>
          <button type="button" name="github">
            <img src={githubImg} alt="" />
            깃허브 계정으로 로그인
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
