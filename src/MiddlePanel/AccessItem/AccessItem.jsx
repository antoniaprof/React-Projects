import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccessItem.module.scss";

const AccessItem = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.image} alt={props.alt}></img>
      <div className={styles.imageText}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={props.icon}
          style={{ color: props.color }}
        />
        <div>{props.text}</div>
      </div>
    </div>
  );
};

export default AccessItem;
