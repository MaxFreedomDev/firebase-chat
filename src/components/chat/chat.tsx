import React, { useContext, useState } from "react";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./chat.module.css";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "../loader/loader";

const Chat: React.FC = () => {
  const { auth, firestore, firebase } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );
  const sendMessage = () => {
    firestore
      .collection("messages")
      .add({
        uid: user.uid,
        displayName: user.displayName,
        photoUrl: user.photoURL,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {});
    setValue("");
  };

  return (
    <div
      className={styles.container}
      style={{ height: window.innerHeight - 50 }}
    >
      <div className={styles.content}>
        {!loading ? (
          messages?.map((message: any) => (
            <div
              className={styles.containerMessage}
              key={message.uid}
              style={{
                border:
                  user.uid === message.uid
                    ? "2px solid #FBDA31"
                    : "2px solid #7AA4C2 ",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
              }}
            >
              <div className={styles.containerMessageBubble}>
                <div className={styles.messageHeader}>
                  <div
                    style={{ backgroundImage: `url(${message.photoUrl})` }}
                    className={styles.avatar}
                  />
                  <span className={styles.messageOwner}>
                    {message.displayName}
                  </span>
                </div>
                <p className={styles.messageContent}>{message.text}</p>
              </div>
            </div>
          ))
        ) : (
          <Loader height={"auto"} />
        )}
      </div>
      <div className={styles.inputContainer}>
        <textarea
          cols={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default Chat;
