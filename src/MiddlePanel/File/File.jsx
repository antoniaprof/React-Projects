import React from "react";
import styles from "./File.module.scss";

const File = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <img className={styles.image} src={props.image} alt="up" />
        <div>
          <p className={styles.uploadTitle}>{props.title}</p>
          <p className={styles.uploadDate}>{props.date}</p>
        </div>
      </div>
      <div className={styles.size}>{props.size}</div>
    </div>
  );
};

export default File;
