import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Document.module.scss";

const Document = (props) => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faFolderPlus} className={styles.icon} />
      <p className={styles.title}> {props.title}</p>
      <p className={styles.text}>created 12 Oct, 2021</p>
    </div>
  );
};

export default Document;
