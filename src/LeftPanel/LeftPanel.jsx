import React from "react";
import Item from "./Item/Item";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import styles from "./LeftPanel.module.scss";

const LeftPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Item title={"Dashboard"} icon={faColumns} />
        <Item title={"All Files"} icon={faCopy} />
      </div>
      <div className={styles.row}>
        <Item title={"Shared"} icon={faShareSquare} />
        <Item title={"Favorites"} icon={faHeart} />
      </div>
      <div className={styles.row}>
        <Item title={"Pictures"} icon={faCameraRetro} />
        <Item title={"Videos"} icon={faYoutube} />
      </div>
      <div className={styles.row}>
        <Item title={"Documents"} icon={faFileAlt} />
        <Item title={"Signed"} icon={faFileSignature} />
      </div>

      <div className={styles.storage}>
        <p className={styles.storageTitle}>25.32GB used</p>
        <p className={styles.storageText}>79% used - 6.64GB free</p>
        <div className={styles.progressBar}>
          <div className={styles.innerProgressBar}></div>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}> Add More Space</button>
      </div>
    </div>
  );
};

export default LeftPanel;
