import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";

import styles from "./SharedFolder.module.scss";

const SharedFolder = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faShareSquare} className={styles.icon} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.text}> Shared with: {props.email}</p>
        </div>
      </div>
      <p className={styles.date}>10 oct, 2021</p>
    </div>
  );
};

export default SharedFolder;
