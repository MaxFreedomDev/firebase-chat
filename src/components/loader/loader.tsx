import React from "react";
import styles from "./loader.module.css";
const Loader: React.FC = () => {
  return (
    <div
      className={styles.spinnerContainer}
      style={{ height: window.innerHeight - 50 }}
    >
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
