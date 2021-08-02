import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import styles from "./Folder.module.scss";

const Folder = (props) => {
  return (
    <div
      className={styles.folder}
      style={{
        backgroundColor: props.backgroundColor,
        boxShadow: `0px 65px 27px -5px rgba(${props.color}, 0.2)`,
      }}
    >
      <div className={styles.rowContainer}>
        <FontAwesomeIcon
          icon={faFolderOpen}
          className={styles.folderIcon}
          style={{ color: `rgb(${props.color})` }}
        />
        <FontAwesomeIcon icon={faEllipsisV} className={styles.dotsIcon} />
      </div>
      <p className={styles.folderTitle}>{props.text}</p>
      <div className={styles.rowContainer}>
        <p className={styles.folderText}>{props.files} files</p>
        <p className={styles.folderText}>{props.storage}</p>
      </div>
    </div>
  );
};
export default Folder;
