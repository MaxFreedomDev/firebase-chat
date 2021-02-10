import React from "react";
import styles from "./loader.module.css";

interface Props {
  height: string;
}

const Loader: React.FC<Props> = ({ height }) => {
  return (
    <div
      className={styles.spinnerContainer}
      style={{ height: height === "auto" ? "60vh" : window.innerHeight - 50 }}
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
