import React from "react";
import SharedFolder from "./SharedFolder/SharedFolder";
import statistics from "../assets/stats.png";
import styles from "./RightPanel.module.scss";

const RightPanel = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Usage Stats</p>
      <img className={styles.image} src={statistics} alt="statistics" />
      <p className={styles.title}>Shared Folders</p>
      <SharedFolder title={"Sketch Files"} email={"mike@getnextdesign.com"} />
      <SharedFolder title={"AutoCAD Drawings"} email={"shakinu@gmail.com"} />
      <SharedFolder
        title={"Master Spreadsheets"}
        email={"johanna@google.com"}
      />
      <div className={styles.banner}>
        <div className={styles.dottedBanner}>
          Get 5GB extra!
          <button className={styles.button}>Click here!</button>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
