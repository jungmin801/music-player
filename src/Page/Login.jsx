import React from "react";
import { app, authService } from "../service/firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState(null);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authService, provider)
      .then((data) => {
        setUserData(data.user);
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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(userData);
  return (
    <div>
      <button type="button" onClick={handleGoogleLogin}>
        구글 로그인 하기
      </button>
      <button type="button" onClick={handleGitHubLogin}>
        깃허브 로그인하기
      </button>
      <p>{userData?.displayName}</p>
    </div>
  );
};

export default Login;
