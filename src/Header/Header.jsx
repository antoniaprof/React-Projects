import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <FontAwesomeIcon icon={faCloud} id={styles.cloudIcon} /> MY CLOUD
      </div>
      <div className={styles.searchSection}>
        <div className={styles.search}>
          <FontAwesomeIcon icon={faSearch} id={styles.searchIcon} />
          <p>Search files...</p>
        </div>
      </div>
      <div className={styles.userSection}>
        <FontAwesomeIcon icon={faUserTie} id={styles.userIcon} />
        <div>
          <p className={styles.username}>Lorem Ipsum</p>
          <p className={styles.userDetails}>lorem.ipsum937@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
