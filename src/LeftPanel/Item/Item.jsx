import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Item.module.scss";

const Item = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.itemBg}>
        <FontAwesomeIcon icon={props.icon} className={styles.icon} />
      </div>
      <p className={styles.itemTitle}>{props.title} </p>
    </div>
  );
};

export default Item;
