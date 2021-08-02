import React from "react";
import Folder from "./Folder/Folder";
import File from "./File/File";
import Document from "./Document/Document";
import AccessItem from "./AccessItem/AccessItem";
import building from "../assets/buildings.png";
import video from "../assets/video.png";
import customers from "../assets/customers.png";
import circle from "../assets/Circle.png";
import cilinder from "../assets/Cilinder.png";
import shape from "../assets/Shape.png";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import styles from "./MiddlePanel.module.scss";

const MiddlePanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.folders}>
        <Folder
          text="Design"
          color="255, 127, 92"
          backgroundColor="rgba(255, 127, 22, 0.1)"
          files={17}
          storage={"12GB"}
        />
        <Folder
          text="Music"
          color="253, 187, 100"
          backgroundColor="rgba(253, 187, 100, 0.1)"
          files={1852}
          storage={"28GB"}
        />

        <Folder
          text="Documents"
          color="131, 232, 244"
          backgroundColor="rgba(131, 232, 244, 0.1)"
          files={102}
          storage={"0.21GB"}
        />
        <Folder
          text="Images"
          color="108, 49, 136"
          backgroundColor="rgba(108, 49, 136, 0.1)"
          files={9}
          storage={"5GB"}
        />
      </div>

      <div className={styles.quickAccess}>
        <p>Quick Access</p>
        <div className={styles.quickAccessItems}>
          <AccessItem
            icon={faImages}
            color="rgb(33, 163, 67)"
            image={building}
            alt={"image"}
            text={"Buildings Image.png"}
          />
          <AccessItem
            icon={faPlayCircle}
            color="rgb(225, 64, 80)"
            image={video}
            alt={"video"}
            text={"Product Video.mp4"}
          />
          <AccessItem
            icon={faFilePdf}
            color="rgb(49, 70, 211)"
            image={customers}
            alt={"pdf"}
            text={"Customers.pdf"}
          />
        </div>
      </div>
      <div className={styles.files}>
        <div className={styles.recentFiles}>
          <p> Recently Uploaded</p>
          <File
            image={circle}
            title={"Circle.jpeg"}
            date={"12oct, 11:48pm"}
            size={"12MB"}
          />
          <File
            image={cilinder}
            title={"Cilinder.png"}
            date={"10oct, 10:23pm"}
            size={"64MB"}
          />
          <File
            image={circle}
            title={"Other.jpeg"}
            date={"5oct, 11:48pm"}
            size={"17MB"}
          />
          <File
            image={shape}
            title={"Shape.jpeg"}
            date={"29sep, 8:34pm"}
            size={"8MB"}
          />
        </div>
        <div className={styles.fileManager}>
          <p> File Manager</p>
          <div className={styles.filesContainer}>
            <Document title={"My Folders"} />
            <Document title={"Agreements"} />
            <Document title={"Blue Prints"} />
            <Document title={"Other"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddlePanel;
