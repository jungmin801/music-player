import React from "react";
import { authService } from "../service/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/Login.module.css";
import noteImg from "../image/note.png";
import { LoginForm, SignUpForm } from "../component/Form";

const Login = () => {
  const [userData, setUserData] = useState(null);
  const [emailValue, setEmailValue] = useState("test@gmail.com");
  const [passwordValue, setPasswordValue] = useState("test1234");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

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
          <div className={styles.menuContainer}>
            <h2>
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                style={isLogin ? { color: "black" } : { color: "grey" }}
              >
                로그인
              </button>
            </h2>
            <h2>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                style={!isLogin ? { color: "black" } : { color: "grey" }}
              >
                회원가입
              </button>
            </h2>
          </div>
          {isLogin ? (
            <LoginForm
              setUserData={setUserData}
              emailValue={emailValue}
              passwordValue={passwordValue}
            />
          ) : (
            <SignUpForm />
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
