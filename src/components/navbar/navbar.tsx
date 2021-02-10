import React, { useContext } from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/const";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar: React.FC = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <label>Dark</label>
        <label>chat</label>
      </div>
      <div className={styles.login}>
        {user ? (
          <button onClick={() => auth.signOut()}>Выйти</button>
        ) : (
          <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
