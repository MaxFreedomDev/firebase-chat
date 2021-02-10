import React, { useContext } from "react";
import styles from "./login.module.css";
import { Context } from "../../index";
import firebase from "firebase/app";

const Login: React.FC = () => {
  const { auth } = useContext(Context);
  const login = async () => {
    const provider = await new firebase.auth.GoogleAuthProvider();
    const { user } = auth.signInWithPopup(provider);
  };

  return (
    <div
      className={styles.container}
      style={{ height: window.innerHeight - 50 }}
    >
      <div className={styles.content}>
        <div className={styles.contentBox}>
          <button className={styles.btn} onClick={login}>
            <span className={styles.btnText}>Войти с помощью Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
